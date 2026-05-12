import { useState } from "react";

export default function FillBlankTask({ questions, onScore }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  function select(i, val) {
    if (checked) return;
    setAnswers(prev => ({ ...prev, [i]: val }));
  }

  function check() {
    const score = questions.reduce((acc, q, i) => answers[i] === q.blank ? acc + 1 : acc, 0);
    setChecked(true);
    onScore(score, questions.length);
  }

  const correctCount = questions.reduce((acc, q, i) => answers[i] === q.blank ? acc + 1 : acc, 0);

  return (
    <div className="space-y-6">
      {questions.map((item, i) => {
        const selected = answers[i];
        const isCorrect = checked && selected === item.blank;
        const isWrong = checked && selected !== undefined && selected !== item.blank;
        return (
          <div key={i} className={`p-4 rounded-xl border-2 transition-colors ${
            isCorrect ? "border-green-400 bg-green-50"
            : isWrong ? "border-red-400 bg-red-50"
            : "border-gray-200 bg-white"
          }`}>
            <p className="text-sm text-gray-800 mb-3 leading-relaxed">
              <span>{i + 1}. {item.before} </span>
              <span className={`inline-block min-w-[100px] px-3 py-0.5 rounded-lg border-2 font-medium text-center ${
                isCorrect ? "border-green-500 bg-green-100 text-green-800"
                : isWrong ? "border-red-500 bg-red-100 text-red-800"
                : selected ? "border-gray-400 bg-gray-100"
                : "border-dashed border-gray-300 text-gray-400"
              }`}>
                {selected || "___"}
              </span>
              <span> {item.after}</span>
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => select(i, opt)}
                  className={`px-4 py-1.5 rounded-lg border-2 text-sm font-medium transition-colors ${
                    selected === opt
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-gray-200 hover:border-primary/40 hover:bg-primary/5"
                  }`}
                  style={selected === opt ? { borderColor: "#2c5f2e", color: "#2c5f2e", background: "#f0f7f0" } : {}}
                >
                  {opt}
                </button>
              ))}
            </div>

            {checked && isWrong && (
              <p className="text-xs text-green-600 font-medium mt-2">
                → To'g'ri javob: {item.blank}
              </p>
            )}
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