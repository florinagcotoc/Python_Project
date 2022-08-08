import React from 'react'
import products from '../products'
import {Row,Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Category from '../components/Categories'
import Carousel from 'react-bootstrap/Carousel'
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import "../index.css"

function HomeScreen() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <StyleRoot>
            <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
                '@media (max-width: 1200px)': {
                width: '900px',
                height: '500px'
                },
                '@media (min-width: 2500px)': {
                width: '2500px',
                height: '650px'
                }
            }}
            >
            <img src='images/slider-photo3.jpg' alt='Copacul asimetric'/>
            <img src='images/copacel-inima.jpg' alt='Copacul indragostitilor'/>
            <img src='images/slider-photo2.jpg' alt='Copacul iarna' />
            <img src='images/Mama-natura.jpg' alt='Doamna natura'/>
            <img src='images/tablou-rotund.jpg' alt='Ceasul verde'/>
            <img src='images/slider-photo5.jpg' alt='Copacul verde'/>
            <img src='images/copacel-colorat.jpg' alt='Copacul colorat'/>

            </Coverflow>
        </StyleRoot>
        <br/>
        <br/>
        <p className='title-homepage'>
                        <b><i>Bine ati venit in gradina Art Deco pARADis!</i></b>
        </p>
        <br/>
        <Row>
            <Col>
                <Row>
                    <div className='column-homepage-text'>
                        <p><i>
                            🌳Adu natura în mijlocul căminului sau a biroului tău fară costuri alocate întreținerii cu un decor realizat din licheni stabilizați.<br/>
                            🌳Decoratiunile de interior cu licheni stabilizati sunt pufoase si 100%  naturale. Plantele stabilizate sunt plante naturale, supuse unui proces ecologic de stabilizare care consta in inlocuirea sevei naturale cu nutrienti 100% biodegradabili.<br/>
                            🌳Pe lângă un design verde, natural, lichenii decorativi prezinta numeroase avantaje: <br/>
                            {/* &emsp;🌿Mușchii purifică aerul prin îndepartarea alergenilor precum praful, menținând aerul proaspăt, cu un miros specific de pădure.<br/>
                            &emsp;🌿Lichenii stabilizati mențin nivelul de umiditate al incăperii, iar astfel pielea nu ajunge să aibă un aspect uscat. <br/>
                            &emsp;🌿Mușchii și lichenii stabilizați absorb dioxid de carbon și elimină oxigen în aer. <br/>
                            💚 Daca te-am convins, poti vizualiza cateogoriile de mai jos, iar in cazul in care dimensiunile si culorile nu se potivesc nevoilor tale, se poate realiza si pe comanda printr-un mesaj!<br/>
                            💚 Primeste natura in casa ta! */}
                        </i></p>
                    </div>
                </Row>
                <Row>
                    <div className='column-homepage-text'>
                        <p><i>  
                            &emsp;🌿Mușchii purifică aerul prin îndepartarea alergenilor precum praful, menținând aerul proaspăt, cu un miros specific de pădure.<br/>
                            &emsp;🌿Lichenii stabilizati mențin nivelul de umiditate al incăperii, iar astfel pielea nu ajunge să aibă un aspect uscat. <br/>
                            &emsp;🌿Mușchii și lichenii stabilizați absorb dioxid de carbon și elimină oxigen în aer. <br/>    
                        </i></p>
                    </div>
                </Row>
            </Col>

            <Col>
                <Image src='images/profile-homepage.png' width='450' height='430' alt='Profile' fluid/>
            </Col>

            <Col>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row><br/></Row>
                <Row>
                    <div className='column-homepage-text'>
                        <p><i>
                            🌳Procesul de stabilizare este unul simplu, prin înlocuirea apei cu un amestesc ecologic de apa și glicerina. Astfel se obține o plantă care nu mai necesită lumină si apă.<br/>
                             acesta isi mentin forma, culoarea si prospetimea ca in momentul culegerii, pe o perioada de mai multi ani fara nici un fel întreținere, dacă sunt amplasați în interior, în spatii cu umiditate mai mare de 40%, feriți de o sursă directă de căldură și de raze UV.<br/>
                        </i></p>
                    </div>
                </Row>
                <Row>
                    <div className='column-homepage-text'>
                        <p><i>
                            💚 Daca te-am convins, poti vizualiza cateogoriile de mai jos, iar in cazul in care dimensiunile si culorile nu se potivesc nevoilor tale, se poate realiza si pe comanda printr-un mesaj!<br/>
                            💚 Primeste natura in casa ta!
                        </i></p>
                    </div>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default HomeScreen
