import React, { useState } from 'react';
import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';

const Information = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {!visible && (
        <Btn
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <img src="../logo.png" alt="logo" />
        </Btn>
      )}
      {visible && (
        <InFoDiv id="informationdiv">
          <Div>
            <div>
              <img src="../logo.png" alt="logo" />
            </div>
            <p>똥BTI</p>
            <button
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <RiCloseFill size={40} color="#56483B" />
            </button>
          </Div>
          <h3>
            내가 똥이라면 나는 어떤 똥일까?
            <br />
            재미로만 즐겨주세요!
          </h3>
          <LinkA
            href="https://github.com/rlotr02"
            target="_blank"
            rel="noreferrer"
          >
            개발자 GITHUB 바로가기
          </LinkA>
          <LinkA
            href="https://www.instagram.com/rlo._.tr"
            target="_blank"
            rel="noreferrer"
          >
            개발자 인스타그램 바로가기
          </LinkA>
          <h4>ⓒ 2023. rlotr02 All rights reserved.</h4>
        </InFoDiv>
      )}
    </div>
  );
};

export default Information;

const Btn = styled.button`
  position: fixed;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 100px;
  bottom: 30px;
  right: 35px;
  background: #c3ab95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    background: #56483b;
  }

  img {
    width: 78px;
    margin-top: 8px;
    margin-left: 4px;
  }
`;

const InFoDiv = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 30px;
  right: 35px;

  background: rgba(196, 171, 149, 0.53);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h3 {
    margin: 0 73px 30px 54px;
    font-size: 20px;
    line-height: 35px;
    color: #56483b;
  }

  h4 {
    font-family: 'GmarketSansLight';
    font-weight: 300;
    font-size: 15px;
    color: #514133;
    margin-bottom: 34px;
  }
`;

const Div = styled.div`
  display: flex;

  div {
    margin: 32px 15px 31px 36px;
    width: 63px;
    height: 63px;

    background: #56483b;
    border-radius: 100px;
  }

  img {
    width: 58px;
    margin: 4px;
  }

  p {
    margin-right: 200px;
    margin-top: 49px;
    font-family: 'GmarketSansBold';
    font-weight: 700;
    font-size: 30px;
    color: #56483b;
  }

  button {
    position: absolute;
    right: 0;
    margin-top: 28px;
    margin-right: 20px;
    background: transparent;
    border: none;

    :hover {
      cursor: pointer;
    }
  }
`;

const LinkA = styled.a`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 80px;

  background: #c4b0a1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 30px;

  font-family: 'GmarketSansBold';
  font-weight: 700;
  font-size: 20px;
  color: #514133;
  text-decoration: none;

  :hover {
    cursor: pointer;
    background: #927565;
  }
`;
