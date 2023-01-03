import React from 'react';
import styled from 'styled-components';
import { TbLink } from 'react-icons/tb';

const ShareLinkBtn = () => {
  const ClipBoard = () => {
    const nowUrl = decodeURI(`${window.location.href}`);

    navigator.clipboard.writeText(nowUrl).then(() => {
      alert('공유 링크가 복사되었습니다');
    });
  };

  return (
    <ShareBtn onClick={ClipBoard}>
      <TbLink size="80" color="#514133" />
    </ShareBtn>
  );
};
export default ShareLinkBtn;

const ShareBtn = styled.button`
  border: none;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background: #a08678;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    background: #776053;
  }
`;
