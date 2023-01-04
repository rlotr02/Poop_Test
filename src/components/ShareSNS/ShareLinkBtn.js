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
      <TbLink size="1x" color="#514133" />
    </ShareBtn>
  );
};
export default ShareLinkBtn;

const ShareBtn = styled.button`
  border: none;
  width: 8em;
  height: 8em;
  padding: 1.25em;
  border-radius: 6.25em;
  background: #a08678;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    background: #776053;
  }

  @media (max-width: 575px) {
    width: 5em;
    height: 5em;
    padding: 0.9em;
  }
`;
