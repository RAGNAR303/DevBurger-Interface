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

export function Header() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { logout, userInfo } = useUser();
  console.log(userInfo)
  function logoutUser() {
    logout();
    navigate('/login');
  }
  return (
    <Container>
      <Content>
        <Navigation>
          {/* <House
            color={(props) => (props.$isActive ? '  #61a120' : '  #9758a6 ')}
            weight="bold"
            size={24}
            $isActive={pathname === '/'}
            path={pathname ? '/' : '/cardapio'}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              cursor: 'pointer',
              color: hovered ? ' #61a120' : '#9758a6',
            }}
          /> */}
          <HeaderLink to={'/'} $isActive={pathname === '/'}>
            Home
          </HeaderLink>
          <h3>|</h3>
          {/* <CookingPot
            // color="  #9758a6"
            weight="bold"
            size={24}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            path={pathname ? '/cardapio' : '/'}
            style={{
              cursor: 'pointer',
              color: hovered ? '#9758a6' : ' #61a120',
            }}
          /> */}
          <HeaderLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
            Cardápio
          </HeaderLink>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color=" #9758a6" weight="bold" size={24} />
            <div>
              <p>
                Olá ,<span>{userInfo.name?.charAt(0).toUpperCase() +  userInfo.name?.slice(1)}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
              <SignOut color=" rgb(174, 1, 1)" weight="bold" size={18} />
            </div>
            <h3>|</h3>
          </Profile>
          {/* <Basket
            color=" #9758a6"
            weight="bold"
            size={24}
            style={{
              transition: 'color 0.3s',
              cursor: 'pointer',
            }}
          /> */}
          <HeaderLink to={'/carrinho'} $isActive={pathname === '/carrinho'}>Carrinho</HeaderLink>
        </Options>
      </Content>
    </Container>
  );
}
