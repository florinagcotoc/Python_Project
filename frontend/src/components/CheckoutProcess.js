import React from 'react'
import {Nav}    from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



function CheckoutProcess({step1, step2, step3, step4}) {
  return (
    <Nav  className="justify-content-center mb-4">
        <Nav.Item>
            {step1 ? (
                <LinkContainer to = '/login'>
                    <Nav.Link>1.Autentificare</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>1.Autentificare</Nav.Link>
            )}
            
        </Nav.Item>

        <Nav.Item>
            {step2 ? (
                <LinkContainer to = '/finalizare-comanda/livrare-si-plata/'>
                    <Nav.Link>2.Livrare si plata</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>2.Livrare si plata</Nav.Link>
            )}
            
        </Nav.Item>

        <Nav.Item>
            {step3 ? (
                <LinkContainer to = '/finalizare-comanda/modalitate-plata/'>
                    <Nav.Link>3.Sumar comanda</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>3.Sumar comanda</Nav.Link>
            )}
            
        </Nav.Item>

        <Nav.Item>
            {step4 ? (
                <LinkContainer to = '/finalizare-comanda/plasare-comanda/'>
                    <Nav.Link>4.Comanda plasata</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>4.Comanda plasata</Nav.Link>
            )}
            
        </Nav.Item>
    </Nav>
    )
}

export default CheckoutProcess
