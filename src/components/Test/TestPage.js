import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import data from '../common/API/QuestionsAPI.json';
import resultdata from '../common/API/ResultAPI.json';
import LoadingPage from '../Loading/LoadingPage';
import Information from '../common/Information';

const TestPage = () => {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  var E = 0,
    F = 0,
    J = 0,
    mbti = '';

  const nextSlide = (i) => {
    result.push(data[num].answers[i].type);
    setResult(result);
    setNum(num + 1);
  };

  const PrevClick = () => {
    if (num === 0) {
      navigate(`/`);
    } else {
      result.pop();
      setNum(num - 1);
    }
  };

  const ResultTest = () => {
    for (var i = 0; i < result.length; i++) {
      if (result[i] === 'E') {
        E++;
      }
      if (result[i] === 'F') {
        F++;
      }
      if (result[i] === 'J') {
        J++;
      }
    }
    if (E === 1) {
      mbti += 'E';
    } else {
      mbti += 'I';
    }
    if (F >= 2) {
      mbti += 'F';
    } else {
      mbti += 'T';
    }
    if (J >= 2) {
      mbti += 'J';
    } else {
      mbti += 'P';
    }
    setTimeout(() => {
      for (var j = 0; j < resultdata.length; j++) {
        if (resultdata[j].id1 === mbti || resultdata[j].id2 === mbti) {
          navigate(`/result/${resultdata[j].name}`);
        }
      }
    }, Math.floor(Math.random() * 1000 + 2000));
    return <LoadingPage />;
  };

  if (!data[num]) return ResultTest();
  return (
    <>
      <Center>
        <Header>
          <PrevBtn onClick={() => PrevClick()}>&lt;</PrevBtn>
          <h2>똥BTI</h2>
          <h3>{num + 1} / 7</h3>
        </Header>
        <ProgressBar>
          <ProgressBarFill width={(num + 1) * 84} />
        </ProgressBar>
        <h4>{data[num].question}</h4>
        <AnswerBtn onClick={() => nextSlide(0)}>
          {data[num].answers[0].answer}
        </AnswerBtn>
        <AnswerBtn onClick={() => nextSlide(1)}>
          {data[num].answers[1].answer}
        </AnswerBtn>
      </Center>
      <Information />
    </>
  );
};

export default TestPage;

const Center = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s;

  h2 {
    font-family: 'GmarketSansBold';
    font-size: 40px;
    color: #56483b;
    margin-right: 150px;
  }

  h3 {
    font-family: 'GmarketSansBold';
    font-size: 30px;
    color: #766a5e;
  }

  h4 {
    margin: 70px 0 20px 0;
    width: 550px;
    font-size: 35px;
    color: #56483b;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
`;

const PrevBtn = styled.div`
  font-family: 'GmarketSansBold';
  font-size: 40px;
  color: #766a5e;
  margin-right: 200px;
  margin-top: 1px;
  background: none;
  border: none;

  :hover {
    cursor: pointer;
    color: #56483b;
  }
`;

const ProgressBar = styled.div`
  margin-top: 26px;
  width: 588px;
  height: 26px;

  background: #bda394;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.width}px;
  height: 26px;
  background: #867267;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

const AnswerBtn = styled.button`
  box-sizing: border-box;
  margin-top: 50px;

  width: 588px;
  height: 102px;

  background: #caa692;
  border: 1px solid #56483b;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  font-family: 'GmarketSansMedium';
  font-size: 30px;
  color: #56483b;

  :hover {
    cursor: pointer;
    background: #927565;
  }
`;
