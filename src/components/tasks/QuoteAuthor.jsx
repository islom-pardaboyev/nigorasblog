import { useState } from "react";

export default function QuoteAuthor({ quotes, onScore }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  function select(i, val) {
    if (checked) return;
    setAnswers(prev => ({ ...prev, [i]: val }));
  }

  function check() {
    const score = quotes.reduce((acc, q, i) => answers[i] === q.answer ? acc + 1 : acc, 0);
    setChecked(true);
    onScore(score, quotes.length);
  }

  const correctCount = quotes.reduce((acc, q, i) => answers[i] === q.answer ? acc + 1 : acc, 0);

  return (
    <div className="space-y-6">
      {quotes.map((item, i) => {
        const selected = answers[i];
        return (
          <div key={i} className="p-4 rounded-xl border-2 border-gray-200 bg-white">
            <div className="flex gap-2 mb-4">
              <span className="text-2xl text-gray-300">"</span>
              <p className="text-base italic text-gray-700 leading-relaxed">{item.quote}</p>
              <span className="text-2xl text-gray-300 self-end">"</span>
            </div>
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Kim aytdi?</p>
            <div className="flex flex-wrap gap-2">
              {item.options.map((opt, j) => {
                const isSelected = selected === opt;
                const isCorrect = checked && opt === item.answer;
                const isWrong = checked && isSelected && opt !== item.answer;
                return (
                  <button key={j} onClick={() => select(i, opt)}
                    className={`px-4 py-2 rounded-xl border-2 text-sm font-medium transition-colors ${
                      isCorrect ? "border-green-500 bg-green-50 text-green-800"
                      : isWrong ? "border-red-500 bg-red-50 text-red-800"
                      : isSelected ? "border-gray-500 bg-gray-100"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}>
                    {opt}
                    {isCorrect && " ✓"}
                    {isWrong && " ✗"}
                  </button>
                );
              })}
            </div>
            {checked && selected !== item.answer && (
              <p className="text-xs text-green-600 font-medium mt-2">
                → To'g'ri javob: {item.answer}
              </p>
            )}
          </div>
        );
      })}
      <div className="flex items-center gap-4">
        <button
          onClick={check}
          disabled={Object.keys(answers).length < quotes.length}
          className="px-6 py-2.5 rounded-xl text-white font-medium disabled:opacity-40 transition"
          style={{ background: "#2c5f2e" }}
        >
          Tekshirish
        </button>
        {checked && (
          <span className="text-sm font-semibold">Natija: {correctCount}/{quotes.length}</span>
        )}
      </div>
    </div>
  );
}