import styled from 'styled-components';
import first from '../.././helpers/logAndReg/first.png';
import second from '../.././helpers/logAndReg/second.png';
import tablet from '../.././helpers/logAndReg/tablet.png';
import { breakpoints } from 'helpers/breakpoints';
import mobile from '../.././helpers/logAndReg/mobile.png';

export const BackgroundAuthorize = styled.div`
  justify-content: center;
  display: flex;

  width: 100%;
  height: 100vh;

  background-color: #fdf7f2;

  padding-left: 20px;
  padding-right: 20px;
  background-image: url(${mobile});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 479px;
  @media ${breakpoints.minTablet} {
    padding: 0;

    background-image: url(${tablet});
    background-position: bottom;
    background-size: 768px;
  }
  @media ${breakpoints.desktop} {
    background-image: url(${second}), url(${first});
    background-size: 1077px, 511px;
    background-position: bottom left, right 30px bottom;
    background-repeat: no-repeat, no-repeat;
  }
`;
//  let re = /^(\\w{1,}[\\.-\\w]+\\w)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;

//  valid email /[a-z0-9._%+-]{2,24}@[a-z0-9.-]+.[a-z]{2,4}/
// name  /^([a-zA-Z]{1,}[`-]?[a-zA-Z]?)+$/
// /^\w{1,}[\.-\w]*\w{1,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
