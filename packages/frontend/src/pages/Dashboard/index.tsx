import React from 'react';


import {
  Container, Main, Header, Title, DivNew, New, CardGroup, LinkGoBack, GoBackIcon
} from './styles';

import Card from '../../components/Card';

const Dashboard: React.FC = () => (
  <Container>
    <Main>
      <Header>
        <LinkGoBack to="/">
          <GoBackIcon />
        </LinkGoBack>
        <Title>Painel de visualização</Title>
        <DivNew>
          <New />
        </DivNew>
      </Header>
      <CardGroup>
        <Card label="Recebimentos" />
        <Card label="Gastos" />
        <Card label="Extrato" />
      </CardGroup>
    </Main>
  </Container>
);

export default Dashboard;
