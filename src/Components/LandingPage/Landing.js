import React, {useEffect} from 'react';
import styled from 'styled-components';
// import logo from './preeminentlogo.png'
import { FallingLines } from  'react-loader-spinner'
// import { SpinnerCircular } from 'spinners-react';
import LandingPage from './Land1/LandingPage'
import Land2 from './Land2/Land2'
import Land3 from './Land3/Land3'
import Land4 from './Land4/Land4'
import Land5 from './Land5/Land5'
import Land6 from './Land6/Land6'
import Land7 from './Land7/Land7'
import Land8 from './Land8/Land8'
import Land10 from './Land10/Land10'
import News from './News/News'
import Discover from './Discover/Discover'
import Assetcryp from './AssetCryp/Assetcryp'
import Land9 from './Land9/Land9'
// import EthScroll from './EthScroll'
import BitPage from './BitPage/BitPage';


const Landing = () => {

  const [loading, setLoading] = React.useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, [5000])
  });

  return (
    <div>
      {
        loading? <Div>
          {/* <Logo src={logo} alt="logo"/>   */}
          <H1>OKX EXCHANGE</H1>
          <FallingLines
      color="blue"
    width="100"
    visible={true}
  ariaLabel='falling-lines-loading'
/>
        {/* <SpinnerCircular size={45} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />  */}
        
       </Div> : <>
       {/* <EthScroll/> */}
      <LandingPage/>
      <Land2/>
      <Land3/>
      <Land4/>
      <Land5/>
      <Land7/>
      <Land8/>
      <BitPage/>
      <Discover/>
      <Assetcryp/>
      <Land6/>
      <Land10/>
      <News/>
      <Land9/>
       </>
      }
    </div>
  )
}

export default Landing;
const H1 = styled.div`
font-size: 40px;
font-weight: bold;
`
const Div = styled.div`
width: 100%;
height: 100vh;
position: fixed;
z-index: 100000;
background-color: #101C30;
/* background:linear-gradient(45deg, #015ec9,  #f14455); */
background-color: white;
top: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Logo = styled.img`
width: 30%;
height: 50%;
margin-top: 20px;

@media Screen and (max-width: 768px){
width: 70%;
height: 40%;
/* margin-left: 50px; */
margin-top: 0px;

}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
`;


