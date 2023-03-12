import React from 'react';
import './App.css';
import Container from './components/container';
import Header from './components/Header';
import DiscountBar from './components/DiscountBar';
import Footer from './components/Footer';
import Link from './components/link/';
import Main from './components/Main';
import Navbar from './components/Navbar';
import InputField from './components/InputField';
import Button from './components/Button';


const links = [{link: "Sign in"},{link:"More"}];
const btns = [
  {
    btn:'SELL BOOKS',
    active: false,
    new: false  
  }, {
    btn:'EXPLORE CAREERS',
    active: false,
    new: true  
  },{
    btn:'24/7 STUDY HELP',
    active: true,
    new: false  
  },{
    btn:'RETURN BOOKS',
    active: false,
    new: false  
  },{
    btn:'FIND INTERSHIPS',
    active: false,
    new: false  
  },]

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
            <Header 
              text = 'the student hub'
              comments = 'Save up to 90% on textbooks *'/>
            <InputField 
              placeholder="Enter ISBN, title or author's name"
              btnText='Find book'/>
            <p>21 - day satisfaction guarantee, 14 days for eTextbooks</p>
          <div className='btn-bar'>
              {
                  btns.map((el,i) => {
                    return (
                      <Button 
                        name = {el.btn}
                      ><span>
                        {el.new ? 'New' : ''}
                      </span>
                        {el.btn}
                      </Button>
                    )
                  })
              }
          </div>
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
