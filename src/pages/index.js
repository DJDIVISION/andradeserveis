import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Hero from '../sections/Hero'
import Electricity from '../sections/Electricity'
import Fountain from '../sections/Fountain'
import Paletry from '../sections/Paletry'
import Carpentry from '../sections/Carpentry'
import Painting from '../sections/Painting'
import Cleaning from '../sections/Cleaning'
import Moving from '../sections/Moving'
import Footer from '../sections/Footer'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll as scroll } from "react-scroll";
import { IconButton } from '@mui/material'
import Informatica from '../sections/Informatica'
import Logo from "../images/logo.png"
import {ReactComponent as ES} from "../images/es.svg"
import {ReactComponent as CAT} from "../images/cat.svg"
import {ReactComponent as EN} from "../images/en.svg"
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SvgIcon from '@mui/material/SvgIcon';
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@mui/icons-material/Language';




const Home = () => {

    const [scrollNavDown, setScrollNavDown] = useState(false);
    const [t, i18n] = useTranslation("global");

    console.log(i18n.translator.language);

    const languages = [
        { icon: <SvgIcon onClick={() => i18n.changeLanguage("es")}>
            <ES />
          </SvgIcon>, name: 'ES' },
        { icon: <SvgIcon onClick={() => i18n.changeLanguage("cat")}>
            <CAT />
          </SvgIcon>, name: 'CAT' },
        { icon: <SvgIcon onClick={() => i18n.changeLanguage("en")}>
            <EN />
          </SvgIcon>, name: 'EN' },
      ];

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
  
     const toggleHome = () => {
      scroll.scrollToTop();
    }

  return (
    <>
        <Hero />
        <Electricity />
        <Fountain />
        <Paletry />
        <Carpentry />
        <Painting /> 
        <Cleaning />
        <Moving />
        <Informatica />
        <Footer />
        <FloatingWhatsApp phoneNumber="+34676606660"
        accountName="Andrade Serveis S.A." chatMessage="Hola!👋 En qué podemos ayudarte?" statusMessage="Responde en 5 minutos" />
        <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 30, left: 30 }}
        icon={<LanguageIcon />}
      >
       {languages.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  )
}

export default Home


const ArrowUp = styled.div`
    display: block;
    position: absolute;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "90px" : "-90px")};
    right: 0;
    transform: translate(-20%, 40%);
    z-index: 9999;
    cursor: pointer;
    color: gold;

    @media screen and (min-width: 1100px) {
        margin-right: 30px;
        margin-top: 20px;
    }
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

