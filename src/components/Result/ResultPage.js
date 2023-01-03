import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import resultdata from '../common/API/ResultAPI.json';
import ShareLinkBtn from '../ShareSNS/ShareLinkBtn';
import ShareKakaoBtn from '../ShareSNS/ShareKakaoBtn';
import ShareImgBtn from '../ShareSNS/ShareImgBtn';

const ResultPage = () => {
  const params = useParams();
  var num;

  for (var i = 0; i < resultdata.length; i++) {
    if (params.result === resultdata[i].name) {
      num = i;
    }
  }

  return (
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
    </Center>
  );
};

export default ResultPage;

const Center = styled.div`
  margin-top: 53px;
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
    padding: 63px;
  }
`;

const ResultDiv = styled.div`
  box-sizing: border-box;
  margin-bottom: 63px;
  width: 740px;
  background: rgba(202, 166, 146, 0.67);
  border: 1px solid #56483b;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  text-align: center;

  h2 {
    margin-top: 83px;
    font-size: 35px;
    color: #655a50;
  }

  h1 {
    margin-top: 20px;
    font-family: 'GmarketSansBold';
    font-size: 50px;
    color: #48311c;
  }

  img {
    margin: 36px;
    width: 300px;
  }

  h3 {
    padding: 0 73px;
    font-size: 25px;
    line-height: 45px;
    color: #56483b;
    margin-bottom: 70px;
  }
`;

const PlusDiv = styled.div`
  box-sizing: border-box;
  width: 740px;
  background: rgba(202, 166, 146, 0.67);
  border: 1px solid #56483b;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  text-align: center;

  h2 {
    margin-top: 60px;
    font-size: 35px;
    color: #56483b;
  }

  img {
    margin: 24px;
    width: 300px;
  }

  h3 {
    font-size: 30px;
    color: #655a50;
  }

  h1 {
    margin-top: 20px;
    font-family: 'GmarketSansBold';
    font-size: 40px;
    color: #48311c;
    margin-bottom: 60px;
  }
`;

const ShareBtn = styled.div`
  margin: 50px 0 65px;
  display: flex;
  justify-content: center;
`;

const RestartLink = styled(Link)`
  margin-top: 50px;
  font-size: 30px;
  color: #56483b;
  text-decoration: none;
  margin-bottom: 130px;

  :hover {
    cursor: pointer;
    color: #48311c;
  }
`;
