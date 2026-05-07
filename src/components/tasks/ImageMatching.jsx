import { useState } from "react";
import { DndContext, PointerSensor, useDraggable, useDroppable, useSensor, useSensors } from "@dnd-kit/core";

// Chap tomondagi qush nomi chip
function BirdChip({ id, name, used }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id, disabled: used });
  const style = transform ? { transform: `translate3d(${transform.x}px,${transform.y}px,0)` } : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}
      className={`select-none px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors
        ${used ? "opacity-30 cursor-default bg-gray-100 border-gray-200"
               : "bg-accent/10 border-accent/40 cursor-grab active:cursor-grabbing hover:bg-accent/20"}
        ${isDragging ? "z-50 shadow-lg" : ""}`}>
      {name}
    </div>
  );
}

// O'ng tomondagi rasm + drop zone
function ImageSlot({ image, placed, status, correctName, showResults }) {
  const { isOver, setNodeRef } = useDroppable({ id: `img-${image.label}` });
  const border =
    status === "correct" ? "border-success bg-success/10"
    : status === "wrong"   ? "border-danger bg-danger/10"
    : isOver             ? "border-primary bg-primary/5"
    :                      "border-gray-200 bg-white";
  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 bg-gray-50">
      {/* Rasm belgisi */}
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
          {image.label}
        </span>
        <span className="text-xs text-gray-500">{image.description}</span>
      </div>
      {/* Drop zone */}
      <div ref={setNodeRef}
        className={`min-h-[44px] px-3 py-2 rounded-lg border-2 flex items-center justify-center text-sm font-medium ${border}`}>
        {placed
          ? <span>{placed}</span>
          : <span className="text-gray-400 text-xs">Bu yerga torting</span>}
      </div>
      {showResults && status === "wrong" && (
        <span className="text-xs text-success font-medium">→ To'g'risi: {correctName}</span>
      )}
    </div>
  );
}

export default function ImageMatchingTask({ items, images, previewImage, onScore }) {
  // Faqat rasmi bor qushlar drag qilinadi
  

  const [placements, setPlacements] = useState({});  // { "A": "Chumchuq", "B": "Qarg'a" ... }
  const [checked, setChecked]       = useState(false);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
  const used = new Set(Object.values(placements));

  function onDragEnd(e) {
    if (!e.over) return;
    const name  = String(e.active.id).replace("bird-", "");
    const label = String(e.over.id).replace("img-", "");
    setPlacements((prev) => {
      const next = {};
      for (const [k, v] of Object.entries(prev)) if (v !== name) next[k] = v;
      next[label] = name;
      return next;
    });
    setChecked(false);
  }

  function check() {
    const score = items.reduce((acc, item) =>
      placements[item.image] === item.name ? acc + 1 : acc, 0
    );
    setChecked(true);
    onScore(score, items.length);
  }

  const correctCount = items.reduce((acc, item) =>
    placements[item.image] === item.name ? acc + 1 : acc, 0
  );

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <div className="space-y-6">

        {/* Umumiy rasm */}
        <img src={previewImage} alt="Qush inlari"
          className="w-full max-w-lg mx-auto rounded-2xl shadow-md border border-gray-100" />

        <div className="grid md:grid-cols-3 gap-6">

          {/* Chap: drag qilinadigan qush nomlari */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Qushlar</p>
            <div className="flex flex-col gap-2 p-4 bg-cream rounded-xl border border-gray-200">
              {items.map((item) => (
                <BirdChip key={item.name} id={`bird-${item.name}`} name={item.name} used={used.has(item.name)} />
              ))}
            </div>
          </div>

          {/* O'ng: rasm slotlari */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {images.map((image) => {
              const correctItem = items.find((i) => i.image === image.label);
              const status = checked
                ? (placements[image.label] === correctItem?.name ? "correct" : "wrong")
                : undefined;
              return (
                <ImageSlot key={image.label} image={image}
                  placed={placements[image.label]}
                  status={status}
                  correctName={correctItem?.name}
                  showResults={checked} />
              );
            })}
          </div>

        </div>

        <div className="flex items-center gap-4">
          <button onClick={check}
            className="px-6 py-2.5 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition">
            Tekshirish
          </button>
          {checked && <span className="text-sm font-semibold">Natija: {correctCount}/{items.length}</span>}
        </div>

      </div>
    </DndContext>
  );
}