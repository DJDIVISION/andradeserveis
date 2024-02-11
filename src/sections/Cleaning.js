import React from 'react'
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-cards"; 
import "swiper/css/navigation";
import Blue from "../images/Blue.png"
import {Link as LinkS} from "react-scroll"
import {useTranslation} from "react-i18next";
import limp1 from "../images/limp1r.jpg"
import limp4 from "../images/limp4.png"
import limp2 from "../images/limp2r.jpg"
import limp3 from "../images/limp3r.jpeg"
import limp5 from "../images/limp5r.jpg"
import limp6 from "../images/limp6r.jpg"
import text from "../images/limpText.png"

const Cleaning = () => {

  const [t, i18n] = useTranslation("global");

  const asunto = document.getElementById("asunto");
  const setMontaje = () => {
    asunto.defaultValue = "Presupuesto de limpieza de pisos";
  }
  const setInstalación = () => {
    asunto.defaultValue = "Presupuesto de limpieza de oficinas";
  }
  const setReparacion = () => {
    asunto.defaultValue = "Presupuesto de limpieza de locales";
  }
  const setPuertas = () => {
    asunto.defaultValue = "Presupuesto de limpieza de empresas";
  }

  const setJardines = () => {
    asunto.defaultValue = "Presupuesto de limpieza de jardines";
  }

  const setAseos = () => {
    asunto.defaultValue = "Presupuesto de limpieza de aseos";
  }

  return (
    <Section id="limpieza">
      <ColumnLeft>
      <TitleText><h1>{t("limpieza.titulo")}</h1></TitleText>
      <Picture><Text><h1>{t("limpieza.texto")}</h1></Text></Picture>
      </ColumnLeft>
      <ColumnRight>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
              <SwiperSlide className="slide1" ><Top><Round><img src={limp4} alt="elec1" /></Round></Top>
              <Title>{t("limpieza.titulo1")}</Title>
              <Desc>{t("limpieza.carta1")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setMontaje}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={limp2} alt="elec2" /></Round></Top>
              <Title>{t("limpieza.titulo2")}</Title>
              <Desc>{t("limpieza.carta2")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setInstalación}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={limp1} alt="elec3" /></Round></Top>
              <Title>{t("limpieza.titulo3")}</Title>
              <Desc>{t("limpieza.carta3")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setReparacion}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={limp3} alt="elec4" /></Round></Top>
              <Title>{t("limpieza.titulo4")}</Title>
              <Desc>{t("limpieza.carta4")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setPuertas}>{t("botonPresupuesto")}</Link></LinkS>
              </SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={limp5} alt="elec1" /></Round></Top>
              <Title>{t("limpieza.titulo5")}</Title>
              <Desc>{t("limpieza.carta5")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setJardines}>{t("botonPresupuesto")}</Link></LinkS>
              </SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={limp6} alt="elec1" /></Round></Top>
              <Title>{t("limpieza.titulo6")}</Title>
              <Desc>{t("limpieza.carta6")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setAseos}>{t("botonPresupuesto")}</Link></LinkS>
              </SwiperSlide>
          </Swiper>
      </ColumnRight>
    </Section>
  )
}

export default Cleaning

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
    flex-direction: row-reverse;
    background-image: linear-gradient(to bottom, #20167c, #1e1375, #1c0f6f, #190b68, #170862, #180b66, #190e69, #1a116d, #1f1b7d, #23258d, #26309d, #283aae);
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
    transform: translateX(30px) translateY(-30px);
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