import styled, { css } from 'styled-components';

import { Bitcoin } from 'styled-icons/boxicons-logos';

import { Link } from 'react-router-dom';

const textStyle = css`color: ${({ theme }) => theme.text.light};`;

export const Container = styled.div`
  display: grid;

  grid-template-rows: auto 95%;

  row-gap: 0.5rem;

  grid-template-areas: 
    'HEADER'
    'CONTENT'
  ;
`;

export const Header = styled.div`
  grid-area: HEADER;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  width: 1400px;
  
  padding: 12px 15px;

  margin: 0 auto;

  @media (max-width: 375px) {
    width: 100%; 
  }
`;

export const Logo = styled(Bitcoin)`
  width: 40px;
  height: 40px;
  margin-right: 1rem;

  fill: ${({ theme }) => theme.green.main};

  transition: all .2s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;

  color: ${({ theme }) => theme.text.light};
`;

export const Main = styled.div`
  grid-area: CONTENT;

  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    img {
      width: 350px;
      height: 350px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


      padding: 0 1rem !important;

      > h1, span {
        text-align: center;
      }
    }
  }
`;

export const BreadImage = styled.img`
  width: 50rem;
  height: 50rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-left: 5rem;

`;

export const Paragraph = styled.h1`
  ${textStyle}
`;

export const Description = styled.span`
  ${textStyle}
`;

export const LinkToDashboard = styled(Link)<{to: string}>`

  margin-top: 2rem;

  padding: 1rem 1.2rem;

  background: ${({ theme }) => theme.green.main};
  color:  ${({ theme }) => theme.text.light};

  border-radius: 10px;

  font-size: 1.6rem;
  font-weight: bold;

  transition: all .2s ease-out;

  -webkit-box-shadow: 1px 1px 17px 1px rgba(33,191,115,1);
  -moz-box-shadow: 1px 1px 17px 1px rgba(33,191,115,1);
  box-shadow: 1px 1px 17px 1px rgba(33,191,115,1);
  
  &:hover {
    transform: translateY(-10px);
  }
`;
