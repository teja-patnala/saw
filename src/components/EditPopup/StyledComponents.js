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

export const AddItemButton = styled(Button)`
  background-color: blueviolet; /* Yellow background for the Proceed button */
  &:hover {
    background-color: #28a745; /* Change the background color on hover */
    cursor: pointer; /* Change the cursor to a pointer on hover */
  }
`;

export const SubmitButton = styled(Button)`
background-color: #28a745; /* Yellow background for the Proceed button */
&:hover {
  background-color: violet; /* Change the background color on hover */
  cursor: pointer; /* Change the cursor to a pointer on hover */
}
`
export const PopupContainerOne = styled.form`
height:100vh;
width:100vw;
background-color: rgba(0, 0, 0, 0.5);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const SubPopupContainerOne = styled.div`
height:40%;
width:50%;
background-color:white;
min-height:350px;
min-width:290px;
max-height:500px;
max-width:550px;
overflow:scroll;
padding:20px;
border-radius:20px;
`
export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 30%;
  min-width:70px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const ItemNameStylingOne = styled.h1`
  font-size: ${(props) => (props.disabled ? "17px" : "14px")}; // Conditional font-size
  margin: 0; // Set margin to 0
  font-weight: ${(props) => (props.disabled ? "700" : "600")}; // Conditional font-weight
  color: ${(props) => (props.disabled ? "black" : "#7f8274")};; // Set color
  @media screen and (max-width: 768px) {
    font-size:${(props) => (props.disabled ? "16px" : "13px")}; // Font size for screens with a width of 768px or less
  }
`;


export const CloseButtonIcon = styled.button`
border-width:0px;
background-color:transparent;
padding-bottom:4px;
margin-left:90%;
`
export const EditPopupSubContainer = styled.div`
display:flex;
width:100%;
flex-direction:row;
justify-content:space-between;
align-item:center;
`
export const AvocadoImageEdit = styled.img`
height:30%;
width:30%;
max-width:200px;
max-height:200px;
min-height:100px;
min-width:100px;
`
export const InputEditData = styled.div`
width:70%;
display:flex;
flex-direction:column;
align-items: center;
`
export const InputLabelContainer = styled.div`
width:70%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`
export const MinusButtonIcon = styled(CloseButtonIcon)`
background-color:lightgreen;
margin:0px;
paddin-bottom:0px;
border-radius:15px;
`
export const PlusButtonIcon = styled(CloseButtonIcon)`
background-color:lightgreen;
border-radius:15px;
margin-left:10px;
`
export const Div = styled.div`
display:flex;
width:0px;
padding-right:2px;
margin-right:15%;
flex-direction:row;
align-items:center;
justify-content:center;
`
export const ItemNameStylingTwo = styled(ItemNameStylingOne)`
font-weight:bold;
color:black;
font-size:14px;
`
export const ItemNameStylingThree = styled.span`
font-weight:normal;
color:grey;
font-size:13px;
`
export const ItemNameStylingFour = styled.span`
font-weight:500;
color:grey;
margin:10px;
font-size:13px;
`
export const CloseButtonIcon1 = styled.button`
background-color:transparent;
border-width:0px;
`
export const ButtonContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-left:70%;
`