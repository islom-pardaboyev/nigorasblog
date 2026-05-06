import { useMemo, useState } from "react";
import { DndContext, PointerSensor, useDraggable, useDroppable, useSensor, useSensors } from "@dnd-kit/core";

const shuffle = (a) => [...a].sort(() => Math.random() - 0.5);

function Chip({ id, label, status }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;
  const tone =
    status === "correct" ? "bg-success/15 border-success"
    : status === "wrong" ? "bg-danger/15 border-danger"
    : "bg-accent/10 border-accent/40 hover:bg-accent/20";
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}
      className={`select-none px-3 py-2 rounded-lg border text-sm font-medium cursor-grab active:cursor-grabbing ${tone} ${isDragging ? "z-50 shadow-lg" : ""}`}>
      {label}
    </div>
  );
}

function Column({ id, title, children, tone }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef}
      className={`rounded-2xl border-2 border-dashed p-4 min-h-[180px] transition-colors ${
        isOver ? "border-primary bg-primary/5" : "border-gray-200 bg-white"
      }`}>
      <h4 className={`font-serif text-xl mb-3 ${tone}`}>{title}</h4>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function DragToTable({ items, columns, correct, onScore }) {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
  const initialPool = useMemo(() => shuffle(items), [items]);
  const [location, setLocation] = useState(
    Object.fromEntries(initialPool.map((i) => [i, "pool"]))
  );
  const [checked, setChecked] = useState(false);

  function onDragEnd(e) {
    if (!e.over) return;
    const item = String(e.active.id);
    const target = String(e.over.id);
    setLocation((prev) => ({ ...prev, [item]: target }));
    setChecked(false);
  }
  function check() {
    let c = 0;
    for (const item of items) {
      const placedIn = location[item];
      if (placedIn !== "pool" && correct[placedIn]?.includes(item)) c++;
    }
    setChecked(true);
    onScore(c, items.length);
  }
  function statusFor(item) {
    if (!checked) return undefined;
    const placedIn = location[item];
    if (placedIn === "pool") return "wrong";
    return correct[placedIn]?.includes(item) ? "correct" : "wrong";
  }
  const correctCount = items.reduce((a, it) => statusFor(it) === "correct" ? a + 1 : a, 0);

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <Column id="pool" title="So'zlar" tone="text-ink">
        {items.filter((i) => location[i] === "pool").map((i) => <Chip key={i} id={i} label={i} />)}
      </Column>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {columns.map((col) => (
          <Column key={col} id={col} title={col} tone={col === "Xavfli" ? "text-danger" : "text-primary"}>
            {items.filter((i) => location[i] === col).map((i) => (
              <Chip key={i} id={i} label={i} status={statusFor(i)} />
            ))}
          </Column>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button onClick={check} className="px-6 py-2.5 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition">
          Tekshirish
        </button>
        {checked && <span className="text-sm font-semibold">Natija: {correctCount}/{items.length}</span>}
      </div>
    </DndContext>
  );
}
