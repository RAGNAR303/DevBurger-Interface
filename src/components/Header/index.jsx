import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  Content,
  CountCart,
  // HeaderLink,
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
import { useCart } from '../../hooks/CartContext';

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { logout, userInfo } = useUser();
  const { cartProducts } = useCart();



  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburger:userData'),
  );

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
            <p>Home</p>
          </NavLink>
          <h3>|</h3>
          <NavLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
            <CookingPot weight="duotone" size={24} />
            <p>Carápio</p>
          </NavLink>
        </Navigation>
        <Options>
          <Profile>
            {isAdmin ? (
              <UserCircleGear
                weight="duotone"
                onClick={() => navigate('/admin/produtos')}
              />
            ) : (
              <UserCircle color=" #9758a6" weight="bold" size={24} />
            )}

            <div>
              <p>
                Olá ,<span>{formatName(userInfo.name) || 'Fazer Login'}</span>
              </p>
              <Logout onClick={logoutUser}>
                <SignOut onClick={logoutUser} weight="bold" size={18} />
              </Logout>
            </div>
            <h3>|</h3>
          </Profile>
          <NavLink to={'/carrinho'} $isActive={pathname === '/carrinho'}>
            <CountCart>
              <span>{cartProducts && cartProducts.length}</span>
              <Basket weight="duotone" size={24} />
            </CountCart>

            <p>Carrinho</p>
          </NavLink>
        </Options>
      </Content>
    </Container>
  );
}
