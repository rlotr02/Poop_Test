import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';

const ShareKakao = () => {
  const url = 'https://pooptest.netlify.app';
  const ShareURL = decodeURI(`${window.location.href}`);
  const nameURL = decodeURI(`${window.location.pathname}`);
  const name = nameURL.replace('/result/', '');

  const ImageURL = 'https://pooptest.netlify.app/image/poop/' + name + '.png';

  useEffect(() => {
    CreateShareKakao();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CreateShareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('dab460e1ab0ec1f58ca95c16fb29aec5');
      }
      kakao.Share.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: name,
          description: '내가 만약 똥이라면 나는 ' + name + '이야',
          imageUrl: ImageURL,
          link: {
            webUrl: ShareURL,
          },
        },
        buttons: [
          {
            title: '나는 어떤 똥일까?',
            link: {
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <ShareBtn id="kakao-link-btn">
      <RiKakaoTalkFill size="78" color="#514133" />
    </ShareBtn>
  );
};
export default ShareKakao;

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
