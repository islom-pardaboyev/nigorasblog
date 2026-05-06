import DragAndDropQA from "./tasks/DragAndDropQA.jsx";
import ImageMatchDrag from "./tasks/ImageMatchDrag.jsx";
import DragToTable from "./tasks/DragToTable.jsx";
import OralQuestions from "./tasks/OralQuestions.jsx";

export default function TaskRenderer({ task, onScore }) {
  const handle = (c, t) => onScore(task.id, c, t);
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-card p-6 md:p-8">
      <h3 className="font-serif text-2xl md:text-3xl text-primary">{task.title}</h3>
      {task.instruction && <p className="text-gray-500 mt-2 mb-6">{task.instruction}</p>}
      {!task.instruction && <div className="mt-4" />}
      {task.type === "drag_and_drop_qa" && <DragAndDropQA pairs={task.pairs} onScore={handle} />}
      {task.type === "image_match_drag" && <ImageMatchDrag items={task.items} onScore={handle} />}
      {task.type === "drag_to_table" && (
        <DragToTable items={task.items} columns={task.columns} correct={task.correct} onScore={handle} />
      )}
      {task.type === "oral_questions" && <OralQuestions questions={task.questions} />}
    </section>
  );
}
