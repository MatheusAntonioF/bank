import styled from 'styled-components';

import { ArrowRightAlt } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: ${({ theme }) => theme.dark.light};

  border-radius: 15px;

  padding: 10px 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.text.main};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .2s ease-out;

  &:hover {
    transform: translateX(10px) scale(1.1);
    cursor: pointer;

    > svg {
      fill: ${({theme}) => theme.green.main};
      transform: scale(1.2);
    }
  }
`;

export const Icon = styled(ArrowRightAlt)`
  width: 40px;
  height: 40px;
  fill: ${({theme}) => theme.text.main};
`;
