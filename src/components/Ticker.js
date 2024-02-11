import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css'

const Carousel = styled.div`
    width: 100vw;
    background: transparent;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CarouselItem = styled.div`
    width: 200px;
    text-align: center;
    color: gold;
    font-family: "Red Hat Display";
    font-weight: bold;
    height: 50%;
    font-size: 18px;
    transform: translateX(150px);
    @media screen and (max-width: 860px){
        transform: translateX(130px);
    }
    
`;

const FirstItem = styled.div`
    width: 350px;
    text-align: center;
    color: gold;
    font-family: "Red Hat Display";
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    
`;

const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 6 },
};

const items = [
    <FirstItem className="item" data-value="1">OFRECEMOS NUESTROS SERVICIOS EN:</FirstItem>,
    <CarouselItem className="item" data-value="2">ALELLA</CarouselItem>,
    <CarouselItem className="item" data-value="2">ARENYS DE MAR</CarouselItem>,
    <CarouselItem className="item" data-value="2">ARENYS DE MUNT</CarouselItem>,
    <CarouselItem className="item" data-value="2">ARGENTONA</CarouselItem>,
    <CarouselItem className="item" data-value="2">AVINYÓ</CarouselItem>,
    <CarouselItem className="item" data-value="3">BADALONA</CarouselItem>,
    <CarouselItem className="item" data-value="3">BARBERÀ</CarouselItem>,
    <CarouselItem className="item" data-value="3">BARCELONA</CarouselItem>,
    <CarouselItem className="item" data-value="3">CALELLA</CarouselItem>,
    <CarouselItem className="item" data-value="3">CANET DE MAR</CarouselItem>,
    <CarouselItem className="item" data-value="3">CANOVELLES</CarouselItem>,
    <CarouselItem className="item" data-value="3">CARDONA</CarouselItem>,
    <CarouselItem className="item" data-value="4">CASTELLAR</CarouselItem>,
    <CarouselItem className="item" data-value="5">CASTELLBISBAL</CarouselItem>,
    <CarouselItem className="item" data-value="5">CASTELLDEFELS</CarouselItem>,
    <CarouselItem className="item" data-value="5">CERDANYOLA</CarouselItem>,
    <CarouselItem className="item" data-value="5">EL MASNOU</CarouselItem>,
    <CarouselItem className="item" data-value="5">EL PRAT</CarouselItem>,
    <CarouselItem className="item" data-value="5">GRANOLLERS</CarouselItem>,
    <CarouselItem className="item" data-value="5">L'AMETLLA</CarouselItem>,
    <CarouselItem className="item" data-value="5">LA ROCA</CarouselItem>,
    <CarouselItem className="item" data-value="5">LLIÇÀ</CarouselItem>,
    <CarouselItem className="item" data-value="5">LLINARS</CarouselItem>,
    <CarouselItem className="item" data-value="5">L`HOSPITALET</CarouselItem>,
    <CarouselItem className="item" data-value="5">MALGRAT DE MAR</CarouselItem>,
    <CarouselItem className="item" data-value="5">MANRESA</CarouselItem>,
    <CarouselItem className="item" data-value="5">MARTORELLES</CarouselItem>,
    <CarouselItem className="item" data-value="5">MATADEPERA</CarouselItem>,
    <CarouselItem className="item" data-value="5">MATARÓ</CarouselItem>,
    <CarouselItem className="item" data-value="5">MOLLET</CarouselItem>,
    <CarouselItem className="item" data-value="5">MONISTROL</CarouselItem>,
    <CarouselItem className="item" data-value="5">MONTCADA</CarouselItem>,
    <CarouselItem className="item" data-value="5">MONTGAT</CarouselItem>,
    <CarouselItem className="item" data-value="5">MONTMELÓ</CarouselItem>,
    <CarouselItem className="item" data-value="5">OLESA</CarouselItem>,
    <CarouselItem className="item" data-value="5">PARETS</CarouselItem>,
    <CarouselItem className="item" data-value="5">POLINYÀ</CarouselItem>,
    <CarouselItem className="item" data-value="5">PREMIÀ</CarouselItem>,
    <CarouselItem className="item" data-value="5">RIPOLLET</CarouselItem>,
    <CarouselItem className="item" data-value="5">RUBÍ</CarouselItem>,
    <CarouselItem className="item" data-value="5">SABADELL</CarouselItem>,
    <CarouselItem className="item" data-value="5">SANT ADRIÀ</CarouselItem>,
    <CarouselItem className="item" data-value="5">SANT CELONI</CarouselItem>,
    <CarouselItem className="item" data-value="5">SANT CUGAT</CarouselItem>,
    <CarouselItem className="item" data-value="5">SANT QUIRZE</CarouselItem>,
    <CarouselItem className="item" data-value="5">SANTA COLOMA</CarouselItem>,
    <CarouselItem className="item" data-value="5">TERRASSA</CarouselItem>,
    <CarouselItem className="item" data-value="5">TORDERA</CarouselItem>,
    <CarouselItem className="item" data-value="5">VIC</CarouselItem>,
    <CarouselItem className="item" data-value="5">VILADECANS</CarouselItem>,
    <CarouselItem className="item" data-value="5">VILANOVA</CarouselItem>,
    <CarouselItem className="item" data-value="5">VILASSAR DE MAR</CarouselItem>,
    <CarouselItem className="item" data-value="5"></CarouselItem>,
];

const Ticker = () => (
    <Carousel>
    <AliceCarousel
        disableDotsControls
        disableButtonsControls
        infinite
        autoPlay
        paddingLeft={30}
        autoPlayInterval={750}
        animationDuration={1000}
        items={items}
        responsive={responsive}
    />
    </Carousel>
);

export default Ticker;