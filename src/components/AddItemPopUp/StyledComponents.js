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
export const PopupContainer = styled.div`
height:100vh;
width:100vw;
background-color: rgba(0, 0, 0, 0.5);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const SubPopupContainer = styled.div`
height:40%;
width:50%;
background-color:white;
min-height:300px;
min-width:270px;
max-height:450px;
max-width:500px;
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
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 10px;
`;