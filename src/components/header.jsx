import { Typography, Container } from "@mui/material";
import { styled } from '@mui/system';
import React from "react";
import HeaderContact from '../assets/header-contact.jsx';
import '../index.css'

const HeaderContainer = styled(Container)({
  display: 'flex',
  justifyContent: "flex-end",
  alignItems: 'center',
  padding: '8px 0',
  gap: '24px',
});

const Header = () => {
  return (
    <HeaderContainer maxWidth="xl">
      <Typography>Доставка и оплата</Typography>
      <Typography>Пункты выдачи</Typography>
      <Typography>Поддержка</Typography>
      <HeaderContact />
      <a href="#">+998 90 253 77 53</a>
    </HeaderContainer>
  );
};

export default Header;
