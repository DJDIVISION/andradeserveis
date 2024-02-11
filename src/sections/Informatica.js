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
import fonta1 from "../images/FONTA1R.jpg"
import fonta2 from "../images/info1.jpg"
import fonta3 from "../images/fonta3.jpg"
import fonta4 from "../images/info2.jpg"
import text from "../images/infoText.png"
import back from "../images/fontaBack.jpg"

const Informatica = () => {

  const [t, i18n] = useTranslation("global");

  const asunto = document.getElementById("asunto");
  const setFugas = () => {
    asunto.defaultValue = "Presupuesto de fugas";
  }
  const setDesagues = () => {
    asunto.defaultValue = "Presupuesto de desagües";
  }
  const setCobre = () => {
    asunto.defaultValue = "Presupuesto de tubos de cobre";
  }
  const setCaleffacion = () => {
    asunto.defaultValue = "Presupuesto de calefacción";
  }

  return (
    <Section id="informatica">
      <ColumnLeft>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
          <SwiperSlide className="slide1" ><Top><Round><img src={fonta2} alt="fonta2" /></Round></Top>
              <Title>{t("informatica.titulo1")}</Title>
              <Desc>{t("informatica.carta1")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setFugas}>{t("botonPresupuesto")}</Link></LinkS>
          </SwiperSlide>
          <SwiperSlide className="slide1" ><Top><Round><img src={fonta3} alt="fonta3" /></Round></Top>
              <TitleSmall>{t("informatica.titulo2")}</TitleSmall>
              <Desc>{t("informatica.carta2")}</Desc>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setDesagues}>{t("botonPresupuesto")}</Link></LinkS>
          </SwiperSlide>
          <SwiperSlide className="slide1" ><Top><Round><img src={fonta4} alt="fonta4" /></Round></Top>
              <TitleSmall>{t("informatica.titulo3")}</TitleSmall>
              <DescSmall>{t("informatica.carta3")}</DescSmall>
              <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><Link onClick={setCobre}>{t("botonPresupuesto")}</Link></LinkS>
          </SwiperSlide>
      </Swiper>
      </ColumnLeft>
      <ColumnRight>
      <TitleText><h1>{t("informatica.titulo")}</h1></TitleText>
      <Picture><Text><h1>{t("informatica.texto")}</h1></Text></Picture>
      </ColumnRight>
    </Section>
  )
}

export default Informatica

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
    background-image: linear-gradient(to bottom, #0b0272, #07147a, #062182, #082d89, #0f388f, #0f388f, #0f388f, #0f388f, #082d89, #062182, #07147a, #0b0272);
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
    z-index: 9000;
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

const DescSmall = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  font-size: 18px;
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