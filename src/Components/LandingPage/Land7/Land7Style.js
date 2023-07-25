import styled from 'styled-components';
import bg from '../../../Assets/insurance.png'
import bgleft from '../../../Assets/get-insurance.png'

export const Container = styled.div`
background-image: url(${bg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
/* background-color: #2A203B; */
height: auto;



`;

export const Wrapper = styled.div`
/* background-color: #2A203B; */
background-color: #fff;
height: 100%;
width: 100%;
opacity: 70%;
display: flex;
justify-content: center;
align-items: center;

`;

export const Wrap = styled.div`
width: 80%;
height: 80%;
display: flex;
justify-content: space-between;
@media Screen and  (max-width: 768px){
    flex-direction: column;
    width: 90%;
    height: 100%;
    /* align-items: center; */
}
`;
export const Left = styled.div`
width: 45%;
background-image: url(${bgleft});
background-repeat: no-repeat;
background-position: left;
background-size: contain;
height: initial;

@media Screen and (max-width: 768px){
    display: none;
}

`;
export const Right = styled.div`
/* background-color: red; */
width: 55%;
display :flex;
flex-direction: column;

p{
    font-size: 17px;
    font-weight: bold;
    color: black;
}

@media Screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    height: auto;
}


`;
export const Youtube = styled.img`
background-color: red;
width: 100%;
height: inherit;

`;
export const Trade = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-between;
color: black;

:hover{
    width: 33%;
    cursor: pointer;
    transition: all 2s;
}
@media Screen and (max-width: 768px){
    width: 70%;
}
`;
export const Img = styled.img`

`;
export const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: black;
margin-bottom: 40px;
`;
export const Frame = styled.div`
width: 95%;
height: auto;
`;
