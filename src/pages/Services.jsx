import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Services = () => {
    return(
        <>
        <Banner>
            <iframe data-aa='2298884' src='//ad.a-ads.com/2298884?size=300x250' style={{width: '300px', height: '250px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent'}}></iframe>
            <iframe data-aa='2298883' src='//ad.a-ads.com/2298883?size=728x90' style={{width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent'}}></iframe>
            <iframe data-aa='2298886' src='//ad.a-ads.com/2298886?size=300x250' style={{width: '300px', height: '250px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent'}}></iframe>
        </Banner>
        <Text>SERVICIOS</Text>
        </>
    )
}

export default Services

const Banner = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Text = styled.div`
    width: 300px;
    height: 50px;
    position: absolute;
    top: 100px;
    left: 35%;
    font-size: 5vw;
    color: white;
`;