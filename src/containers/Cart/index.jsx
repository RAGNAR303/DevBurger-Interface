import Logo from '../../assets/Logo.svg';
import { Banner, Container, Content, Title } from './styled';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo-devBurger" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        {/* <CartItens />
        <CartResume /> */}
      </Content>
    </Container>
  );
}
