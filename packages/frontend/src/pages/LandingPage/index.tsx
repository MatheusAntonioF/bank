import React from 'react';

import {
  Container, Header, Logo, Title,
  Main, BreadImage, Group, Paragraph, Description, LinkToDashboard,
} from './styles';

import bread_icon from '../../assets/bread.svg';

const LandingPage: React.FC = () => (
  <Container>
    <Header>
      <Logo title="Logo Icon" />
      <Title>A bank for you</Title>
    </Header>
    <Main>
      <Group>
        <Paragraph>
          Economize seu dinheiro conosco
        </Paragraph>
        <Description>
          “A vida por si só não exerce nenhum poder sobre o seu destino.
          Quem escolhe os caminhos, é você.”
        </Description>
        <LinkToDashboard to="/">Entrar no sistema</LinkToDashboard>
      </Group>
      <BreadImage src={bread_icon} alt="BreadIcon" />
    </Main>
  </Container>
);

export default LandingPage;
