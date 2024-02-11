import {useState, useEffect, useRef} from "react"
import styled from "styled-components"
import Header from "../components/Header"
import {motion, AnimatePresence} from "framer-motion"
import { cardData } from "../data/cardData";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "@mui/material";
import {Link as LinkS} from "react-scroll"
import Pintura from "../images/pintura.png"
import Electricidad from "../images/electricidad.png"
import Limpieza from "../images/limpieza.png"
import Carpinteria from "../images/carpinteria.png"
import Paleteria from "../images/paleteria.png"
import Mudanzas from "../images/mudanzas.png"
import Fontaneria from "../images/fonta.png"
import Informatica from "../images/informatica.png"
import Ticker from '../components/Ticker'
import {useTranslation} from "react-i18next";

function Filter({setActivePlatform, activePlatform, setFiltered, platforms}){

  const [t, i18n] = useTranslation("global");

    const elec = document.getElementById("elec");
    const pale = document.getElementById("pale");
    const fonta = document.getElementById("fonta");
    const pint = document.getElementById("pint");
    const limp = document.getElementById("limp");
    const mud = document.getElementById("mud");
    const carp = document.getElementById("carp");
    const inf = document.getElementById("inf");
    const elecIcon = document.getElementById("elecIcon");
    const paleIcon = document.getElementById("paleIcon");
    const fontaIcon = document.getElementById("fontaIcon");
    const pintIcon = document.getElementById("pintIcon");
    const limpIcon = document.getElementById("limpIcon");
    const mudIcon = document.getElementById("mudIcon");
    const carpIcon = document.getElementById("carpIcon");
    const infIcon = document.getElementById("infIcon");
  
    useEffect(() => {
        if (activePlatform === 0){
          const filtered = platforms.filter(el => el.collection === "ELECTRICIDAD"); 
          setFiltered(filtered);
        } else if (activePlatform === 1){
            const filtered = platforms.filter(el => el.collection === "LIMPIEZA"); 
            setFiltered(filtered);
        } else if (activePlatform === 2){
            const filtered = platforms.filter(el => el.collection === "CARPINTERÍA"); 
            setFiltered(filtered);
        } else if (activePlatform === 3){
            const filtered = platforms.filter(el => el.collection === "PINTURA"); 
            setFiltered(filtered);
        } else if (activePlatform === 4){
            const filtered = platforms.filter(el => el.collection === "PALETERÍA"); 
            setFiltered(filtered);
        } else if (activePlatform === 5){
            const filtered = platforms.filter(el => el.collection === "MUDANZAS"); 
            setFiltered(filtered);
        } else if (activePlatform === 6){
          const filtered = platforms.filter(el => el.collection === "FONTANERÍA"); 
          setFiltered(filtered);
      } else if (activePlatform === 7){
        const filtered = platforms.filter(el => el.collection === "INFORMÁTICA"); 
        setFiltered(filtered);
    }
        
    }, [activePlatform])
  
    function setElec(){
      setActivePlatform(0);
      elec.classList.add("active");
      pale.classList.remove("active");
      fonta.classList.remove("active");
      pint.classList.remove("active");
      limp.classList.remove("active");
      mud.classList.remove("active");
      carp.classList.remove("active");
      inf.classList.remove("active");
      elecIcon.classList.add("activeIcon");
      paleIcon.classList.remove("activeIcon");
      fontaIcon.classList.remove("activeIcon");
      pintIcon.classList.remove("activeIcon");
      limpIcon.classList.remove("activeIcon");
      mudIcon.classList.remove("activeIcon");
      carpIcon.classList.remove("activeIcon");
      infIcon.classList.remove("activeIcon");
    }
  
    function setPale(){
      setActivePlatform(4);
      elec.classList.remove("active");
      fonta.classList.remove("active");
      pint.classList.remove("active");
      limp.classList.remove("active");
      mud.classList.remove("active");
      carp.classList.remove("active");
      inf.classList.remove("active");
      pale.classList.add("active");
      paleIcon.classList.add("activeIcon");
      elecIcon.classList.remove("activeIcon");
      fontaIcon.classList.remove("activeIcon");
      pintIcon.classList.remove("activeIcon");
      limpIcon.classList.remove("activeIcon");
      mudIcon.classList.remove("activeIcon");
      carpIcon.classList.remove("activeIcon");
      infIcon.classList.remove("activeIcon");
    }
  
    function setFonta(){
      setActivePlatform(6);
      elec.classList.remove("active");
      fonta.classList.add("active");
      pale.classList.remove("active");
      pint.classList.remove("active");
      limp.classList.remove("active");
      mud.classList.remove("active");
      carp.classList.remove("active");
      inf.classList.remove("active");
      paleIcon.classList.remove("activeIcon");
      elecIcon.classList.remove("activeIcon");
      fontaIcon.classList.add("activeIcon");
      pintIcon.classList.remove("activeIcon");
      limpIcon.classList.remove("activeIcon");
      mudIcon.classList.remove("activeIcon");
      carpIcon.classList.remove("activeIcon");
      infIcon.classList.remove("activeIcon");
    }
  
    function setPint(){
      setActivePlatform(3);
      elec.classList.remove("active");
      fonta.classList.remove("active");
      pale.classList.remove("active");
      limp.classList.remove("active");
      mud.classList.remove("active");
      carp.classList.remove("active");
      inf.classList.remove("active");
      pint.classList.add("active");
      paleIcon.classList.remove("activeIcon");
      elecIcon.classList.remove("activeIcon");
      fontaIcon.classList.remove("activeIcon");
      limpIcon.classList.remove("activeIcon");
      pintIcon.classList.add("activeIcon");
      mudIcon.classList.remove("activeIcon");
      carpIcon.classList.remove("activeIcon");
      infIcon.classList.remove("activeIcon");
    }
  
    function setLimp(){
      setActivePlatform(1);
      elec.classList.remove("active");
      fonta.classList.remove("active");
      pale.classList.remove("active");
      limp.classList.add("active");
      pint.classList.remove("active");
      mud.classList.remove("active");
      carp.classList.remove("active");
      inf.classList.remove("active");
      paleIcon.classList.remove("activeIcon");
      elecIcon.classList.remove("activeIcon");
      fontaIcon.classList.remove("activeIcon");
      limpIcon.classList.add("activeIcon");
      pintIcon.classList.remove("activeIcon");
      mudIcon.classList.remove("activeIcon");
      carpIcon.classList.remove("activeIcon");
      infIcon.classList.remove("activeIcon");
    }
  
    function setMud(){
      setActivePlatform(5);
      elec.classList.remove("active");
      fonta.classList.remove("active");
      pale.classList.remove("active");
      limp.classList.remove("active");
      pint.classList.remove("active");
      carp.classList.remove("active");
      inf.classList.remove("active");
      mud.classList.add("active");
      paleIcon.classList.remove("activeIcon");
      elecIcon.classList.remove("activeIcon");
      fontaIcon.classList.remove("activeIcon");
      limpIcon.classList.remove("activeIcon");
      pintIcon.classList.remove("activeIcon");
      carpIcon.classList.remove("activeIcon");
      mudIcon.classList.add("activeIcon");
      infIcon.classList.remove("activeIcon");
    }
  
    function setCarp(){
      setActivePlatform(2);
      elec.classList.remove("active");
      fonta.classList.remove("active");
      pale.classList.remove("active");
      limp.classList.remove("active");
      pint.classList.remove("active");
      carp.classList.add("active");
      inf.classList.remove("active");
      mud.classList.remove("active");
      paleIcon.classList.remove("activeIcon");
      elecIcon.classList.remove("activeIcon");
      fontaIcon.classList.remove("activeIcon");
      limpIcon.classList.remove("activeIcon");
      pintIcon.classList.remove("activeIcon");
      carpIcon.classList.add("activeIcon");
      mudIcon.classList.remove("activeIcon");
      infIcon.classList.remove("activeIcon");
    }

    function setInf(){
      setActivePlatform(7);
      elec.classList.remove("active");
      fonta.classList.remove("active");
      pale.classList.remove("active");
      limp.classList.remove("active");
      pint.classList.remove("active");
      carp.classList.remove("active");
      inf.classList.add("active");
      mud.classList.remove("active");
      paleIcon.classList.remove("activeIcon");
      elecIcon.classList.remove("activeIcon");
      fontaIcon.classList.remove("activeIcon");
      limpIcon.classList.remove("activeIcon");
      pintIcon.classList.remove("activeIcon");
      carpIcon.classList.remove("activeIcon");
      mudIcon.classList.remove("activeIcon");
      infIcon.classList.add("activeIcon");
    }
  
    return(
      <>
       <IconsWrapper>
        <Icons>
           <Icon onClick={() => setElec()}><img src={Electricidad} alt="Electricidad" class ="activeIcon" id="elecIcon"/></Icon>
           <Icon onClick={() => setFonta()}><img src={Fontaneria} alt="Fontaneria" id="fontaIcon"/></Icon>
           <Icon onClick={() => setPale()}><img src={Paleteria} alt="Paleteria" id="paleIcon"/></Icon>
           <Icon onClick={() => setCarp()}><img src={Carpinteria} alt="Carpinteria" id="carpIcon"/></Icon>
           <Icon onClick={() => setPint()}><img src={Pintura} alt="Pintura" id="pintIcon"/></Icon>
           <Icon onClick={() => setLimp()}><img src={Limpieza} alt="Limpieza" id="limpIcon"/></Icon>
           <Icon onClick={() => setMud()}><img src={Mudanzas} alt="Mudanzas" id="mudIcon"/></Icon>
           <Icon onClick={() => setInf()}><img src={Informatica} alt="Mudanzas" id="infIcon"/></Icon>
           
          </Icons>
          <Titles>
            <Text><h1 class="active" id="elec">{t("services.1")}</h1></Text>
            <Text><h1 id="fonta">{t("services.2")}</h1></Text>
            <Text><h1 id="pale">{t("services.3")}</h1></Text>
            <Text><h1 id="carp">{t("services.4")}</h1></Text>
            <Text><h1 id="pint">{t("services.5")}</h1></Text>
            <Text><h1 id="limp">{t("services.6")}</h1></Text>
            <Text><h1 id="mud">{t("services.7")}</h1></Text>
            <Text><h1 id="inf">{t("services.8")}</h1></Text>
            
          </Titles>
       </IconsWrapper> 
       
       </>
    )
  }
  
    function Platforms ({el}){
      const [t, i18n] = useTranslation("global");
    if(i18n.translator.language === "es"){
      return(
        <Wrapper animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        whileHover={{scale: 1.025}}
        whileTap={{scale: 0.95}}
        layout >
        <CardTitle>{el.name_es}</CardTitle>
        <ImageContainer >
        <img src={el.image} alt={el.id} key={el.id}/>
        </ImageContainer>
        <CardText>{el.desc_es}</CardText>
        </Wrapper>
        
    )
    } else if(i18n.translator.language === "cat"){
      return(
        <Wrapper animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        whileHover={{scale: 1.025}}
        whileTap={{scale: 0.95}}
        layout >
        <CardTitle>{el.name_cat}</CardTitle>
        <ImageContainer >
        <img src={el.image} alt={el.id} key={el.id}/>
        </ImageContainer>
        <CardText>{el.desc_cat}</CardText>
        </Wrapper>
        
    )
    } else if(i18n.translator.language === "en"){
      return(
        <Wrapper animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        whileHover={{scale: 1.025}}
        whileTap={{scale: 0.95}}
        layout >
        <CardTitle>{el.name_en}</CardTitle>
        <ImageContainer >
        <img src={el.image} alt={el.id} key={el.id}/>
        </ImageContainer>
        <CardText>{el.desc_en}</CardText>
        </Wrapper>
        
    )
    }
  }

