import { useMemo, useState } from "react";
import { DndContext, PointerSensor, useDraggable, useDroppable, useSensor, useSensors } from "@dnd-kit/core";

const shuffle = (a) => [...a].sort(() => Math.random() - 0.5);

function NameChip({ id, label, used }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id, disabled: used });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}
      className={`select-none px-3 py-2 rounded-lg border text-sm font-medium ${
        used ? "opacity-30 bg-gray-100"
             : "bg-accent/10 border-accent/40 cursor-grab active:cursor-grabbing hover:bg-accent/20"
      } ${isDragging ? "z-50 shadow-lg" : ""}`}>
      {label}
    </div>
  );
}

function ImageSlot({ id, src, placed, status, correctName, showResults }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const ring =
    status === "correct" ? "ring-success"
    : status === "wrong" ? "ring-danger"
    : isOver ? "ring-primary"
    : "ring-gray-200";
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <img src={src} alt={correctName} className="w-full h-32 object-cover" loading="lazy" />
      <div ref={setNodeRef}
        className={`min-h-[52px] m-2 rounded-lg ring-2 flex items-center justify-center px-2 text-sm font-medium ${ring}`}>
        {placed ? <span>{placed}</span> : <span className="text-gray-400 text-xs">Nomni torting</span>}
      </div>
      {showResults && status === "wrong" && (
        <p className="text-xs text-success px-3 pb-2">To'g'ri javob: {correctName}</p>
      )}
    </div>
  );
}

export default function ImageMatchDrag({ items, onScore }) {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
  const shuffledImages = useMemo(() => shuffle(items.map((_, i) => i)), [items]);
  const shuffledNames = useMemo(() => shuffle(items.map((i) => i.name)), [items]);
  const [placements, setPlacements] = useState({});
  const [checked, setChecked] = useState(false);
  const used = new Set(Object.values(placements));

  function onDragEnd(e) {
    if (!e.over) return;
    const name = String(e.active.id).replace("name-", "");
    const idx = Number(String(e.over.id).replace("img-", ""));
    setPlacements((prev) => {
      const next = {};
      for (const [k, v] of Object.entries(prev)) if (v !== name) next[Number(k)] = v;
      next[idx] = name;
      return next;
    });
    setChecked(false);
  }
  function check() {
    const c = items.reduce((a, it, i) => placements[i] === it.name ? a + 1 : a, 0);
    setChecked(true);
    onScore(c, items.length);
  }
  const correctCount = items.reduce((a, it, i) => placements[i] === it.name ? a + 1 : a, 0);

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledImages.map((origIdx) => {
          const it = items[origIdx];
          const placed = placements[origIdx];
          const status = checked ? (placed === it.name ? "correct" : "wrong") : undefined;
          const imageUrl = it.imageUrl || `https://source.unsplash.com/400x300/?${encodeURIComponent(it.searchQuery)}`;
          return (
            <ImageSlot key={origIdx} id={`img-${origIdx}`}
              src={imageUrl}
              placed={placed} status={status} correctName={it.name} showResults={checked} />
          );
        })}
      </div>
      <div className="mt-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Hasharot nomlari</p>
        <div className="flex flex-wrap gap-2 p-4 bg-cream rounded-xl border border-gray-200">
          {shuffledNames.map((n) => (
            <NameChip key={n} id={`name-${n}`} label={n} used={used.has(n)} />
          ))}
        </div>
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
