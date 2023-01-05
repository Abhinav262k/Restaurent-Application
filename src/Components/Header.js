
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'


function Header() {
  return (
    <div> 
         <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           FAMOUS - RESTAURANTS
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div> 
  )
}

export default Header