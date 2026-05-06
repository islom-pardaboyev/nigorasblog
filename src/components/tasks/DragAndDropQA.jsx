import { useMemo, useState } from "react";
import { DndContext, PointerSensor, useDraggable, useDroppable, useSensor, useSensors } from "@dnd-kit/core";

const shuffle = (a) => [...a].sort(() => Math.random() - 0.5);

function AnswerChip({ id, label, used }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id, disabled: used });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}
      className={`select-none px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
        used ? "opacity-30 cursor-default bg-gray-100 border-gray-200"
             : "bg-accent/10 border-accent/40 cursor-grab active:cursor-grabbing hover:bg-accent/20"
      } ${isDragging ? "z-50 shadow-lg" : ""}`}>
      {label}
    </div>
  );
}

function QuestionSlot({ id, question, placed, status, correctAnswer, showResults }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const border =
    status === "correct" ? "border-success bg-success/10"
    : status === "wrong" ? "border-danger bg-danger/10"
    : isOver ? "border-primary bg-primary/5"
    : "border-gray-200 bg-white";
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-dashed border-gray-200">
      <div className="flex-1 text-sm">{question}</div>
      <div ref={setNodeRef} className={`min-w-[140px] min-h-[44px] px-3 py-2 rounded-lg border-2 flex items-center justify-center text-sm font-medium ${border}`}>
        {placed ? <span>{placed}</span> : <span className="text-gray-400 text-xs">Bu yerga torting</span>}
      </div>
      {showResults && status === "wrong" && (
        <span className="text-xs text-success font-medium">→ {correctAnswer}</span>
      )}
    </div>
  );
}

export default function DragAndDropQA({ pairs, onScore }) {
  const [placements, setPlacements] = useState({});
  const [checked, setChecked] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
  const shuffledAnswers = useMemo(() => shuffle(pairs.map((p) => p.answer)), [pairs]);
  const used = new Set(Object.values(placements));

  function onDragEnd(e) {
    if (!e.over) return;
    const answer = String(e.active.id).replace("ans-", "");
    const qIdx = Number(String(e.over.id).replace("q-", ""));
    setPlacements((prev) => {
      const next = {};
      for (const [k, v] of Object.entries(prev)) if (v !== answer) next[Number(k)] = v;
      next[qIdx] = answer;
      return next;
    });
    setChecked(false);
  }

  function check() {
    const c = pairs.reduce((a, p, i) => placements[i] === p.answer ? a + 1 : a, 0);
    setChecked(true);
    onScore(c, pairs.length);
  }
  const correctCount = pairs.reduce((a, p, i) => placements[i] === p.answer ? a + 1 : a, 0);

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-2">
          {pairs.map((p, i) => {
            const placed = placements[i];
            const status = checked ? (placed === p.answer ? "correct" : "wrong") : undefined;
            return (
              <QuestionSlot key={i} id={`q-${i}`} question={p.question} placed={placed}
                status={status} correctAnswer={p.answer} showResults={checked} />
            );
          })}
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Javoblar</p>
          <div className="flex flex-wrap gap-2 p-4 bg-cream rounded-xl border border-gray-200">
            {shuffledAnswers.map((a) => (
              <AnswerChip key={a} id={`ans-${a}`} label={a} used={used.has(a)} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button onClick={check} className="px-6 py-2.5 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition">
          Tekshirish
        </button>
        {checked && <span className="text-sm font-semibold">Natija: {correctCount}/{pairs.length}</span>}
      </div>
    </DndContext>
  );
}
