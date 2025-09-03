'use client';

import { useEffect, useState } from 'react';
import { TasteTestQuestion, TraitCategory } from '@/types/taste-test';

interface TasteTestQuizProps {
  questions: TasteTestQuestion[];
  onTestComplete: (responses: { questionId: string; selectedOptionId: string }[]) => void;
}

const TasteTestQuiz = ({ questions, onTestComplete }: TasteTestQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<{ questionId: string; selectedOptionId: string }[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    const newResponse = {
      questionId: currentQuestion.id,
      selectedOptionId: optionId
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onTestComplete(updatedResponses);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);

  if (!currentQuestion) {
    return <div>질문을 불러오는 중...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-2 text-sm text-gray-600">
          {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
          {currentQuestion.scenario}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className="w-full p-6 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 group"
          >
            <div className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
              {option.text}
            </div>
          </button>
        ))}
      </div>

      {/* Question Counter */}
      <div className="mt-8 text-center">
        <span className="text-sm text-gray-500">
          질문 {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>
    </div>
  );
};

export default TasteTestQuiz;