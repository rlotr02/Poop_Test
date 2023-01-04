import React from 'react';
import styled from 'styled-components';

const LoadingPage = () => {
  return (
    <Center>
      <h2>변기에 똥 싸는 중...</h2>
      <ImgDiv>
        <img src="./image/loading/3.png" alt="loading" />
        <div>
          <Img2 src="./image/loading/2.png" alt="loading" />
        </div>
        <div>
          <img src="./image/loading/1.png" alt="loading" />
        </div>
      </ImgDiv>
    </Center>
  );
};

export default LoadingPage;

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
    font-size: 2.5em;
    font-weight: 500;
    color: #56483b;
  }
`;

const ImgDiv = styled.div`
  position: relative;
  margin-top: 3.125em;

  div {
    position: absolute;
    top: 0em;
  }

  img {
    width: 19.8125em;
    height: 26.75em;
  }
`;

const Img2 = styled.img`
  animation: poop-ani 0.5s infinite alternate;

  @keyframes poop-ani {
    from {
      transform: translate(0, 10px);
    }
    to {
      transform: translate(0, -5px);
    }
  }
`;
