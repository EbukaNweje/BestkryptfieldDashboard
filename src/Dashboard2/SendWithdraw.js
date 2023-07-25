import React, {useState} from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import bgbg from './bgbg.jpg';
import {AiFillHome} from 'react-icons/ai'
import Axios from "axios";




const SendWithdrawReq = () => {
    const [withdrawalWallet, setWithdrawalWallet] = useState("")
    const [email, setEmail] = useState("")
    const [yourusername, setUsername] = useState("")
    const [appealHeader, setAppeal] = useState("")
    const [bankName, setBankname] = useState("")
    const [accountNumber, setAcctnumber] = useState("")
    const [amounttoWithdraw, setAmount] = useState("")

    const data = {withdrawalWallet, email, yourusername, appealHeader, bankName, accountNumber, amounttoWithdraw}
    const url = "https://okx-backend.onrender.com/api/requestaccount"

    const sendReqest = (e) => {
        e.preventDefault()
        Axios.post(url, data)
        .then((res) => {
          console.log(res)
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: res.data.message,
         }) 
         setAcctnumber("")
         setAmount("")
         setAppeal("")
         setBankname("")
         setEmail("")
         setWithdrawalWallet("")
         setUsername("")
        // window.location.reload();
        }
        )
        .catch((error)=>{
          console.log(error)
        // setLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
       }) 
        console.log(error)
        //  reset(),
      })
        // console.log(data)
    }

  return (
    <Container>
          <Wrapper>
            <Hold2>
                <Div>
                    <H1>Withdrawal Method</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--Withdrawal</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Wrapper2>
            
        <Notice>
                <P style={{fontWeight:"bold"}}>*Use the form below to request Withdrawal</P>
                <PP>The form below is to make request for withdrawal., Be sure to enter correct details to avoid complications.</PP>
            </Notice>
            <Form onSubmit='submit'>
                <Top>
                    <InputHold>
                        <Title>Withdrawal Wallet</Title>
                        <Select required value={withdrawalWallet} onChange={(e) => {
                            setWithdrawalWallet(e.target.value)
                        }}>
                            <option value="Ethereum wallet">Ethereum Wallet</option>
                            <option value="Bitcoin Wallet">Bitcoin Wallet</option>
                            <option value="Tether Wallet">Tether Wallet</option>
                            <option value="Usdt Wallet">Usdt Wallet</option>
                        </Select>
                    </InputHold>
                    <InputHold>
                        <Title>User email</Title>
                        <Input required value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} type='email' placeholder='email'/>
                    </InputHold>
                </Top>
                <Middle>
                   <InputHold>
                        <Title>Your username</Title>
                        <Input required value={yourusername} onChange={(e) => {
                            setUsername(e.target.value)
                        }} placeholder='username'/>
                    </InputHold>
                    <InputHold>
                        <Title>Appeal header</Title>
                        <Input required value={appealHeader} onChange={(e) => {
                            setAppeal(e.target.value)
                        }} placeholder='About my order'/>
                    </InputHold>
                </Middle>
                <Middle>
                <InputHold>
                        <Title>Bank Name</Title>
                        <Input required value={bankName} onChange={(e) => {
                            setBankname(e.target.value)
                        }} placeholder='Bank Name'/>
                    </InputHold>
                <InputHold>
                        <Title>Account Number</Title>
                        <Input required value={accountNumber} onChange={(e) => {
                            setAcctnumber(e.target.value)
                        }} placeholder='Account Number'/>
                    </InputHold>
                </Middle>
                <InputHold>
                        <Title>Amount to Withdraw</Title>
                        <Input required value={amounttoWithdraw} onChange={(e) => {
                            setAmount(e.target.value)
                        }} placeholder='Amount to Withdraw'/>
                    </InputHold>
                    {/* <InputHold2>
                        <Title>Write your question</Title>
                        <Input2 placeholder='describe your question / issue'/>
                    </InputHold2> */}
                    <InputHold2>
                    <Button onClick={(e) => sendReqest(e)}>Send Request</Button>
                    </InputHold2>
            </Form>
        </Wrapper2>
    </Container>
  )
}

