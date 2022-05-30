import React from 'react' 
import { Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
          <div className="row">
            <div className="col">
              <h6 className="block-title heading">Informatii</h6>
              <div className="col">
                <ul className="bullet">
                  <li><a href="/modalitati-de-plata">Modalitati de plata</a></li>
                  <li><a href="/modalitati-de-livrare">Modalitati de livrare</a></li>
                  <li><a href="/politica-de-returnare">Politica returnare</a></li>
                  <li><a href="/termeni-si-conditii">Termeni si conditii</a></li>
                  <li><a href="/sugestii-si-reclamatii">Sugestii si reclamatii</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h6 className="block-title heading">Contact</h6>
              <div className="col">
                <ul className="bullet">
                  <li><a href="/despre-noi">Despre noi</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/program">Program</a></li>
                  <li><a href="/detaliile-companiei">Detaliile companie</a>i</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h6 className="block-title heading">Ajutor</h6>
              <div className="col">
                <ul className="bullet">
                  <li><a href="/intrebari-frecvente">Intrebari frecvente</a></li>
                  <li><a href="/cum-cumpar">Cum cumpar</a></li>
                  <li><a href="/parerea-ta">Parerea ta</a></li>
                  <li><a href="/discounturi-personalizate">Discounturi personalizate</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h6 className="block-title heading">Confidentialitate</h6>
              <div className="block-content">
                <ul className="bullet">
                  <li><a href="protectia-datelor">Protectia datelor</a></li>
                  <li><a href="http://www.anpc.gov.ro/">ANPC</a></li>
                </ul>
              </div>
            </div>
          </div>
          </Row>
          <Row>
            <Col className='text-center py-3'>Copyright &copy; Art Deco pARADis</Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
