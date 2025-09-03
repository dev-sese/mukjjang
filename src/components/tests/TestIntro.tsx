'use client';

import { useEffect } from 'react';

interface TestIntroProps {
  testInfo: {
    title: string;
    description: string;
    imageUrl?: string;
  };
  onTestStart: () => void;
}

const TestIntro = ({ testInfo, onTestStart }: TestIntroProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          {testInfo.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {testInfo.description}
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="mb-8">
        <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center">
          {testInfo.imageUrl ? (
            <img 
              src={testInfo.imageUrl} 
              alt={testInfo.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🍽️</div>
              <p className="text-lg text-gray-600 font-medium">
                나만의 미각 성향을 알아보세요!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <span className="text-2xl">⏱️</span>
          <span>약 3-5분 소요</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <span className="text-2xl">📊</span>
          <span>15-20개의 시나리오 질문</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <span className="text-2xl">🎯</span>
          <span>8개 미각 성향 그룹 분류</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          다양한 음식 상황에서의 선택을 통해 
          <br />
          <span className="font-semibold text-orange-600">당신만의 미각 성향</span>을 발견하고
          <br />
          맞춤형 음식 추천을 받아보세요!
        </p>
      </div>

      {/* Start Button */}
      <button
        onClick={onTestStart}
        className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        미각 테스트 시작하기 ✨
      </button>

      {/* Additional Info */}
      <div className="mt-6 text-sm text-gray-500">
        <p>* 익명으로 진행되며, 개인정보는 수집하지 않습니다</p>
      </div>
    </div>
  );
};

export default TestIntro;