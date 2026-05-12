import { useState } from "react";

export default function TrueFalseTask({ questions, onScore }) {
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
    <div className="space-y-3">
      {questions.map((item, i) => {
        const selected = answers[i];
        const isCorrect = checked && selected === item.answer;
        const isWrong = checked && selected !== undefined && selected !== item.answer;
        return (
          <div key={i} className={`p-4 rounded-xl border-2 transition-colors ${
            isCorrect ? "border-green-400 bg-green-50"
            : isWrong ? "border-red-400 bg-red-50"
            : "border-gray-200 bg-white"
          }`}>
            <p className="text-sm font-medium text-gray-800 mb-3">{i + 1}. {item.q}</p>
            <div className="flex gap-3">
              <button
                onClick={() => select(i, true)}
                className={`flex-1 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                  selected === true
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-200 hover:border-green-400 hover:bg-green-50"
                }`}
              >
                To'g'ri
              </button>
              <button
                onClick={() => select(i, false)}
                className={`flex-1 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                  selected === false
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-200 hover:border-red-400 hover:bg-red-50"
                }`}
              >
                Noto'g'ri
              </button>
            </div>
            {checked && isWrong && (
              <p className="text-xs text-green-600 font-medium mt-2">
                → To'g'ri javob: {item.answer ? "To'g'ri" : "Noto'g'ri"}
              </p>
            )}
          </div>
        );
      })}

      <div className="mt-6 flex items-center gap-4">
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