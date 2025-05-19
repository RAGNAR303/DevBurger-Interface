import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Row } from './Row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Filter, FilterOption } from './styles';
import { orderStatusOptions } from './orderStatus';
import { ThemeProvider } from '@mui/material';
import { Theme } from './theme';
export function Orders() {
  const [orders, setOrders] = useState([]); // backup
  const [rows, setRows] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]); // os valores na estão tela
  const [activeStatus, setActiveStatus] = useState(0);
  //chamada api para os pedidos
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data);
    }
    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }
    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus,
      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value,
      );

      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Filter>
          {orderStatusOptions.map((status) => (
            <FilterOption
              $isActiveStatus={activeStatus === status.id}
              key={status.id}
              onClick={() => handleStatus(status)}
            >
              {status.label}
            </FilterOption>
          ))}
        </Filter>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow className="tableRow">
                <TableCell />
                <TableCell>Pedido</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Data do Pedido</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row
                  key={row.orderId}
                  row={row}
                  orders={orders}
                  setOrders={setOrders}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </>
  );
}
