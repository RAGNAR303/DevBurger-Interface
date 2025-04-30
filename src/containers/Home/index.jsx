import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Banner, Container } from './styles';

export function Home() {
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
