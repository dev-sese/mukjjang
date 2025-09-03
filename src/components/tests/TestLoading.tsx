'use client';

import { useEffect, useState } from 'react';
import { TestResponse, TestResult } from '@/types/taste-test';

interface TestLoadingProps {
  responses: TestResponse[];
  onResultReady: (result: TestResult) => void;
}

const TestLoading = ({ responses, onResultReady }: TestLoadingProps) => {
  const [loadingText, setLoadingText] = useState('응답을 분석하고 있어요');
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const submitTest = async () => {
      try {
        const response = await fetch('/api/taste-test/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ responses }),
        });

        if (response.ok) {
          const data = await response.json();
          setResult(data.data);
          setLoadingText('결과를 준비하고 있어요');
          
          setTimeout(() => {
            onResultReady(data.data);
          }, 1500);
        } else {
          console.error('Failed to submit test');
          setLoadingText('오류가 발생했습니다');
        }
      } catch (error) {
        console.error('Error submitting test:', error);
        setLoadingText('오류가 발생했습니다');
      }
    };

    // 로딩 텍스트 애니메이션
    const textAnimation = [
      '응답을 분석하고 있어요',
      '미각 성향을 파악하고 있어요', 
      '맞춤 추천을 준비하고 있어요',
      '거의 다 됐어요'
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % textAnimation.length;
      setLoadingText(textAnimation[textIndex]);
    }, 1000);

    // 2초 후 API 호출
    const submitTimer = setTimeout(() => {
      submitTest();
      clearInterval(textInterval);
    }, 2000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(submitTimer);
    };
  }, [responses, onResultReady]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center py-20">
        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-orange-400 mx-auto"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {loadingText}
        </h2>

        {/* Loading Steps */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span>응답 분석 중...</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
            <span>성향 분류 중...</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            <span>추천 준비 중...</span>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
          <h3 className="font-semibold text-gray-700 mb-2">💡 잠깐!</h3>
          <p className="text-sm text-gray-600">
            사람마다 미각 수용체의 개수와 민감도가 달라서
            <br />
            같은 음식도 완전히 다르게 느낄 수 있어요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestLoading;