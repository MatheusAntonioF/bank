import styled from 'styled-components';

import { Add, KeyboardArrowLeft } from 'styled-icons/material';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1400px;
  height: 100%;

  margin: 0 auto;
`;

export const Main = styled.div`
  display: grid;

  grid-template-rows: 50px 1fr 1fr;

  grid-template-areas: 
    'HD'
    'CD'
    'CD'
  ;

  row-gap: 50px;

  width: 100%;
  height: 100%;

  padding: 50px;
`;

export const Header = styled.div`
  grid-area: HD;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.light};
`;

export const DivNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  background: ${({ theme }) => theme.green.main};

  -webkit-box-shadow: 1px 1px 17px 1px rgba(33,191,115,1);
  -moz-box-shadow: 1px 1px 17px 1px rgba(33,191,115,1);
  box-shadow: 1px 1px 17px 1px rgba(33,191,115,1);

  border-radius: 15px;

  transition: all .2s ease-out;

  &:hover {
    transform: translateY(5px);
    cursor: pointer;
  }
`;

export const New = styled(Add)`
  width: 30px;
  height: 30px;

  fill: ${({ theme }) => theme.text.light};
`;

export const CardGroup = styled.div`
  grid-area: CD;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  column-gap: 10px;
`;

export const LinkGoBack = styled(Link)``;

export const GoBackIcon = styled(KeyboardArrowLeft)`
  width: 40px;
  height: 40px;
  fill: ${({theme}) => theme.text.main};

  transition: all .2s ease-out;

  &:hover {
    fill: ${({theme}) => theme.green.main};
  }
`;