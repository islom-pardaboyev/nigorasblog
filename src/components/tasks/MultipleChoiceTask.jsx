import { useState } from "react";

export default function MultipleChoiceTask({ questions, onScore }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  function select(i, val) {
    if (checked) return;
    setAnswers(prev => ({ ...prev, [i]: val }));
  }

  function check() {
    const score = questions.reduce((acc, q, i) => answers[i] === q.answer ? acc + 1 : acc, 0);
    setChecked(true);
    onScore(score, questions.length);
  }

  const correctCount = questions.reduce((acc, q, i) => answers[i] === q.answer ? acc + 1 : acc, 0);

  return (
    <div className="space-y-6">
      {questions.map((item, i) => {
        const selected = answers[i];
        return (
          <div key={i} className="p-4 rounded-xl border-2 border-gray-200 bg-white">
            <p className="text-sm font-medium text-gray-800 mb-3">
              {i + 1}. {item.q}
            </p>
            <div className="space-y-2">
              {item.options.map((opt, j) => {
                const isSelected = selected === j;
                const isCorrect = checked && j === item.answer;
                const isWrong = checked && isSelected && j !== item.answer;
                return (
                  <button
                    key={j}
                    onClick={() => select(i, j)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm transition-colors flex items-center gap-3 ${
                      isCorrect
                        ? "border-green-500 bg-green-50 text-green-800"
                        : isWrong
                        ? "border-red-500 bg-red-50 text-red-800"
                        : isSelected
                        ? "border-gray-400 bg-gray-100"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 ${
                      isCorrect
                        ? "border-green-500 bg-green-500 text-white"
                        : isWrong
                        ? "border-red-500 bg-red-500 text-white"
                        : isSelected
                        ? "border-gray-500 bg-gray-500 text-white"
                        : "border-gray-300 text-gray-400"
                    }`}>
                      {["A", "B", "C", "D"][j]}
                    </span>
                    <span>{opt}</span>
                    {isCorrect && <span className="ml-auto text-green-600">✓</span>}
                    {isWrong && <span className="ml-auto text-red-600">✗</span>}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="flex items-center gap-4">
        <button
          onClick={check}
          disabled={Object.keys(answers).length < questions.length}
          className="px-6 py-2.5 rounded-xl text-white font-medium disabled:opacity-40 transition"
          style={{ background: "#2c5f2e" }}
        >
          Tekshirish
        </button>
        {checked && (
          <span className="text-sm font-semibold">
            Natija: {correctCount}/{questions.length}
          </span>
        )}
      </div>
    </div>
  );
}