'use client';

import { useState } from 'react';
import { TasteTestQuestion, TestResponse, TestResult as TestResultType } from '@/types/taste-test';
import TasteTestQuiz from './TasteTestQuiz';
import TestIntro from './TestIntro';
import TestLoading from './TestLoading';
import TestResult from './TestResult';

export const TEST_MODE = {
  intro: 'INTRO',
  quiz: 'QUIZ', 
  loading: 'LOADING',
  result: 'RESULT'
} as const;

type TestModeType = (typeof TEST_MODE)[keyof typeof TEST_MODE];

interface TestRendererProps {
  questions: TasteTestQuestion[];
  testInfo: {
    title: string;
    description: string;
    imageUrl?: string;
  };
}

const TestRenderer = ({ questions, testInfo }: TestRendererProps) => {
  const [mode, setMode] = useState<TestModeType>(TEST_MODE.intro);
  const [responses, setResponses] = useState<TestResponse[]>([]);
  const [testResult, setTestResult] = useState<TestResultType | null>(null);

  const handleTestStart = () => {
    setMode(TEST_MODE.quiz);
  };

  const handleTestComplete = (testResponses: TestResponse[]) => {
    setResponses(testResponses);
    setMode(TEST_MODE.loading);
  };

  const handleResultReady = (result: TestResultType) => {
    setTestResult(result);
    setMode(TEST_MODE.result);
  };

  const handleRetakeTest = () => {
    setResponses([]);
    setTestResult(null);
    setMode(TEST_MODE.intro);
  };

  const handleShareResult = () => {
    if (testResult) {
      // TODO: 실제 공유 기능 구현
      alert('공유 기능은 곧 구현됩니다!');
    }
  };

  switch (mode) {
    case TEST_MODE.intro:
      return (
        <TestIntro
          testInfo={testInfo}
          onTestStart={handleTestStart}
        />
      );
      
    case TEST_MODE.quiz:
      return (
        <TasteTestQuiz
          questions={questions}
          onTestComplete={handleTestComplete}
        />
      );
      
    case TEST_MODE.loading:
      return (
        <TestLoading
          responses={responses}
          onResultReady={handleResultReady}
        />
      );
      
    case TEST_MODE.result:
      return testResult ? (
        <TestResult
          profile={testResult.profile}
          onRetakeTest={handleRetakeTest}
          onShareResult={handleShareResult}
        />
      ) : (
        <div className="text-center p-8">
          <p>결과를 불러오는 중입니다...</p>
        </div>
      );
      
    default:
      return (
        <div className="text-center p-8">
          <p>잘못된 페이지입니다.</p>
        </div>
      );
  }
};

export default TestRenderer;