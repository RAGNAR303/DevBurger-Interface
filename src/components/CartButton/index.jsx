import { ContainerButton } from './styles';
export function CartButton({ icon, ...props }) {
  return <ContainerButton {...props}>{icon}</ContainerButton>;
}
