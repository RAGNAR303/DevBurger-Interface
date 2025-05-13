import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import stripePromise from '../../config/stripeConfig';
import CheckoutForm from '../../components/Stripe/CheckoutForm';


import { Banner, Container, Content, Title } from './styled';
import Logo from '../../assets/Logo.svg';


export function Checkout() {

  const {
    state: { clientSecret },
  } = useLocation();
  if (!clientSecret) {
    return (
      <div>
        <p>Erro, volte e tente novamente</p>
        <button> Retorna a tela inicial</button>
      </div>
    );
  }

  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo-devBurger" />
      </Banner>
      <Title>Checkout - Pagamento</Title>
      <Content>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm>Checkout</CheckoutForm>
        </Elements>
      </Content>
    </Container>
  );
}
