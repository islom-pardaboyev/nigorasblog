import { useState } from "react";
import { DndContext, PointerSensor, useDraggable, useDroppable, useSensor, useSensors } from "@dnd-kit/core";

function Chip({ id, label, used }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id, disabled: used });
  const style = transform ? { transform: `translate3d(${transform.x}px,${transform.y}px,0)` } : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}
      className={`select-none px-3 py-2 rounded-xl border text-sm font-medium transition-colors cursor-grab ${
        used ? "opacity-30 cursor-default bg-gray-100 border-gray-200"
             : "bg-white border-gray-300 hover:border-primary/50 hover:bg-primary/5"
      } ${isDragging ? "z-50 shadow-lg" : ""}`}>
      {label}
    </div>
  );
}

function CategoryColumn({ id, label, color, items, checked, correct }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const colors = {
    green: "border-green-400 bg-green-50",
    blue: "border-blue-400 bg-blue-50",
    amber: "border-amber-400 bg-amber-50",
    red: "border-red-400 bg-red-50",
    purple: "border-purple-400 bg-purple-50",
  };
  const headers = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
  };
  return (
    <div className="flex-1 min-w-[140px]">
      <div className={`text-white text-sm font-medium text-center py-2 rounded-t-xl ${headers[color] || "bg-gray-500"}`}>
        {label}
      </div>
      <div ref={setNodeRef} className={`min-h-[120px] p-3 rounded-b-xl border-2 flex flex-wrap gap-2 content-start transition-colors ${
        isOver ? colors[color] : "border-gray-200 bg-gray-50"
      }`}>
        {items.map(item => {
          const isCorrect = checked && correct[label]?.includes(item);
          const isWrong = checked && !correct[label]?.includes(item);
          return (
            <span key={item} className={`px-3 py-1 rounded-lg text-sm font-medium border ${
              isCorrect ? "bg-green-100 border-green-400 text-green-800"
              : isWrong ? "bg-red-100 border-red-400 text-red-800"
              : "bg-white border-gray-300"
            }`}>
              {item}
            </span>
          );
        })}
        {items.length === 0 && (
          <span className="text-xs text-gray-400 italic">Bu yerga torting</span>
        )}
      </div>
    </div>
  );
}

export default function CategorizeTask({ items, categories, correct, onScore }) {
  const [placements, setPlacements] = useState({});
  const [checked, setChecked] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
  const used = new Set(Object.keys(placements));

  const categoryItems = {};
  categories.forEach(c => { categoryItems[c.label] = []; });
  Object.entries(placements).forEach(([item, cat]) => {
    if (categoryItems[cat]) categoryItems[cat].push(item);
  });

  function onDragEnd(e) {
    if (!e.over) return;
    const item = String(e.active.id).replace("chip-", "");
    const cat = String(e.over.id).replace("cat-", "");
    setPlacements(prev => ({ ...prev, [item]: cat }));
    setChecked(false);
  }

  function check() {
    let score = 0, total = 0;
    Object.entries(correct).forEach(([cat, correctItems]) => {
      correctItems.forEach(item => {
        total++;
        if (placements[item] === cat) score++;
      });
    });
    setChecked(true);
    onScore(score, total);
  }

  let score = 0, total = 0;
  Object.entries(correct).forEach(([cat, correctItems]) => {
    correctItems.forEach(item => { total++; if (placements[item] === cat) score++; });
  });

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl border border-gray-200">
          {items.map(item => (
            <Chip key={item} id={`chip-${item}`} label={item} used={used.has(item)} />
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          {categories.map(cat => (
            <CategoryColumn
              key={cat.label}
              id={`cat-${cat.label}`}
              label={cat.label}
              color={cat.color}
              items={categoryItems[cat.label]}
              checked={checked}
              correct={correct}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={check}
          disabled={used.size < items.length}
          className="px-6 py-2.5 rounded-xl text-white font-medium disabled:opacity-40 transition"
          style={{ background: "#2c5f2e" }}
        >
          Tekshirish
        </button>
        {checked && (
          <span className="text-sm font-semibold">Natija: {score}/{total}</span>
        )}
      </div>
    </DndContext>
  );
}