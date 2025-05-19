import { List, ListPlus, Receipt } from "@phosphor-icons/react";
import styled from "styled-components";
export const navLinks = [
{
    id:1,
    label: 'Pedidos',
    path: '/admin/pedidos',
    icon:  <Receipt className='icon'/>,
},
{
    id:2,
    label: 'Produtos',
    path: '/admin/produtos',
    icon:  <List className='icon'/>,
},
{
    id:3,
    label: 'Adicionar Produto',
    path: '/admin/novo-produto',
    icon:  <ListPlus className='icon'/>,
}
]
   
