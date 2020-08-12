import React from 'react';

import {
  Container, Header, Title, Button, Icon,
} from './styles';

interface CardProps {
  label: string,
}

const Card: React.FC<CardProps> = ({ label }) => (
  <Container>
    <Header>
      <Title>{label}</Title>
      <Button><Icon /></Button>
    </Header>
  </Container>
)
  

export default Card;
