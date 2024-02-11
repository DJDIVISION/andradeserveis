import React, {useRef} from 'react'
import styled from "styled-components"
import emailjs from "@emailjs/browser"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Logo from "../images/ASlogo.png"
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import {message} from "antd"

const Mail = styled(MailOutlineIcon)`
    &&&{
        color: white;
        scale: 1.3;
        border: 1px solid lightblue;
        border-radius: 50%;
        padding: 5px;
        @media screen and (max-width: 768px){
            scale: 1.2;
        }
    }
    
`;

const Location = styled(LocationOnIcon)`
    &&&{
        color: white;
        scale: 1.3;
        border: 1px solid lightblue;
        border-radius: 50%;
        padding: 5px;
        @media screen and (max-width: 768px){
            scale: 1.2;
        }
    }
`;

const Phone = styled(LocalPhoneIcon)`
    &&&{
        color: white;
        scale: 1.3;
        border: 1px solid lightblue;
        border-radius: 50%;
        padding: 5px;
        @media screen and (max-width: 768px){
            scale: 1.2;
        }
    }
`;

const FormButton = styled(Button)`
    &&&{
        border: 1px solid darkgreen;
        background-color: green;
        color: white;
        font-weight: bold;
        font-size: 16px;
        font-family: "Red Hat Display";
        margin-top: 7.5px;
        width: 150px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Footer = () => {

    const refForm = useRef();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateID = "template_h3xui36";
        const serviceID ="service_uxsvo9f";
        const apiKey = "btV--PcDVgWMsYSq4";
        emailjs.sendForm(serviceID, templateID, refForm.current, apiKey)
        .then(message.success("Su petición de presupuesto ha sido recibida. Nos pondremos en contacto con usted en breve.", [5])).then(refForm.current.reset())
        .catch(err => console.log(err))

    }

  return (
    <>
    <Section id="footer">
        <Title>CONTACTE CON NOSOTROS</Title>
        <Form>
            <Column>
                
                <Frame frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=416&amp;height=320&amp;hl=en&amp;q=Passatge+de+la+Cova,+6,+08241+Manresa,+Barcelona&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></Frame>
                <Row><Icon><Mail /></Icon><Text><a href="mailto:andradeserveis@gmail.com" target="_blank" rel="noreferrer noopener">andradeserveis@gmail.com</a></Text></Row>
                
                <Row><Icon><Phone /></Icon><Text><a href="tel:651366298" target="_blank" rel="noreferrer noopener">651 36 62 98</a></Text></Row>
            </Column>
            <ColumnForm>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
            >
                {({
          errors,
          touched,
          handleBlur,
        }) => (
            <SubmitForm ref={refForm} onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                variant="filled"
                type="text"
                label="Nombre"
                name="username"
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2", border: '1px solid whitesmoke', margin: '5px 0'}}
                inputProps={{
                  style:{ fontFamily: "Red Hat Display", textTransform: "uppercase", color: "white"}
                }}
                InputLabelProps={{
                    style: { color: '#fff', fontFamily: "Red Hat Display" },
                  }}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                type="text"
                label="Correo Electrónico"
                name="mail"
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2", border: '1px solid whitesmoke', margin: '5px 0'}}
                inputProps={{
                  style:{ fontFamily: "Red Hat Display", textTransform: "lowercase", color: "white"}
                }}
                InputLabelProps={{
                    style: { color: '#fff', fontFamily: "Red Hat Display" },
                  }}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                type="text"
                label="Teléfono"
                name="phone"
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2", border: '1px solid whitesmoke', margin: '5px 0'}}
                inputProps={{
                  style:{ fontFamily: "Red Hat Display", textTransform: "uppercase", color: "white"}
                }}
                InputLabelProps={{
                    style: { color: '#fff', fontFamily: "Red Hat Display" },
                  }}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                type="text"
                label="Asunto"
                id='asunto'
                name="asunto"
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2", border: '1px solid whitesmoke', margin: '5px 0'}}
                inputProps={{
                  style:{ fontFamily: "Red Hat Display", textTransform: "uppercase", color: "white"}
                }}
                InputLabelProps={{
                    style: { color: '#fff', fontFamily: "Red Hat Display" },
                  }}
              />
              <TextField
                fullWidth
                required
                multiline
                minRows="4"
                variant="filled"
                type="text"
                label="Mensaje"
                name="message"
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2", border: '1px solid whitesmoke', margin: '5px 0'}}
                inputProps={{
                  style:{ fontFamily: "Red Hat Display", textTransform: "uppercase", color: "white"}
                }}
                InputLabelProps={{
                    style: { color: '#fff', fontFamily: "Red Hat Display" },
                  }}
              />
                <FormButton type='submit'>ENVIAR</FormButton>
            </SubmitForm>   
        )}
            
            </Formik>
            </ColumnForm>
        </Form>
    </Section>
    </>
  )
}

export default Footer

const Frame = styled.iframe`
    width: 416px;
    height: 320px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px){
        width: 350px;
        height: 250px;
    }
`;

const SubmitForm = styled.form`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    @media screen and (max-width: 768px){
        padding-left: 17.5px;
    }
`;

const initialValues = {
  userrname: "",
  phone: "",
  mail: "",
  asunto: "",
  message: "",
};

const Section = styled.div`
    width: 100vw;
    height: 105vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(to bottom, #0b0272, #05076b, #010c63, #010e5b, #021053, #03104a, #051041, #080f38, #0b0c2c, #0a0820, #050415, #000002);
    @media screen and (max-width: 768px){
        height: 1000px;
    }
`;


const Title = styled.div`
    width: 100%;
    height: 20vh;
    display: grid;
    place-items: center;
    font-size: 48px;
    color: white;
    font-family: "Red Hat Display";
    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 40px;
        height: 150px;
    }
`;

const Form = styled.div`
    width: 95%;
    height: 75vh;
    border: 1px solid white;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 840px;
    }
`;

const Column = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    //padding-top: 50px;
    //padding-left: 50px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 40%;
        padding-top: 10px;
        //padding-left: 10px;
    }
`;

const ColumnForm = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    @media screen and (max-width: 768px){
        width: 95%;
        height: 60%;
    }
`;

const Row = styled.div`
    width: 80%;
    height: 7.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //margin: 5px 0;
    @media screen and (max-width: 768px){
        height: 60px;
        width: 95%;
    }
`;

const Image = styled.div`
    width: 80%;
    height: 20vh;
    margin-top: 5px;
    display: grid;
    place-items: center;
    img{
        width: 90%;
        display: block;
        object-fit: cover;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        height: 100px;
        img{
            width: 80%;
            transform: translate(-10px, -10px);
        }
    }
`;

const Icon = styled.div`
    width: 10vh;
    height: 100%;
    display: grid;
    place-items: center;
    transform: translateX(-10px);
    @media screen and (max-width: 768px){
        width: 50px;
        margin-right: 10px;
    }
    
`;

const Text = styled.div`
    font-family: "Red Hat Display";
    font-size: 24px;
    color: white;
    display: flex;
    align-items: center;
    //margin-left: 5px;
    cursor: pointer;
    transform: translateX(-10px);
    a{
        color: white;
    }
    @media screen and (max-width: 768px){
        font-size: 20px;
        margin-left: 0px;
    }
`;