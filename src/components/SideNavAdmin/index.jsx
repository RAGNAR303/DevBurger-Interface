import { navLinks } from './navLinks';
import Logo from '../../assets/Logo.svg';
import { House, SignOut } from '@phosphor-icons/react';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from 'react-router-dom';


export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();


  return (
    <Container>
      <img src={Logo} alt="logo-devburger" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut className='icon' />
          <span>Sair</span>
        </NavLink>
        <NavLink to="/">
          <House className='icon'/>
          <span>Home</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
