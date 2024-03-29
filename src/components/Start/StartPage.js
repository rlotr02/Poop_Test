import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Information from '../common/Information';
import { isMobile } from '../common/style';
import AdfitKakao1 from '../AdfitKakao/AdfitKakao1';
import AdfitKakao2 from '../AdfitKakao/AdfitKakao2';
import AdfitKakao3 from '../AdfitKakao/AdfitKakao3';

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
        <KakaoAdfitLeftDiv>
          <AdfitKakao2 />
        </KakaoAdfitLeftDiv>
        <KakaoAdfitRightDiv>
          <AdfitKakao3 />
        </KakaoAdfitRightDiv>
        <AdfitKakao1 />
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
    font-size: 4em;
    font-weight: 700;
    line-height: 150%;
    font-family: GmarketSansBold;
    color: #48311c;
  }

  h2 {
    font-size: 2.375em;
    font-weight: 500;
    color: #655a50;
  }

  img {
    margin: 0.4375em;
    width: 17.75em;
  }
`;

const TestStart = styled.div`
  width: 34.1875em;
  height: 6.25em;

  background: #caa692;
  box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  border-radius: 6.25em;

  :hover {
    cursor: pointer;
    background: #927565;
  }
`;

const TestLink = styled(Link)`
  font-family: 'GmarketSansBold';
  font-size: 2.1875em;
  font-weight: 700;
  line-height: 3.085714285714286em;
  display: flex;
  justify-content: center;
  color: #56483b;
  text-decoration: none;
`;

const KakaoAdfitLeftDiv = styled.div`
  margin-right: 650px;
  position: absolute;

  ${isMobile} {
    display: none;
  }
`;

const KakaoAdfitRightDiv = styled.div`
  margin-left: 650px;
  position: absolute;

  ${isMobile} {
    display: none;
  }
`;
