import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_TOKEN } from "@/constants";
import { useRouter } from "next/router";
import { Box, Card, CardContent, Container, Divider, Drawer, Icon, List, ListItem, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { extendTheme } from '@mui/joy/styles'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { Navigation, Router } from '@toolpad/core/AppProvider';

export default function AdminDashboard() {
  const router = useRouter();
  const [token] = useLocalStorage(STORAGE_TOKEN, "")
  const [usuarioError, setUsuarioError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState('Inicio');
  const [isLoading, setIsLoading] = useState(true);
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  useEffect(() => {
    // if (token) {
    //   setIsLoading(false);
    // } else {
    //   router.push('/admin/login');
    // }
  }, [token, router]);

  // if (isLoading) {
  //   return <p>Verificando a autenticação...</p>;
  // }

  async function handleSubmit(e: any) {
    e.preventDefault();
  }

  // Componente de cards na tela de início
  const Inicio = () => {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Card sx={{ minWidth: 275, flex: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Quantidade de Vendas
              </Typography>
              <Typography variant="h6" component="div">
                150
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275, flex: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Número de Pedidos
              </Typography>
              <Typography variant="h6" component="div">
                200
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  };

  // Componente de pedidos
  const Pedidos = () => {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Listagem de Pedidos
        </Typography>

        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Container>
    );
  };

  const Usuarios = () => {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Listagem de Usuarios
        </Typography>

        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Container>
    );
  };
  
  
  const renderContent = () => {
    switch (selectedMenu) {
      case 'Inicio':
        return <Inicio />;
      case 'Pedidos':
        return <Pedidos />;
      case 'Usuarios':
        return <Usuarios />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      {/* Menu lateral */}
      <Box sx={{ width: 240}}>
        <Typography variant="h6" gutterBottom>
          Menu
        </Typography>
        <List>
          <ListItem button onClick={() => setSelectedMenu('Inicio')}>
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button onClick={() => setSelectedMenu('Pedidos')}>
            <ListItemText primary="Pedidos" />
          </ListItem>
          <ListItem button onClick={() => setSelectedMenu('Usuarios')}>
            <ListItemText primary="Usuários" />
          </ListItem>
        </List>
      </Box>

      {/* Conteúdo do Dashboard */}
      <Box component="main" sx={{ flexGrow: 1, paddingLeft: 3 }}>
        {renderContent()}
      </Box>
    </Box>
  );
};
