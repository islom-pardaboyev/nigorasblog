import { useMemo, useState } from "react";
import {
  DndContext,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

// Chip — o'ng tomondagi sudraladigan element
function Chip({ id, label, used }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id, disabled: used });
  const style = transform
    ? { transform: `translate3d(${transform.x}px,${transform.y}px,0)` }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`select-none px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors
        ${
          used
            ? "opacity-30 cursor-default bg-gray-100 border-gray-200"
            : "bg-accent/10 border-accent/40 cursor-grab active:cursor-grabbing hover:bg-accent/20"
        }
        ${isDragging ? "z-50 shadow-lg" : ""}`}
    >
      {label}
    </div>
  );
}

// Slot — chap tomondagi raqamli joy
function Slot({ index, placed, status, correctLabel, showResults }) {
  const { isOver, setNodeRef } = useDroppable({ id: `slot-${index}` });
  const border =
    status === "correct"
      ? "border-success bg-success/10"
      : status === "wrong"
        ? "border-danger bg-danger/10"
        : isOver
          ? "border-primary bg-primary/5"
          : "border-gray-200 bg-white";
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-dashed border-gray-200">
      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
        {index + 1}
      </span>
      <div
        ref={setNodeRef}
        className={`flex-1 min-h-[44px] px-3 py-2 rounded-lg border-2 flex items-center justify-center text-sm font-medium ${border}`}
      >
        {placed ? (
          <span>{placed}</span>
        ) : (
          <span className="text-gray-400 text-xs">Bu yerga torting</span>
        )}
      </div>
      {showResults && status === "wrong" && (
        <span className="text-xs text-success font-medium shrink-0">
          → {correctLabel}
        </span>
      )}
    </div>
  );
}

export default function OrderingTask({ correct_order, onScore }) {
  const shuffled = useMemo(
    () => [...correct_order].sort(() => Math.random() - 0.5),
    [correct_order],
  );
  const [placements, setPlacements] = useState({}); // { slotIndex: "label" }
  const [checked, setChecked] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
  );
  const used = new Set(Object.values(placements));

  function onDragEnd(e) {
    if (!e.over) return;
    const label = String(e.active.id).replace("chip-", "");
    const slotIdx = Number(String(e.over.id).replace("slot-", ""));
    setPlacements((prev) => {
      const next = {};
      for (const [k, v] of Object.entries(prev))
        if (v !== label) next[Number(k)] = v;
      next[slotIdx] = label;
      return next;
    });
    setChecked(false);
  }

  function check() {
    const score = correct_order.reduce(
      (acc, label, i) => (placements[i] === label ? acc + 1 : acc),
      0,
    );
    setChecked(true);
    onScore(score, correct_order.length);
  }

  const correctCount = correct_order.reduce(
    (acc, label, i) => (placements[i] === label ? acc + 1 : acc),
    0,
  );

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Chap: raqamli slotlar */}
        <div className="md:col-span-2 space-y-2">
          {correct_order.map((label, i) => {
            const status = checked
              ? placements[i] === label
                ? "correct"
                : "wrong"
              : undefined;
            return (
              <Slot
                key={i}
                index={i}
                placed={placements[i]}
                status={status}
                correctLabel={label}
                showResults={checked}
              />
            );
          })}
        </div>

        {/* O'ng: chiplar */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
            Qushlar
          </p>
          <div className="flex flex-wrap gap-2 p-4 bg-cream rounded-xl border border-gray-200">
            {shuffled.map((label) => (
              <Chip
                key={label}
                id={`chip-${label}`}
                label={label}
                used={used.has(label)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={check}
          className="px-6 py-2.5 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition"
        >
          Tekshirish
        </button>
        {checked && (
          <span className="text-sm font-semibold">
            Natija: {correctCount}/{correct_order.length}
          </span>
        )}
      </div>
    </DndContext>
  );
}
