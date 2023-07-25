import styled from "styled-components";


export const Container = styled.div`
background-color: #16233C;
/* background-color: #BF1E24; */
width: 100%;
min-height: max-content;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media Screen and (max-width: 768px){
flex-direction: column;
height: 110vh;
min-height: max-content;
justify-content: center;

    /* height: max-content; */
}
`;
export const Gif = styled.img`
`;
export const Gif2 = styled.div`
width: 25%;
margin: 0.3rem;

@media Screen and (max-width: 768px){
    display: none;
}
`;

export const Wrap = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
margin-left: 50px;
/* background: #000; */
height: 100%;
/* margin-top: 20px; */
top: 0px;


@media Screen and (max-width: 768px){
    flex-direction: column;
    width: 90%;
    margin-left: 0;
    height: max-content;
    /* background: #000; */
    /* justify-content: space-around; */

}
`;
export const Wrapper = styled.div`
width: 25%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0.1rem ;
/* height: max-content; */


@media Screen and (max-width: 768px){
    width: 60%;
    align-items: center;
    margin: 15px 0;
}
`;
export const Top = styled.div`
width :100%;
display: flex;
@media Screen and (max-width: 768px){
    align-items: center;
    justify-content: center;
}
`;

export const Left = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 30px;
@media Screen and (max-width: 768px){
    /* background-color: yellow; */
    width: 50%;
    /* align-items: center;
    justify-content: center; */
}
`;
export const Line = styled.div`
width: 30%;
height: 6px;
background-image: linear-gradient(to left, #fff,#2A203B);
border-radius: 1rem;
@media Screen and (max-width: 768px){
    width: 50%;
}
`;
export const H1 = styled.h1`
color: white;

@media Screen and (max-width: 768px){
    font-size: 15px;
}
`;
export const P = styled.div`
color: whitesmoke;
font-size: 27px;

@media Screen and (max-width: 768px){
    font-size: 15px;
}
`;