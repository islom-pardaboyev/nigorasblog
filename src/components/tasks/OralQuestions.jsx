export default function OralQuestions({ questions }) {
  return (
    <div>
      <p className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
        O'qituvchi baholaydi
      </p>
      <ol className="space-y-4 list-decimal list-inside">
        {questions.map((q, i) => (
          <li key={i} className="text-[17px] leading-relaxed">{q}</li>
        ))}
      </ol>
    </div>
  );
}