const Hero = () => {

    const carroussel = useRef();
    const [platforms, setPlatforms] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activePlatform, setActivePlatform] = useState(0);
    const [width, setWidth] = useState(0);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, [])
  
      useEffect(() => {
          fetchPlatforms();
      }, []);
  
      const fetchPlatforms = () => {
        setPlatforms(cardData);
        const filtered = cardData.filter(el => el.collection === "ELECTRICIDAD"); 
        setFiltered(filtered); 
    }

    const animate = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.75
          }
        }
      }

  return (
    <Section>
        <Header />
        <Ticker />
        <Title>{t("heroTitle")}</Title>
        <SmartHero>
        <Carousel ref={carroussel}>
        <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
            <SmartIcon onClick={() => setActivePlatform(0)}><ImageWrapper><img src={Electricidad} alt="Electricidad" /></ImageWrapper><TextWrap>{t("services.1")}</TextWrap></SmartIcon>
            <SmartIcon onClick={() => setActivePlatform(1)}><ImageWrapper><img src={Limpieza} alt="Limpieza" /></ImageWrapper><TextWrap>{t("services.6")}</TextWrap></SmartIcon>
            <SmartIcon onClick={() => setActivePlatform(2)}><ImageWrapper><img src={Carpinteria} alt="Carpinteria" /></ImageWrapper><TextWrap>{t("services.4")}</TextWrap></SmartIcon>
            <SmartIcon onClick={() => setActivePlatform(3)}><ImageWrapper><img src={Pintura} alt="Pintura" /></ImageWrapper><TextWrap>{t("services.5")}</TextWrap></SmartIcon>
            <SmartIcon onClick={() => setActivePlatform(4)}><ImageWrapper><img src={Paleteria} alt="Paleteria" /></ImageWrapper><TextWrap>{t("services.3")}</TextWrap></SmartIcon>
            <SmartIcon onClick={() => setActivePlatform(5)}><ImageWrapper><img src={Mudanzas} alt="Mudanzas" /></ImageWrapper><TextWrap>{t("services.7")}</TextWrap></SmartIcon>
            <SmartIcon onClick={() => setActivePlatform(7)}><ImageWrapper><img src={Informatica} alt="INFORMATICA" /></ImageWrapper><TextWrap>{t("services.8")}</TextWrap></SmartIcon>
        </InnerCarousel>
        </Carousel>
        </SmartHero>
        <Filter platforms={platforms} setFiltered={setFiltered} activePlatform={activePlatform} setActivePlatform={setActivePlatform} /> 
        <FilterSection layout>
        <AnimatePresence>
        {filtered.map((el) => {
                        return <Platforms key={el.id} el={el}/>;
                    })}
        </AnimatePresence>
        </FilterSection>
        <Buttoner >
        {activePlatform === 0 && <LinkS to="electricidad" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.1")}</LearnMore></motion.div></LinkS>}
        {activePlatform === 1 && <LinkS to="limpieza" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.6")} </LearnMore></motion.div></LinkS>}
        {activePlatform === 6 && <LinkS to="fontaneria" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.2")}</LearnMore></motion.div></LinkS>}
        {activePlatform === 2 && <LinkS to="carpinteria" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.4")}</LearnMore></motion.div></LinkS>}
        {activePlatform === 4 && <LinkS to="paleteria" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.3")}</LearnMore></motion.div></LinkS>}
        {activePlatform === 3 && <LinkS to="pintura" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.5")}</LearnMore></motion.div></LinkS>}
        {activePlatform === 5 && <LinkS to="mudanzas" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.7")}</LearnMore></motion.div></LinkS>}
        {activePlatform === 7 && <LinkS to="informatica" smooth={true} duration={500} spy={true} exact="true"><motion.div variants={animate} initial="hidden" animate="show"><LearnMore>{t("buttons.8")}</LearnMore></motion.div></LinkS>}
        </Buttoner>
    </Section>
  )
}

export default Hero

const LearnMore = styled(Button)`
  &&&{
    color: black;
    font-weight: bold;
  border-radius: 10px;
  border: 1px solid black;
  background: linear-gradient(to top, #23aae5, #1aa5e5, #14a0e5, #119ae4, #1595e3, #048fe3, #0089e3, #0082e3, #0079e4, #006fe4, #0165e3, #1f5ae1);
  font-family: "Red Hat Display";
  }
`;

const Buttoner = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 768px){
    margin-top: 30px;
  }
`;

const FilterSection = styled(motion.div)`
    width: 80%;
    height: 40vh;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 2rem;
    overflow: hidden;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
        height: 1200px;
    }
`;

const SmartHero = styled.div`
  width: 100%;
  height: 15vh;
  display: grid;
  place-items: center;
  margin: 30px 0 50px 0;
  @media screen and (min-width: 768px){
        display: none;
    }
`;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #0d0259, #0f0564, #100a6e, #110f7a, #111485, #131c90, #15249b, #162ca6, #1a39b4, #1e45c2, #2251d0, #255ede);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 1400px;
  }
`;

const Title = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
    color: white;
    @media screen and (max-width:768px){
        height: 50px;
    }
`;

const Carousel = styled(motion.div)`
    cursor: grab;
    height: 20vh;
    width: 95%;
    overflow: hidden;
    display: flex;
    @media screen and (max-width: 768px){
      height: 130px;
    }
`;

const InnerCarousel = styled(motion.div)`
    display: flex;
    //align-items: center;
    height: 150px;
    width: 90%;
    @media screen and (max-width: 768px){
      height: 130px;
    }
`;

const CardText = styled.div`
  width: 90%;
  height: 35%;
  display: grid;
  place-items: center;
  color: white;
  font-size: 16px;
  text-align: center;
  transform: translateY(-10px);
  @media screen and (max-width: 768px){
    line-height: 1.1;
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 45%;
  display: grid;
  place-items: center;
  img{
        width: 65%;
        display: block;
        object-fit: cover;
        transform: translateY(-10px);
        border-radius: 10px;
  }
  @media screen and (max-width: 768px){
    img{
      width: 55%;
    }
  }
`;

const CardTitle = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  place-items: center;
  color: white;
  font-size: 20px;
  text-align: center;
`;

const Wrapper = styled(motion.div)`
    height: 240px;
    width: 250px;
    border: 1px solid aqua;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000133;
    @media screen and (max-width: 768px){
        height: 280px;
    }
`;

const Text = styled.div`
  width: calc(80vw / 7);
  height: 100%;
  text-align: center;
  color: white;
  font-family: "Red Hat Display";
  h1{
    font-size: 18px;
    transform: translateY(-15px);
  }
`;

const Titles = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  transform: translateY(20px);
`;

const Icon = styled.div`
  width: calc(80vw / 7);
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  img{
    width: 40%;
    display: block;
    object-fit: cover;
      border: 1px solid aqua;
      border-radius: 50%;
      padding: 10px;
  }
`;

const IconsWrapper = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const Icons = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  transform: translateY(10px);
`;

const TextWrap = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  @media screen and (max-width: 768px){
    display: grid;
    place-items: center;
    color: white;
  }

`;

const ImageWrapper = styled.div`
width: 100%;
height: 70%;
display: grid;
place-items: center;
img{
  width: 35%;
  display: block;
  object-fit: cover;
  border: 1px solid aqua;
    border-radius: 50%;
    padding: 10px;
    transform: translateY(5px);
}
`;

const SmartIcon = styled(motion.div)`
  min-width: 140px !important;
  margin: 0 20px;
  height: 120px;
  display: flex;
  flex-direction: column;
  border: 1px solid aqua;
  border-radius: 20px;
`;