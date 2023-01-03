import React from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';

const ShareKakaoBtn = () => {
  return (
    <ShareBtn>
      <RiKakaoTalkFill size="78" color="#514133" />
    </ShareBtn>
  );
};
export default ShareKakaoBtn;

const ShareBtn = styled.button`
  border: none;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background: #a08678;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  margin: 0 65px;

  :hover {
    cursor: pointer;
    background: #776053;
  }
`;
