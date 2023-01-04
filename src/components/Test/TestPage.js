import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import data from '../common/API/QuestionsAPI.json';
import resultdata from '../common/API/ResultAPI.json';
import LoadingPage from '../Loading/LoadingPage';
import Information from '../common/Information';
import AdfitKakao from '../AdfitKakao/AdfitKakao';

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
          <ProgressBarFill width={(num + 1) * 5.25} />
        </ProgressBar>
        <h4>{data[num].question}</h4>
        <AnswerBtn onClick={() => nextSlide(0)}>
          {data[num].answers[0].answer}
        </AnswerBtn>
        <AnswerBtn onClick={() => nextSlide(1)}>
          {data[num].answers[1].answer}
        </AnswerBtn>
        <AdfitKakao />
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
  word-break: keep-all;

  h2 {
    font-family: 'GmarketSansBold';
    font-weight: 700;
    font-size: 2.5em;
    color: #56483b;
    margin-right: 3.75em;
  }

  h3 {
    font-family: 'GmarketSansBold';
    font-size: 1.875em;
    font-weight: 700;
    color: #766a5e;
  }

  h4 {
    margin: 2em 0 0.5714285714285714em 0;
    width: 15.714285714285714em;
    font-size: 2.1875em;
    font-weight: 500;
    color: #56483b;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
`;

const PrevBtn = styled.div`
  font-family: 'GmarketSansBold';
  font-weight: 700;
  font-size: 2.5em;
  color: #766a5e;
  margin-right: 5em;
  margin-top: 0.025em;
  background: none;
  border: none;

  :hover {
    cursor: pointer;
    color: #56483b;
  }
`;

const ProgressBar = styled.div`
  margin-top: 1.625em;
  width: 36.75em;
  height: 1.625em;

  background: #bda394;
  box-shadow: 0em 0.125em 0.25em rgba(0, 0, 0, 0.25);
  border-radius: 3.125em;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.width}em;
  height: 1.625em;
  background: #867267;
  box-shadow: 0.125em 0em 0.25em rgba(0, 0, 0, 0.25);
  border-radius: 3.125em;
`;

const AnswerBtn = styled.button`
  box-sizing: border-box;
  margin-top: 1.6666666666666667em;

  width: 19.6em;
  height: 3.4em;

  background: #caa692;
  border: 0.03333333333333333em solid #56483b;
  box-shadow: 0.06666666666666667em 0.13333333333333333em 0.13333333333333333em
    rgba(0, 0, 0, 0.25);
  border-radius: 1em;

  font-family: 'GmarketSansMedium';
  font-size: 1.875em;
  font-weight: 500;
  color: #56483b;

  :hover {
    cursor: pointer;
    background: #927565;
  }
`;
