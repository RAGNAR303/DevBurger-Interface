import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  Content,
  HeaderLink,
  Logout,
  Navigation,
  NavLink,
  Options,
  Profile,
} from './styles';
import {
  UserCircle,
  Basket,
  UserCircleGear,
  House,
  CookingPot,
  SignOut,
} from '@phosphor-icons/react';
import { formatName } from '../../utils/formatName';
// import { QuantityCartNum } from '../../utils/QuantityCart';

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { logout, userInfo } = useUser();
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburger:userData'),
  );
  //

  function logoutUser() {
    logout();
    navigate('/login');
  }
  return (
    <Container>
      <Content>
        <Navigation>
          <NavLink to={'/'} $isActive={pathname === '/'}>
            <House weight="duotone" size={24} />
            <HeaderLink to={'/'} $isActive={pathname === '/'}>
              Home
            </HeaderLink>
          </NavLink>
          <h3>|</h3>
          <NavLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
            <CookingPot weight="duotone" size={24} />
            <HeaderLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </NavLink>
        </Navigation>
        <Options>
          <Profile>
            {isAdmin ? (
              <UserCircleGear weight="duotone" onClick={() => navigate('/admin/produtos')} />
            ) : (
              <UserCircle color=" #9758a6" weight="bold" size={24} />
            )}

            <div>
              <p>
                Olá ,<span>{formatName(userInfo.name) || 'Fazer Login'}</span>
              </p>
              <Logout onClick={logoutUser}>
                Sair
                <SignOut  weight="bold" size={18} />
              </Logout>
            </div>
            <h3>|</h3>
          </Profile>
          <NavLink to={'/carrinho'} $isActive={pathname === '/carrinho'}>
            <Basket weight="duotone" size={24} />
            <HeaderLink to={'/carrinho'} $isActive={pathname === '/carrinho'}>
              Carrinho
            </HeaderLink>
          </NavLink>
        </Options>
      </Content>
    </Container>
  );
}
