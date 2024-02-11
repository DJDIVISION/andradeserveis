import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {IconButton} from "@mui/material" 
import { motion } from 'framer-motion';
import Logo from "../images/ASlogo.png"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll as scroll } from "react-scroll";
import {useTranslation} from "react-i18next";


const Header = () => {

    const [open, setOpen] = useState(false);
    const [scrollNavDown, setScrollNavDown] = useState(false);
    const [t, i18n] = useTranslation("global");

    const changeNavDown = () => {
        if(window.scrollY >= 50) {
            setScrollNavDown(true); 
        } 
        else {
            setScrollNavDown(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavDown) 
     }, []);

    const Toggle = () => {
        setOpen(!open);
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <HeaderDiv scrollNavDown={scrollNavDown}>
        <LogoWrapper><img src={Logo} alt="logo" /></LogoWrapper>
        <HeaderText>
        <h1><span>{t("header.message1")}</span><strong>{t("header.message2")}</strong><span>{t("header.message3")}</span></h1>
        </HeaderText>
        <SmartText>
          <HeaderTitleTop>{t("header.message1")}</HeaderTitleTop>
            <HeaderSubTitle>{t("header.message2")}</HeaderSubTitle>
            <HeaderTitleBottom>{t("header.message3")}</HeaderTitleBottom>
        </SmartText>
    </HeaderDiv>
  )
}

export default Header

const HeaderSubTitle = styled.div`
  width: 100%;
  height: 40%;
  font-size: 26px;
  color: white;
  display: grid;
  place-items: center;
  transform: translateY(-4px);
  @media screen and (max-width: 768px){
    height: 50%;
    transform: translateY(0);
    font-size: 24px;
    }
`;

const HeaderTitleTop = styled.div`
  width: 100%;
  height: 30%;
  font-size: 14px;
  color: white;
  display: grid;
  place-items: center;
  transform: translateY(5px);
`;

const HeaderTitleBottom = styled.div`
  width: 100%;
  height: 30%;
  font-size: 14px;
  color: white;
  display: grid;
  place-items: center;
  transform: translateY(-5px);
`;


const HeaderText = styled.div`
  width: 75%;
  height: 100%;
  display: grid;
  place-items: center;
  transform: translateX(-20px);
  h1{
    color: white;
    font-size: 36px;
  }
  span{
    font-size: 22px;
    margin: 0 30px;
    color: white;
  }
  strong{
    font-style: italic;
  }
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const SmartText = styled.div`
  width: 60%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

const LogoWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: grid;
  place-items: center;
  img{
    display: block;
    width: 70%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px){
    width: 40vw;
    display: grid;
    place-items: center;
    img{
    display: block;
    width: 100%;
    object-fit: cover;
  }
  }
`;

const HeaderDiv = styled.div`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  position: sticky;
  top: ${({ scrollNavDown }) => (scrollNavDown ? "-90px" : "0")};
  transition: 0.5s all ease;
`;

const ScrollIcon = styled(ArrowCircleUpIcon)`
    color: white;
    transition: 0.5s all ease;
    top: 600px;
    transform: scale(1.6);

    @media screen and (max-width: 1100px){
        transform: scale(1.2);
    }
`;