export default SendWithdrawReq;
const H1 = styled.div`
font-size: 45px;
    color: whitesmoke;
    font-weight: bold;
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 45px;
    color: whitesmoke;
    font-weight: bold;
}
`;
const Holder = styled.div`
display: block;
    width: auto;
    display: flex;
    align-items: center;

@media Screen and (max-width: 768px){
    display: block;
    width: auto;
    display: flex;
    align-items: center;
    /* justify-content: ; */
} 
`;
const Pagename = styled.div`
/* display: none; */
font-size: 25px;
color: #FF4D4D;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
@media Screen and (max-width: 768px){
font-size: 25px;
color: #FF4D4D;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
}
`;
const Icon = styled(AiFillHome)`
    color: #FF4D4D;
    width: 30px;
    height: 30px;

@media Screen and (max-width: 768px){
    /* display: block; */
    color: #FF4D4D;
    width: 30px;
    height: 30px;

}
`;

const Div = styled.div`
/* display: none; */
width: auto;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
@media Screen and (max-width: 768px){
    width: auto;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
}

`;
const Hold2 = styled.div`
/* display: none; */
width: 100%;
    height: 40vh;
    background-color: #0F192C;
    opacity: 75%;
    display: flex;
    align-items:center;
@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    background-color: #0F192C;
    opacity: 75%;
    display: flex;
    align-items:center;
}

`;
const Wrapper = styled.div`
 width: 100%;
    height: 40vh;
    /* min-height: max-content; */
    background-image: url(${bgbg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    /* min-height: max-content; */
    background-image: url(${bgbg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
`;

const Container = styled.div`
width: 100%;
height: auto;
background-color: #16243D;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 0;
`;
const Wrapper2 = styled.div`
width: 80%;
height: 100%;
padding: 100px 0;
display: flex;
flex-direction: column;
/* align-items: center; */

@media Screen and (max-width:768px){
    text-align: center;
    margin-top: -80px;
}
@media Screen and (max-width:425px){
    text-align: center;
}
`;
// const H1 = styled.div`
// font-size: 35px;
// font-weight: 500;
// color:  lightgrey;
// margin: 15px 0;

// @media Screen and (max-width: 768px){
//     font-size: 30px;
// }
// `;

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;

`;
const Notice = styled.div`
width: 96%;
border-radius: 0.7rem;
background-color: #101C30;
color: white;
padding: 40px 30px;
margin: 30px 0;


@media Screen and (max-width: 768px){
    width: 90%;
    margin-left: -15px;
}
`;
const P = styled.div`
font-size: 16px;
`;
const PP = styled.div`
`;
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const InputHold = styled.div`
width: 40%;
display: flex;
flex-direction: column;
margin: 10px 0;
@media Screen and (max-width: 768px){
    width: 100%;
    align-items: flex-start;
}

`;
const InputHold2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 10px 0;
@media Screen and (max-width: 768px){
    width: 100%;
    align-items: flex-start;
}

`;
const Title = styled.div`
font-size: 17px;
font-weight: 500;
color: lightgrey;
`;
const Select = styled.select`
padding: 15px 5px;
outline: none;
border-radius: 0.4rem;
border: 1px solid #3B314E;
color: grey;

@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}
`;
const Input = styled.input`
padding: 15px 0 15px 10px;
border-radius: 0.4rem;
outline: none;
border: 1px solid #3B314E;
color: grey;

@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}
`;

const Middle = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Button = styled.button`
color: white;
font-weight: bold;
/* background-color: #FF4D4D; */
background-color: #015FC9;
border-radius: 5px;
cursor: pointer;
padding: 0.5rem 2rem;
/* padding: 15px 0 15px 10px; */
text-align: center;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
border: none;
outline: none;
width: 40%;
height: 50px;
:hover{
    transition: all 400ms;
    cursor: pointer;
}

@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}
`;

