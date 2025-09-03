'use client';

import { useEffect, useState } from 'react';
import TestRenderer from '@/components/tests/TestRenderer';
import { TasteTestQuestion } from '@/types/taste-test';

const TasteTestPage = () => {
  const [questions, setQuestions] = useState<TasteTestQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/taste-test/questions');
        if (response.ok) {
          const data = await response.json();
          setQuestions(data.data);
        } else {
          setError('질문을 불러오는 데 실패했습니다.');
        }
      } catch (err) {
        setError('네트워크 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-orange-400 mx-auto mb-4"></div>
          <p className="text-gray-600">미각 테스트를 준비하고 있어요...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">😅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">오류가 발생했어요</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors"
          >
            다시 시도하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto py-8">
        <TestRenderer
          questions={questions}
          testInfo={{
            title: '나의 미각 성향 테스트',
            description: '15개의 시나리오를 통해 당신만의 미각 성향을 발견하고 맞춤 음식을 추천받아보세요!'
          }}
        />
      </div>
    </div>
  );
};

export default TasteTestPage;