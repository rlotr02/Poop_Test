import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Information from '../common/Information';
import AdfitKakao from '../AdfitKakao/AdfitKakao';

const StartPage = () => {
  return (
    <>
      <Center>
        <h1>똥BTI</h1>
        <h2>나는 어떤 똥일까?</h2>
        <img src="./image/main.png" alt="main" />
        <TestStart>
          <TestLink to="/test">테스트 시작하기</TestLink>
        </TestStart>
        <AdfitKakao />
      </Center>
      <Information />
    </>
  );
};

export default StartPage;

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

  h1 {
    font-size: 55px;
    font-family: GmarketSansBold;
    color: #48311c;
  }

  h2 {
    font-size: 38px;
    color: #655a50;
  }

  img {
    margin: 7px;
  }
`;

const TestStart = styled.div`
  width: 547px;
  height: 100px;

  background: #caa692;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  :hover {
    cursor: pointer;
    background: #927565;
  }
`;

const TestLink = styled(Link)`
  font-family: 'GmarketSansBold';
  font-size: 35px;
  line-height: 108px;
  display: flex;
  justify-content: center;
  color: #56483b;
  text-decoration: none;
`;
