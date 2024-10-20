import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { colors, Icon } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import * as S from './Header.styles'
import UiDropdown from '@/components/ui/Dropdown/Dropdown';
import { useState } from 'react';
import { useRouter } from 'next/router';

const pagesMenu = [ 
  {nome: 'Quem Somos', acao: false},
  {nome: 'Nossos Seguros', acao: true},
  {nome: 'Dúvidas Frequentes', acao: false}
];
const pages = [ {nome: 'Dúvidas Frequentes', acao: false},
                {nome: 'Nossos Seguros', acao: true},
                {nome: 'Quem Somos', acao: false}
              ];
const settings = ['Minha Conta'];

export default function Header() {

  const seguros = [
    { nome: "Viagem", href: "/seguros/viagem/detalhes" },
    { nome: "Residencial", href: "/seguros/residencial/detalhes" },
    { nome: "Empresarial", href: "/seguros/empresarial/detalhes" },
    { nome: "Híbrido", href: "/seguros/hibrido/detalhes" },
    { nome: "Vida", href: "/seguros/vida/detalhes" },
    { nome: "Acidentes Pessoais", href: "/seguros/acidentes-pessoais/detalhes" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<{ [key: string]: HTMLElement | null }>({});
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, key: string) => {
    setAnchorEl((prev) => ({
      ...prev,
      [key]: event.currentTarget,
    }));
  };

  const handleClickMenu = (event: React.MouseEvent<HTMLLIElement>, key: string) => {
    setAnchorEl((prev) => ({
      ...prev,
      [key]: event.currentTarget,
    }));
  };

  const handleClose = (key: string, item: { nome: string, href: string }) => {
    router.push(item.href);
    setAnchorEl((prev) => ({
      ...prev,
      [key]: null,
    }));
  };
  
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    // <S.Wrapper>
    //   <S.Container>
    //     <Link href="/">
    //       <S.Logo src="/images/logo.png" />
    //     </Link>
    //     <S.Links>
    //       <S.Link onClick={handleClick}>
    //         <Link href="#" style={{ marginRight: '35px' }}>
    //           <S.Span>Quem Somos</S.Span>
    //         </Link>
    //         <Link href="#" style={{ marginRight: '35px' }}>
    //           <S.Span>Nossos Seguros</S.Span>
    //         </Link>
    //         <Link href="#" style={{ marginRight: '35px' }}>
    //           <S.Span>Dúvidas Frequentes</S.Span>
    //         </Link>
    //         <Link href="#">
    //           <img src="/images/icon-user.png" alt="User Icon" style={{ width: '25px', height: '25px' }} />
    //         </Link>
    //       </S.Link>
    //       <UiDropdown anchorEl={anchorEl} open={open} onClose={handleClose} itens={seguros}></UiDropdown>
    //     </S.Links>
    //     <S.MenuIcon onClick={handleMenuToggle}>
    //       <FaBars size={20} />
    //     </S.MenuIcon>
    //   </S.Container>
    //   <S.Menu isOpen={isMenuOpen}>
    //     <S.MenuItem onClick={() => setMenuOpen(false)}>
    //       <Link href="/seguros/viagem/detalhes">
    //         <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>Seguro Viagem</span>
    //       </Link>
    //     </S.MenuItem>
    //   </S.Menu>
    // </S.Wrapper>

    <S.AppBarContainer position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/images/logo.png" height={31} alt="Logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#233896', // Cor de fundo do Menu
                }
              }}
            >
              {pagesMenu.map((page) => (
                <MenuItem key={page.nome} onClick={(event) => { if (page.acao) handleClickMenu(event, page.nome); }} sx={{ color: '#FFFFFF' }}>
                  <Typography 
                    textAlign="center">
                      {page.nome}
                  </Typography>
                  <UiDropdown anchorEl={anchorEl[page.nome]} open={Boolean(anchorEl[page.nome])} onClose={(item) => handleClose(page.nome, item)}  itens={seguros}></UiDropdown>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/images/logo.png" height={31} alt="Logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row-reverse' }}>
            {pages.map((page) => (
              <Button
                key={page.nome}
                onClick={(event) => { if (page.acao) handleClick(event, page.nome); }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography 
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24px"
                  letterSpacing="0.5px"
                  textTransform="capitalize">{page.nome}
                </Typography>
                <UiDropdown anchorEl={anchorEl[page.nome]} open={Boolean(anchorEl[page.nome])} onClose={(item) => handleClose(page.nome, item)}  itens={seguros}></UiDropdown>
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img alt="Remy Sharp" src="/images/icon-user.png" style={{ width: '25px', height: '25px' }} />
              </IconButton>
               <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </S.AppBarContainer>
  )
}
