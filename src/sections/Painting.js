import React from 'react'
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-cards"; 
import "swiper/css/navigation";
import Red from "../images/Red.png"
import {Link as LinkS} from "react-scroll"
import {useTranslation} from "react-i18next";
import pint1 from "../images/pint1r.jpg"
import pint2 from "../images/pint2r.jpg"
import pint3 from "../images/pint3r.jpg"
import pint4 from "../images/pint4r.jpg"
import text from '../images/pintuText.png'

const Painting = () => {

  const [t, i18n] = useTranslation("global");

  const asunto = document.getElementById("asunto");
  const setMontaje = () => {
    asunto.defaultValue = "Presupuesto de pintura en interiores";
  }
  const setInstalación = () => {
    asunto.defaultValue = "Presupuesto de pintura en exteriores";
  }
  const setReparacion = () => {
    asunto.defaultValue = "Presupuesto de estucados";
  }
  const setPuertas = () => {
    asunto.defaultValue = "Presupuesto de alisados";
  }

  return (
    <Section id="pintura">
      <ColumnLeft>
      <TitleText><h1>{t("pintura.titulo")}</h1></TitleText>
      <Picture><Text><h1>{t("pintura.texto")}</h1></Text></Picture>
      </ColumnLeft>
      <ColumnRight>
      <Swiper
        effect={'cards'} 
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
              <SwiperSlide className="slide1" ><Top><Round><img src={pint1} alt="elec1" /></Round></Top>
              <Title>{t("pintura.titulo1")}</Title>
              <Desc>{t("pintura.carta1")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setMontaje}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={pint2} alt="elec2" /></Round></Top>
              <Title>{t("pintura.titulo2")}</Title>
              <Desc>{t("pintura.carta2")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setInstalación}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={pint3} alt="elec3" /></Round></Top>
              <Title>{t("pintura.titulo3")}</Title>
              <Desc>{t("pintura.carta3")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setReparacion}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={pint4} alt="elec4" /></Round></Top>
              <TitleSmall>{t("pintura.titulo4")}</TitleSmall>
              <Desc>{t("pintura.carta4")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setPuertas}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
          </Swiper>
      </ColumnRight>
    </Section>
  )
}

export default Painting

const Picture = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  place-items: center;
  background-image: url(${Red});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 768px){
    height: 200px;
    background-size: 120%;
  }
`;

const TitleText = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  place-items: center;
  h1{
    font-size: 4.5vw;
    color: white;
    text-align: center;
    transform: translateY(50px);
  }
  @media screen and (max-width: 768px){
    height: 100px;
      h1{
        transform: translateX(0px) translateY(0px);
        font-size: 10vw;
      }
  }
`;

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-image: linear-gradient(to bottom, #301ee9, #3620e7, #3b22e6, #4024e4, #4426e3, #4225da, #4025d0, #3e24c7, #3621b4, #2e1da1, #271a8e, #20167c);
    @media screen and (max-width: 768px){
      flex-direction: column;
      overflow-x: hidden;
      height: 800px;
    }
`;

const ColumnLeft = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 768px){
    width: 100%;
    height: 300px;
  }
`;

const ColumnRight = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 100%;
    height: 500px;
  }
`;

const Text = styled.div`
  white-space: pre;
  width: 500px;
  height: 150px;
  //padding: 5px;
  font-family: "Red Hat Display";
  h1{
    color: white;
    font-size: 28px;
    transform: translateX(60px) translateY(-20px);
    line-height: 1.3;
  }
  @media screen and (max-width: 768px){
    width: 350px;
    line-height: 1.2;
    h1{
      font-size: 20px;
      transform: translateX(30px) translateY(10px);
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  height: 40%;
  display: grid;
  place-items: center;
`;

const Round = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid gold;
  display: grid;
  place-items: center;
  img{
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  place-items: center;
  font-size: 32px;
  color: white;
  transform: translateY(10px);
  font-family: "Red Hat Display";
`;

const TitleSmall = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  place-items: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
  transform: translateY(5px);
  font-family: "Red Hat Display";
`;

const Desc = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  font-size: 20px;
  color: white;
  text-align: center;
  font-family: "Red Hat Display";
`;

const Link = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid orange;
  border-radius: 10px;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 14px;
  cursor: pointer;
`;