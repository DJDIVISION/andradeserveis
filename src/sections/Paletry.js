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
import pal1 from "../images/pale2.jpg"
import pal2 from "../images/pal5.jpg"
import pal3 from "../images/pal3r.jpg"
import pal4 from "../images/pale5.jpg"
import text from "../images/paleText.png"

const Paletry = () => {

  const [t, i18n] = useTranslation("global");

  const asunto = document.getElementById("asunto");
  const setBaños = () => {
    asunto.defaultValue = "Presupuesto de baño";
  }
  const setCocinas = () => {
    asunto.defaultValue = "Presupuesto de cocina";
  }
  const setSuelo = () => {
    asunto.defaultValue = "Presupuesto de suelo";
  }
  const setTerraza = () => {
    asunto.defaultValue = "Presupuesto de terraza";
  }

  return (
    <Section id="paleteria">
      <ColumnLeft>
      <TitleText><h1>{t("paleteria.titulo")}</h1></TitleText>
      <Picture><Text><h1>{t("paleteria.texto")}</h1></Text></Picture>
      {/* <Image><img src={Red} alt="Box" /></Image>
        
        <Image><Text><h1>Ofrecemos un servicio de reformas tanto en interiores como en exteriores personalizado y adaptado a tus necesidades y presupuesto.</h1></Text></Image> */}
       
      </ColumnLeft>
      <ColumnRight>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
              <SwiperSlide className="slide1" ><Top><Round><img src={pal1} alt="elec1" /></Round></Top>
              <Title>{t("paleteria.titulo1")}</Title>
              <Desc>{t("paleteria.carta1")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setBaños}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={pal2} alt="elec2" /></Round></Top>
              <Title>{t("paleteria.titulo2")}</Title>
              <Desc>{t("paleteria.carta2")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setCocinas}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={pal3} alt="elec3" /></Round></Top>
              <Title>{t("paleteria.titulo3")} </Title>
              <Desc>{t("paleteria.carta3")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setSuelo}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={pal4} alt="elec4" /></Round></Top>
              <Title>{t("paleteria.titulo4")}</Title>
              <Desc>{t("paleteria.carta4")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setTerraza}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
          </Swiper>
      </ColumnRight>
    </Section>
  )
}

export default Paletry


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
    transform: translateX(20px) translateY(50px);
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
    background-image: linear-gradient(to bottom, #232d6d, #1f2a72, #1b2678, #17227c, #151d81, #131983, #121586, #121088, #100d89, #0f088a, #0d048b, #0c008c);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
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
    transform: translateX(40px) translateY(-20px);
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