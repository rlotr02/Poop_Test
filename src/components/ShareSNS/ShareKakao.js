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
      <RiKakaoTalkFill size="1x" color="#514133" />
    </ShareBtn>
  );
};
export default ShareKakao;

const ShareBtn = styled.button`
  border: none;
  width: 8em;
  height: 8em;
  padding: 1.25em;
  border-radius: 6.25em;
  background: #a08678;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  margin: 0 4em;

  :hover {
    cursor: pointer;
    background: #776053;
  }

  @media (max-width: 575px) {
    width: 5em;
    height: 5em;
    padding: 0.9em;
    margin: 0 2.5em;
  }

  @media (max-width: 374px) {
    width: 4em;
    height: 4em;
    padding: 0.6em;
    margin: 0 2em;
  }

  @media (max-width: 319px) {
    width: 3em;
    height: 3em;
    padding: 0.6em;
    margin: 0 1.5em;
  }
`;
