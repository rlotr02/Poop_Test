import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import resultdata from '../common/API/ResultAPI.json';
import ShareLinkBtn from '../ShareSNS/ShareLinkBtn';
import ShareKakaoBtn from '../ShareSNS/ShareKakaoBtn';
import ShareImgBtn from '../ShareSNS/ShareImgBtn';
import Information from '../common/Information';
import AdfitKakao from '../AdfitKakao/AdfitKakao';

const ResultPage = () => {
  const params = useParams();
  var num;

  for (var i = 0; i < resultdata.length; i++) {
    if (params.result === resultdata[i].name) {
      num = i;
    }
  }

  return (
    <>
      <Center>
        <div id="saveImg">
          <ResultDiv>
            <h2>"{resultdata[num].word}"</h2>
            <h1>{resultdata[num].name}</h1>
            <img src={resultdata[num].img} alt={resultdata[num].name} />
            <h3>{resultdata[num].description}</h3>
          </ResultDiv>
          <PlusDiv>
            <h2>나와 가장 잘 맞는 똥은?</h2>
            <img
              src={resultdata[num].friend.img}
              alt={resultdata[num].friend.name}
            />
            <h3>"{resultdata[num].friend.word}"</h3>
            <h1>{resultdata[num].friend.name}</h1>
          </PlusDiv>
        </div>
        <PlusDiv>
          <h2>친구에게 내 똥 공유하기</h2>
          <ShareBtn>
            <ShareLinkBtn />
            <ShareKakaoBtn />
            <ShareImgBtn />
          </ShareBtn>
        </PlusDiv>
        <RestartLink to={`/`}>테스트 다시하기 &gt;</RestartLink>
        <AdfitKakao />
        <div className="margin"></div>
      </Center>
      <Information />
    </>
  );
};

export default ResultPage;

const Center = styled.div`
  margin-top: 3.3125em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s;

  #saveImg {
    padding: 3.9375em;
  }

  .margin {
    margin-bottom: 5em;
  }
`;

const ResultDiv = styled.div`
  box-sizing: border-box;
  margin-bottom: 3.9375em;
  width: 46.25em;
  background: rgba(202, 166, 146, 0.67);
  border: 0.0625em solid #56483b;
  box-shadow: 0.125em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  border-radius: 3.125em;
  text-align: center;

  h2 {
    margin-top: 2.3714285714285714em;
    font-size: 2.1875em;
    color: #655a50;
  }

  h1 {
    margin-top: 0.4em;
    font-family: 'GmarketSansBold';
    font-size: 3.125em;
    color: #48311c;
  }

  img {
    margin: 2.25em;
    width: 18.75em;
  }

  h3 {
    padding: 0 2.92em;
    font-size: 1.5625em;
    line-height: 1.8em;
    color: #56483b;
    margin-bottom: 2.8em;
  }
`;

const PlusDiv = styled.div`
  box-sizing: border-box;
  width: 46.25em;
  background: rgba(202, 166, 146, 0.67);
  border: 0.0625em solid #56483b;
  box-shadow: 0.125em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  border-radius: 3.125em;
  text-align: center;

  h2 {
    margin-top: 1.7142857142857142em;
    font-size: 2.1875em;
    color: #56483b;
  }

  img {
    margin: 1.5em;
    width: 18.75em;
  }

  h3 {
    font-size: 1.875em;
    color: #655a50;
  }

  h1 {
    margin-top: 0.5em;
    font-family: 'GmarketSansBold';
    font-size: 2.5em;
    color: #48311c;
    margin-bottom: 1.5em;
  }
`;

const ShareBtn = styled.div`
  margin: 3.125em 0 4.0625em;
  display: flex;
  justify-content: center;
`;

const RestartLink = styled(Link)`
  margin-top: 1.6666666666666667em;
  font-size: 1.875em;
  color: #56483b;
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: #48311c;
  }
`;
