import {
  FacebookLogo,
  InstagramLogo,
  ThreadsLogo,
} from '@phosphor-icons/react';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <section>
        <div>
          <h2>Link Uteis</h2>
          <a>Sobre</a>
          <a>Contatos</a>
          <a>Localização</a>
        </div>
        <div>
          <h2>Redes Social</h2>
          <a>
            <InstagramLogo />
            Intragam
          </a>
          <a>
            <FacebookLogo />
            Facebook
          </a>
          <a>
            <ThreadsLogo /> Threads
          </a>
        </div>
      </section>
      <p>Desenvolvido por DevClub - 2025 - Todos os direitos reservados</p>
    </Container>
  );
}
