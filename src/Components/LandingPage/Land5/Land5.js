import React, {useEffect} from 'react';
import {Container, Wrapper, TopDiv, BottomDiv,
    Left, Right, Trade, Img, H1, P
} from './Land5Style';
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import PackageCard from './PackageCard';
import AOS from 'aos'
import 'aos/dist/aos.css';
// import Slides from '../EthScroll'


const Land5 = () =>{

    useEffect(() =>{
        AOS.init({duration:1000})
      },[]);

    return(
        <Container>
            <Wrapper>
            {/* <Slides/> */}
                <TopDiv>
                    <Left>
                    <Trade data-aos="fade-down">
                     <Img src={arr} alt='arr left'/>
                     <h4 style={{color: "black"}}>OUR PACKAGE</h4>
                     <Img src={arr2} alt='arr right'/>
                    </Trade>
                     <H1 data-aos="fade-down">Investing Now<br/> Available to everyone.</H1>
                    </Left>
                    <Right>
                        <P data-aos="fade-down">Select any of our packages to start your journey of investment and <br/>enjoy huge benefit of trading while you sleep</P>
                    </Right>
                </TopDiv>
                <BottomDiv data-aos="fade-down">
                    <PackageCard pr="#C28138" coll="#C28138" price='$3,000 - $9,999' title='Bronze Plan' a='20+ assets/product' b='24/7 support' c='Risk Management' d='Free Signals' e="Unlimited Support"/>
                    <PackageCard pr="#838383" coll="#838383" price='$10,000 - $29,999' title='Silver Plan' a='50+ assets/product'  b='24/7 support' c='Risk Management' d='Free Signals' e="Unlimited Support"/>
                    <PackageCard pr="#E7B24D" coll="#E7B24D"  price='$30,000 - $99,999' title='Gold Plan' a='100+ assets/product'  b='24/7 support' c='Risk Management' d='Free Signals' e="Unlimited Support"/>
                    <PackageCard pr="#1C2534" coll="#1C2534"  price='$100,000 - $1,000,000' title='Diamond Plan' a='200+ assets/product'  b='24/7 support' c='Risk Management' d='Free Signals' e="Unlimited Support"/>
                    {/* <PackageCard pr="#43443F" coll="#43443F" price='$150,000 - $1,000,000' title='VIP Platinum' a='500+ assets/product'  b='24/7 support' c='Risk Management' d='Free Signals' e="Unlimited Support"/> */}
                </BottomDiv>
            </Wrapper>
        </Container>
    )
};

export default Land5;