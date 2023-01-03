import React from 'react';
import styled from 'styled-components';

const LoadingPage = () => {
  return (
    <Center>
      <h2>변기에 똥 싸는 중...</h2>
      <ImgDiv>
        <img src="./image/3.png" alt="loading" />
        <div>
          <Img2 src="./image/2.png" alt="loading" />
        </div>
        <div>
          <img src="./image/1.png" alt="loading" />
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
    font-size: 40px;
    color: #56483b;
  }
`;

const ImgDiv = styled.div`
  position: relative;
  margin-top: 50px;

  div {
    position: absolute;
    top: 0px;
  }

  img {
    width: 317px;
    height: 428px;
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
