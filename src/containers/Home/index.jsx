import { CategoriesCarousel, OffersCarousel } from '../../components';
import { Banner, Container } from './styles';
import { useUser } from '../../hooks/UserContext';
export function Home() {
  console.log(useUser());
  return (
    <main>
      <Banner>
        <h1>Home</h1>
        <span>Bem-vindo(a)!!</span>
      </Banner>
      <Container>
        <CategoriesCarousel />
        <OffersCarousel />
      </Container>
    </main>
  );
}
