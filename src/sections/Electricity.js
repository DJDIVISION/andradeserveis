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
import elec1 from "../images/elec1r.jpg"
import elec2 from "../images/elec2r.jpg"
import elec3 from "../images/elec3r.jpg"
import elec4 from "../images/elec4r.jpg"
import text from "../images/elecText.png"
import back from "../images/bulb.png"

const Electricidad = () => {

  const [t, i18n] = useTranslation("global");

  const asunto = document.getElementById("asunto");
  const setEnchufes = () => {
    asunto.defaultValue = "Presupuesto de enchufes";
  }
  const setLamparas = () => {
    asunto.defaultValue = "Presupuesto de lámparas";
  }

  const setCuadros = () => {
    asunto.defaultValue = "Presupuesto de cuadros eléctricos";
  }

  const setPuntos = () => {
    asunto.defaultValue = "Presupuesto de puntos de luz";
  }

  return (
    <Section id="electricidad">
      <ColumnLeft>
      {/* <TitleText><h1>ELECTRICIDAD</h1></TitleText>
      <Picture><img src={text} alt="Box" /></Picture> */}
      {/* <Image><img src={Red} alt="Box" /></Image> */}
      <TitleText><h1>{t("electricidad.titulo")}</h1></TitleText>
        <Picture><Text><h1>{t("electricidad.texto")}</h1></Text></Picture>
      </ColumnLeft>
      <ColumnRight>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
              <SwiperSlide className="slide1" ><Top><Round><img src={elec1} alt="elec1" /></Round></Top>
              <Title>{t("electricidad.titulo1")}</Title>
              <Desc>{t("electricidad.carta1")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setEnchufes}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={elec2} alt="elec2" /></Round></Top>
              <Title>{t("electricidad.titulo2")}</Title>
              <Desc>{t("electricidad.carta2")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setLamparas}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={elec3} alt="elec3" /></Round></Top>
              <TitleSmall>{t("electricidad.titulo3")} </TitleSmall>
              <Desc>{t("electricidad.carta3")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setCuadros}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
              <SwiperSlide className="slide1" ><Top><Round><img src={elec4} alt="elec4" /></Round></Top>
              <Title>{t("electricidad.titulo4")} </Title>
              <Desc>{t("electricidad.carta4")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setPuntos}>{t("botonPresupuesto")}</Link></LinkS></SwiperSlide>
          </Swiper>
      </ColumnRight>
    </Section>
  )
}

export default Electricidad

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
    background-image: linear-gradient(to bottom, #255ede, #2254d5, #1f4acc, #1e3fc2, #1c35b9, #1c31b4, #1b2daf, #1b29aa, #1c2ba9, #1c2da7, #1d2ea6, #1e30a4);
    @media screen and (max-width: 768px){
      flex-direction: column;
      overflow-x: hidden;
      background-position: left center;
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
      font-size: 18px;
      transform: translateX(40px) translateY(10px);
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  border: 1px solid red;
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