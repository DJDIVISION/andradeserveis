import React from 'react'
import styled from "styled-components"
import Blue from "../images/Blue.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-cards"; 
import "swiper/css/navigation";
import {useTranslation} from "react-i18next";
import {Link as LinkS} from "react-scroll"
import carp1 from "../images/carp1r.jpg"
import carp2 from "../images/carp2r.jpg"
import carp3 from "../images/carp3r.png"
import carp4 from "../images/alum1.jpg"
import carp5 from "../images/alum2.jpg"
import text from "../images/carpText.png"

const Carpentry = () => {

  const [t, i18n] = useTranslation("global");

  const asunto = document.getElementById("asunto");
  const setMontaje = () => {
    asunto.defaultValue = "Presupuesto de montaje de muebles";
  }
  const setInstalación = () => {
    asunto.defaultValue = "Presupuesto de instalación de madera";
  }
  const setReparacion = () => {
    asunto.defaultValue = "Presupuesto de reparación de madera";
  }
  const setPuertas = () => {
    asunto.defaultValue = "Presupuesto de puertas";
  }
  const setVentanas = () => {
    asunto.defaultValue = "Presupuesto de ventanas";
  }

  return (
    <Section id="carpinteria">
      <ColumnLeft>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
          <SwiperSlide className="slide1" ><Top><Round><img src={carp1} alt="fonta2" /></Round></Top>
              <TitleSmall>{t("carpinteria.titulo1")}</TitleSmall>
              <Desc>{t("carpinteria.carta1")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setMontaje}>{t("botonPresupuesto")}</Link></LinkS>
          </SwiperSlide>
          <SwiperSlide className="slide1" ><Top><Round><img src={carp2} alt="fonta3" /></Round></Top>
              <Title>{t("carpinteria.titulo2")}</Title>
              <Desc>{t("carpinteria.carta2")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setInstalación}>{t("botonPresupuesto")}</Link></LinkS>
          </SwiperSlide>
          <SwiperSlide className="slide1" ><Top><Round><img src={carp3} alt="fonta4" /></Round></Top>
              <Title>{t("carpinteria.titulo3")}</Title>
              <Desc>{t("carpinteria.carta3")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setReparacion}>{t("botonPresupuesto")}</Link></LinkS>
          </SwiperSlide>
          <SwiperSlide className="slide1" ><Top><Round><img src={carp4} alt="fonta1"/></Round></Top>
              <Title>{t("carpinteria.titulo4")}</Title>
              <Desc>{t("carpinteria.carta4")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setPuertas}>{t("botonPresupuesto")}</Link></LinkS>
          </SwiperSlide>
          <SwiperSlide className="slide1" ><Top><Round><img src={carp5} alt="fonta1"/></Round></Top>
          <Title>{t("carpinteria.titulo5")}</Title>
              <Desc>{t("carpinteria.carta5")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setVentanas}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
      </Swiper>
      </ColumnLeft>
      <ColumnRight>
      <TitleText><h1>{t("carpinteria.titulo")}</h1></TitleText>
      <Picture><Text><h1>{t("carpinteria.texto")}</h1></Text></Picture>
      {/* <Image><img src={Blue} alt="Box" /></Image>
        
        <Image><Text><h1>Disponemos del mejor servicio de <br/>mantenimiento informático para <br/>empresas y particulares, asistencia <br/>técnica y urgencias informáticas.</h1></Text></Image> */}
      </ColumnRight>
    </Section>
  )
}

export default Carpentry

const Picture = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  place-items: center;
  background-image: url(${Blue});
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
    background-image: linear-gradient(to bottom, #0c008c, #0d0196, #0d02a0, #0d04aa, #0c06b4, #1009bc, #140cc4, #170fcc, #1e13d3, #2517da, #2a1ae2, #301ee9);
    @media screen and (max-width: 768px){
      flex-direction: column-reverse;
      overflow-x: hidden;
      height: 800px;
    }
`;

const ColumnLeft = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 100%;
    height: 500px;
  }
`;

const ColumnRight = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  img{
    width: 90%;
    object-fit: cover;
    display: block;
    transform: translateX(-75px);
  }
  @media screen and (max-width: 768px){
    width: 100%;
    height: 300px;
    img{
      transform: translateX(0px) translateY(0px);

      width: 100%;

    }
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
    transform: translateX(20px) translateY(-30px);
    line-height: 1.3;
  }
  @media screen and (max-width: 768px){
    width: 350px;
    line-height: 1.2;
    h1{
      font-size: 20px;
      transform: translateX(20px) translateY(0px);
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  transform: translateY(100px) scale(1.2);
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