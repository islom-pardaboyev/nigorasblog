import { useState } from "react";
import {
  DndContext,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

function EmojiCard({ id, emoji }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });
  const style = transform
    ? { transform: `translate3d(${transform.x}px,${transform.y}px,0)` }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`select-none w-16 h-16 flex items-center justify-center text-3xl rounded-2xl border-2 border-gray-200 bg-white cursor-grab hover:border-primary/40 hover:bg-primary/5 transition-colors ${
        isDragging ? "z-50 shadow-lg" : ""
      }`}
    >
      {emoji}
    </div>
  );
}

function WordSlot({ id, word, placed, status, correctEmoji, showResults }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-dashed border-gray-200 bg-white">
      <div
        ref={setNodeRef}
        className={`w-14 h-14 flex items-center justify-center text-2xl rounded-xl border-2 transition-colors ${
          status === "correct"
            ? "border-green-400 bg-green-50"
            : status === "wrong"
              ? "border-red-400 bg-red-50"
              : isOver
                ? "border-primary/40 bg-primary/5"
                : "border-gray-200 bg-gray-50"
        }`}
      >
        {placed || <span className="text-gray-300 text-sm">?</span>}
      </div>
      <span className="text-sm font-medium text-gray-700">{word}</span>
      {showResults && status === "wrong" && (
        <span className="ml-auto text-lg">{correctEmoji}</span>
      )}
    </div>
  );
}

export default function EmojiMatch({ pairs, onScore }) {
  const [placements, setPlacements] = useState({});
  const [checked, setChecked] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
  );
  const used = new Set(Object.values(placements));

  function onDragEnd(e) {
    if (!e.over) return;
    const emoji = String(e.active.id).replace("emoji-", "");
    const wordIdx = Number(String(e.over.id).replace("word-", ""));
    setPlacements((prev) => {
      const next = {};
      for (const [k, v] of Object.entries(prev))
        if (v !== emoji) next[Number(k)] = v;
      next[wordIdx] = emoji;
      return next;
    });
    setChecked(false);
  }

  function check() {
    const score = pairs.reduce(
      (acc, p, i) => (placements[i] === p.emoji ? acc + 1 : acc),
      0,
    );
    setChecked(true);
    onScore(score, pairs.length);
  }

  const correctCount = pairs.reduce(
    (acc, p, i) => (placements[i] === p.emoji ? acc + 1 : acc),
    0,
  );

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-2">
          {pairs.map((p, i) => {
            const status = checked
              ? placements[i] === p.emoji
                ? "correct"
                : "wrong"
              : undefined;
            return (
              <WordSlot
                key={i}
                id={`word-${i}`}
                word={p.word}
                placed={placements[i]}
                status={status}
                correctEmoji={p.emoji}
                showResults={checked}
              />
            );
          })}
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
            Emojilar
          </p>
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl border border-gray-200">
            {pairs.map((p) => (
              <EmojiCard
                key={p.emoji}
                id={`emoji-${p.emoji}`}
                emoji={p.emoji}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={check}
          disabled={Object.keys(placements).length < pairs.length}
          className="px-6 py-2.5 rounded-xl text-white font-medium disabled:opacity-40 transition"
          style={{ background: "#2c5f2e" }}
        >
          Tekshirish
        </button>
        {checked && (
          <span className="text-sm font-semibold">
            Natija: {correctCount}/{pairs.length}
          </span>
        )}
      </div>
    </DndContext>
  );
}
