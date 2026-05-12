import { useState } from "react";

export default function WordScramble({ words, onScore }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  function handleInput(i, val) {
    if (checked) return;
    setAnswers(prev => ({ ...prev, [i]: val }));
  }

  function check() {
    const score = words.reduce((acc, w, i) =>
      answers[i]?.trim().toLowerCase() === w.answer.toLowerCase() ? acc + 1 : acc, 0
    );
    setChecked(true);
    onScore(score, words.length);
  }

  const correctCount = words.reduce((acc, w, i) =>
    answers[i]?.trim().toLowerCase() === w.answer.toLowerCase() ? acc + 1 : acc, 0
  );

  return (
    <div className="space-y-4">
      {words.map((item, i) => {
        const isCorrect = checked && answers[i]?.trim().toLowerCase() === item.answer.toLowerCase();
        const isWrong = checked && answers[i]?.trim().toLowerCase() !== item.answer.toLowerCase();
        return (
          <div key={i} className={`p-4 rounded-xl border-2 transition-colors ${
            isCorrect ? "border-green-400 bg-green-50"
            : isWrong ? "border-red-400 bg-red-50"
            : "border-gray-200 bg-white"
          }`}>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-2xl font-bold tracking-widest text-gray-400 font-mono bg-gray-100 px-3 py-1 rounded-lg">
                {item.scrambled}
              </span>
              <span className="text-gray-400">→</span>
              <input
                value={answers[i] || ""}
                onChange={e => handleInput(i, e.target.value)}
                disabled={checked}
                placeholder="Yozing..."
                className={`px-3 py-2 rounded-lg border-2 text-sm font-medium outline-none transition-colors ${
                  isCorrect ? "border-green-400 bg-green-50"
                  : isWrong ? "border-red-400 bg-red-50"
                  : "border-gray-300 focus:border-primary"
                }`}
                style={{ minWidth: 120 }}
              />
              {item.hint && (
                <span className="text-xs text-gray-400 italic">💡 {item.hint}</span>
              )}
            </div>
            {checked && isWrong && (
              <p className="text-xs text-green-600 font-medium mt-2">
                → To'g'ri javob: {item.answer}
              </p>
            )}
          </div>
        );
      })}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={check}
          disabled={Object.keys(answers).length < words.length}
          className="px-6 py-2.5 rounded-xl text-white font-medium disabled:opacity-40 transition"
          style={{ background: "#2c5f2e" }}
        >
          Tekshirish
        </button>
        {checked && (
          <span className="text-sm font-semibold">
            Natija: {correctCount}/{words.length}
          </span>
        )}
      </div>
    </div>
  );
}