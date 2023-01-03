import React from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { MdOutlineSaveAlt } from 'react-icons/md';

const ShareImgBtn = () => {
  const onCapture = () => {
    html2canvas(document.getElementById('saveImg'), {
      backgroundColor: '#E3CDC0',
    }).then((canvas) => {
      onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
    });
  };

  const onSaveAs = (url, filename) => {
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ShareBtn onClick={onCapture}>
      <MdOutlineSaveAlt size="75" color="#514133" />
    </ShareBtn>
  );
};
export default ShareImgBtn;

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
