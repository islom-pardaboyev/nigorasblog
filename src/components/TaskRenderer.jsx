import DragAndDropQA from "./tasks/DragAndDropQA.jsx";
import ImageMatchDrag from "./tasks/ImageMatchDrag.jsx";
import DragToTable from "./tasks/DragToTable.jsx";
import OralQuestions from "./tasks/OralQuestions.jsx";
import OrderingTask from "./tasks/OrderingTask.jsx";
import ImageMatching from "./tasks/ImageMatching.jsx";
import WrittenQuestions from "./tasks/WrittenQuestions.jsx";
import TrueFalseTask from "./tasks/TrueFalseTask.jsx";
import FillBlankTask from "./tasks/FillBlankTask.jsx";
import MultipleChoiceTask from "./tasks/MultipleChoiceTask.jsx";
import WordScramble from "./tasks/WordScramble.jsx";
import CategorizeTask from "./tasks/CategorizeTask.jsx";
import EmojiMatch from "./tasks/EmojiMatch.jsx";
import QuoteAuthor from "./tasks/QuoteAuthor.jsx";

export default function TaskRenderer({ task, onScore }) {
  const handle = (c, t) => onScore(task.id, c, t);
  return (
    <section className="ticket p-7 md:p-10">
      <div className="relative z-10">
      <h3 className="font-serif text-2xl md:text-3xl text-primary leading-tight">
        {task.title}
      </h3>
      {task.instruction && (
        <p className="italic text-gray-500 mt-2 mb-6">{task.instruction}</p>
      )}
      {!task.instruction && <div className="mt-4" />}
      {task.type === "drag_and_drop_qa" && (
        <DragAndDropQA pairs={task.pairs} onScore={handle} />
      )}
      {task.type === "image_match_drag" && (
        <ImageMatchDrag items={task.items} onScore={handle} />
      )}
      {task.type === "drag_to_table" && (
        <DragToTable
          items={task.items}
          columns={task.columns}
          correct={task.correct}
          onScore={handle}
        />
      )}
      {task.type === "oral_questions" && (
        <OralQuestions questions={task.questions} />
      )}
      {task.type === "ordering" && (
        <OrderingTask onScore={handle} correct_order={task.correct_order} />
      )}
      {task.type === "image_matching" && (
        <ImageMatching
          items={task.items}
          images={task.images}
          previewImage={task.previewImage}
          onScore={handle}
        />
      )}
      {task.type === "written_questions" && (
        <WrittenQuestions questions={task.questions} />
      )}
      {task.type === "true_false" && (
        <TrueFalseTask questions={task.questions} onScore={handle} />
      )}
      {task.type === 'fill_blank' && (
        <FillBlankTask questions={task.questions} onScore={handle} />
      )}
      {task.type === 'multiple_choice' && (
        <MultipleChoiceTask questions={task.questions} onScore={handle} />
      )}
      {task.type === 'word_scramble' && (
        <WordScramble words={task.words} onScore={handle} />
      )}
      {task.type === 'categorize' && (
        <CategorizeTask
          items={task.items}
          categories={task.categories}
          correct={task.correct}
          onScore={handle}
        />
      )}
      {task.type === 'emoji_match' && (
        <EmojiMatch pairs={task.pairs} onScore={handle} />
      )}
      {task.type === 'quote_author' && (
        <QuoteAuthor quotes={task.quotes} onScore={handle} />
      )}
      </div>
    </section>
  );
}
