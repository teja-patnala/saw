import styled from 'styled-components';


const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 8px;
  cursor: pointer;
  margin: 5px;
`;

export const CloseButton = styled(Button)`
  background-color: blueviolet; /* Yellow background for the Proceed button */
  &:hover {
    background-color: #28a745; /* Change the background color on hover */
    cursor: pointer; /* Change the cursor to a pointer on hover */
  }
`;
export const YesButton = styled(Button)`
  border-radius:4px;
  width:55px;
  background-color:#F0F0F0;
  border:1px solid black;
  color:black;
  &:hover {
    background-color: #28a745; /* Change the background color on hover */
    cursor: pointer; /* Change the cursor to a pointer on hover */
  }
`;

export const CrossPara = styled.p`
font-size:17px;
font-weight:700;
color:black;
text-align:start;
`
export const SubCrossPara = styled.p`
font-size:16px;
font-weight:500;
color:black;
text-align:center;
`

export const NoButton = styled(Button)`
border-radius:4px;
width:55px;
background-color:#F0F0F0;
border:1px solid black;
color:black;
  &:hover {
    background-color: #28a745; /* Change the background color on hover */
    cursor: pointer; /* Change the cursor to a pointer on hover */
  }
`;
export const CrossPopupContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
background-color:rgba(0, 0, 0, 0.5);
width:100vw;
height:100vh;
`;

export const SubPopupBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:40%;
height:45%;
background-color:white;
border-radius:15px;
min-height:150px;
min-width:200px;
`
export const SubPopupButtonBox = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:40%;
min-width:130px;
`
