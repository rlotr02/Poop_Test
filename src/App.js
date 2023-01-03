import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResultPage from './components/Result/ResultPage';
import StartPage from './components/Start/StartPage';
import TestPage from './components/Test/TestPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result/:result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
