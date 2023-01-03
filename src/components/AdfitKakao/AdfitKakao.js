import React, { useEffect } from 'react';
import styled from 'styled-components';

const AdfitKakao = () => {
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
    document.querySelector('.adfit').appendChild(ins);
    document.querySelector('.adfit').appendChild(scr);
  }, []);
  return <Advert className="adfit" />;
};

export default AdfitKakao;

const Advert = styled.div`
  margin-top: 70px;
`;
