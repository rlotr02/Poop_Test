import React, { useEffect } from 'react';
import styled from 'styled-components';

const AdfitKakao1 = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-unit', 'DAN-56E9Ettwz3ndvzAQ');
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    document.querySelector('.adfit1').appendChild(ins);
    document.querySelector('.adfit1').appendChild(scr);
  }, []);
  return <Advert className="adfit1" />;
};

export default AdfitKakao1;

const Advert = styled.div`
  margin-top: 3em;
`;
