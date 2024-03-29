import React from 'react' 
import { Container, Row, Col} from 'react-bootstrap'
import '../css/Footer.css'


function Footer() {
  return (
    <section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-9 col-sm-3 col-md-3">
					<h5>Despre noi </h5>
					<ul className="list-unstyled quick-links">
						<li>Art Deco pARADis aduce bucurie si verdeata in casa ta!
              <br/>
              Acest proiect a prins contur din dorinta de a amenaja incaperea
              <br/>
              cat mai natural!
            </li>
					</ul>
				</div>
				<div className="col-xs-9 col-sm-2 col-md-2">
					<h5>Informatii</h5>
					<ul className="list-unstyled quick-links">
            <li><a href="/modalitati-de-plata"><i className="fa fa-angle-double-right"></i>Modalitati de plata</a></li>
            <li><a href="/modalitati-de-livrare"><i className="fa fa-angle-double-right"></i>Modalitati de livrare</a></li>
            <li><a href="/politica-de-returnare"><i className="fa fa-angle-double-right"></i>Politica returnare</a></li>
            <li><a href="/termeni-si-conditii"><i className="fa fa-angle-double-right"></i>Termeni si conditii</a></li>
            <li><a href="/sugestii-si-reclamatii"><i className="fa fa-angle-double-right"></i>Sugestii si reclamatii</a></li>
					</ul>
				</div>
        <div className="col-xs-9 col-sm-2 col-md-2">
					<h5>Contact</h5>
					<ul className="list-unstyled quick-links">
            <li><a href="/program"><i className="fa fa-angle-double-right"></i>Program</a></li>
            <li><a href="/detaliile-companiei"><i className="fa fa-angle-double-right"></i>Detaliile companiei</a></li>
            <li className="list-inline-item"><a href="https://www.facebook.com/ArtDecopARADis"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://www.instagram.com/artdecoparadis/"><i className="fa fa-instagram"></i></a></li>
					</ul>
				</div>
        <div className="col-xs-9 col-sm-2 col-md-2">
					<h5>Ajutor</h5>
					<ul className="list-unstyled quick-links">
            <li><a href="/intrebari-frecvente"><i className="fa fa-angle-double-right"></i>Intrebari frecvente</a></li>
            <li><a href="/cum-cumpar"><i className="fa fa-angle-double-right"></i>Cum cumpar</a></li>
            <li><a href="/parerea-ta"><i className="fa fa-angle-double-right"></i>Parerea ta</a></li>
          </ul>
				</div>
				<div className="col-xs-9 col-sm-2 col-md-2">
					<h5>Confindentialitate</h5>
					<ul className="list-unstyled quick-links">
            <li><a href="/protectia-datelor"><i className="fa fa-angle-double-right"></i>Protectia datelor</a></li>
            <li><a href="http://www.anpc.gov.ro/"><i className="fa fa-angle-double-right"></i>ANPC</a></li>
					</ul>
				</div>
			</div>
			<Row>
        <Col className='text-center'>Copyright &copy; Art Deco pARADis</Col>
      </Row>
		</div>
	</section>
  )
}

export default Footer
