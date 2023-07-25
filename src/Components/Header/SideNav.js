import React, {useEffect} from 'react';
import styled from 'styled-components';
// import {AiOutlineCloseSquare} from 'react-icons/bs';
import {Link} from 'react-router-dom';
// import LogoBg from './preeminentlogo.png';
import AOS from 'aos'
import 'aos/dist/aos.css'


const SideNav = ({setNav}) =>{

    useEffect(() =>{
        AOS.init({duration:1000})
      },[])
    return(
        <Container>
            <Wrapper>
            <Wrapp>
            {/* <Logo src={LogoBg} alt='logo'/> */}
            <H2>OKX EXCHANGE</H2>
        <Button data-aos="fade-left" onClick={()=>{
                setNav(false);
            }}  style={{border: "none", background: "none", width: 50,  color: "black"}}> X
            </Button>
            </Wrapp>
                <MidNav>
                    <Div>
                    <Span to='/login'  onClick={()=>{
                setNav(false);
            }}>Login</Span>
                    <Line></Line>
                    <Span to='/register'  onClick={()=>{
                setNav(false);
            }}>Sign Up</Span>
                    <Line></Line>
                    <Span to='/'  onClick={()=>{
                setNav(false);
            }}>Home</Span>
                    <Line></Line>
                    <Span to='/aboutus'  onClick={()=>{
                setNav(false);
            }}>About Us</Span>
                    <Line></Line>
                     <Span to='/investment' onClick={() =>{
                        setNav(false);
                    }}>Investment Plan</Span>
                    <Line></Line>
                    <Span to='/arbitage'  onClick={()=>{
                setNav(false);
            }}> Arbitrage </Span>
                    <Line></Line>
                    <Span to='/affiliate'  onClick={()=>{
                setNav(false);
            }}>Affiliate Program</Span>
                    <Line></Line>
                    <Span to='/support'  onClick={()=>{
                setNav(false);
            }}>Support</Span>
                    </Div>
                    {/* <Div>
                    <Span to='/policy'>Policy Privacy</Span>
                    <Line></Line>
                    <Span to='/faqs'>FAQ's </Span>
                    <Line></Line>
                    <Span to='https://mail.google.com/'>info@example.net </Span>
                    <Line></Line>
                    <Span to='/'>00000000</Span>
                    <Line></Line>
                    <Span to='/'>Call to Our Experts</Span>
                    </Div> */}
                </MidNav>
        </Wrapper>
        </Container>
    )
}
export default SideNav;

// const Logo = styled.img`
// width: 50%;
// margin-left: 10px;
// `;

const Div = styled.div`
/* background-color: blanchedalmond; */
display: flex;
flex-direction: column;
justify-content: center;
`;

const Line = styled.div`
width: 230px;
background-color: black;
height: 1px;
margin-bottom: 30px;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
  font-size: 30px;
  font-weight: bold;
  color: silver;
  cursor: pointer;
  

  :hover{
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

`;
const H2 = styled.div`
font-size: 25px;
 font-weight: bold;
 margin-left: 5px;
`
const Container = styled.div`
    width: 83%;
    height: 100vh;
    /* background-color: #05203D; */
    background-color: white;
    transition: all 2s;
    left: 0;
    right :0;
    z-index: 999999;
    ::after{
      transition: ease-in-out 1s;
    };
    padding: 7.6rem 0 9rem 0;
   
    @media Screen and (max-width: 425px){
    padding: 6rem 0 9rem 0;
    }
    @media Screen and (max-width: 375px){
    padding: 5rem 0 9rem 0;
    }
    @media Screen and (max-width: 320px){
    padding: 4rem 0 9rem 0;
    }
    /* margin-right: 300px; */
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapp =  styled.div`
width: 90%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 60px;


`;
const MidNav = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin-left: 20px
`;

const Span = styled(Link)`
            color: black;
            text-decoration: none;
            font-size: 20px;
            font-family: monospace;
            margin: 5px 0;
            padding-bottom: 2px;
      :hover{
            cursor: pointer;
            text-decoration: underline #003C58 1.5px;
        }
`;