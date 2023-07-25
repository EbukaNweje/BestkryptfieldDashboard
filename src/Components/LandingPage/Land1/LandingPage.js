import React, {useEffect, useState} from 'react';
import {
  Container, Wrapper, Wrap, Rec, H2, H5, Button,
} from './LandingStyle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from './land.json'




const LandingPage = () => {

  const [move, setMove] = useState(false);

  useEffect(()=>{
    setInterval(() =>{
      setMove((el) => el +1)
    }, 8000)
    AOS.init({duration:2000})
}, []);

  return (
    <Container>
        <Wrapper>
            <Wrap>
              <Rec></Rec>
             <H2 data-aos="fade-down">{data[move % data.length].text} <br/>
              </H2>
              <H5> Get started with the easiest most secure platform to invest, and earn cryptocurrencies.
              </H5>
              <Button to='/register'>Let's get started</Button>
            </Wrap>
        </Wrapper>
    </Container>
  )
};

export default LandingPage;


