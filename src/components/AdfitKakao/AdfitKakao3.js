import React, { useEffect } from 'react';
import styled from 'styled-components';

const AdfitKakao3 = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-unit', 'DAN-QdNmAslInQTZ5djE');
    ins.setAttribute('data-ad-width', '160');
    ins.setAttribute('data-ad-height', '600');
    document.querySelector('.adfit3').appendChild(ins);
    document.querySelector('.adfit3').appendChild(scr);
  }, []);
  return <Advert className="adfit3" />;
};

export default AdfitKakao3;

const Advert = styled.div``;
