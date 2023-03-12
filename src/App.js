import React from 'react';
import './App.css';
import Container from './components/container';
import DiscountBar from './components/DiscountBar';
import Footer from './components/Footer';
import Link from './components/link/';
import Main from './components/Main';
import Navbar from './components/Navbar';


const links = [{link: "Sign in"},{link:"More"}];


function App() {
  return (
    <>
      <Navbar>
          {
            links.map((el,i) => (
              <Link key={`link-${i}`} link='#' text={el.link} />
            ))
          }
      </Navbar>
      <Main>
         <DiscountBar 
         condition='FREE SHIPPING: Physical textbook orders of $85+.'
         code='CHEGGFREESHIP'/>
         
         <Container>
            <h1>labas</h1>
            <h2>hy</h2>
         </Container>
           
         
      </Main>
      <Footer
          copy ='MP'
          years= '2023'
      /> 
    </>
  );
}

export default App;
