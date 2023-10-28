import styled from "styled-components"

export const OrdersContainer = styled.div`
width:100%;
display: flex;
flex-direction:column;
align-items: center;
`

export const OrdersHeading = styled.p`
  text-decoration: ${props => (props.disabled ? "underline" : "none")};
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  color: black;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  @media screen and (max-width:768px){
    font-size:18px
  }
`;

export const OrdersDetailsContainer = styled.div`
  width:${props=>(props.disabled?"80%":"100%")};
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  margin-bottom:1%;
`;
export const OrderDetailsRow = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:${props=>(props.disabled ? "space-between":"flex-start")};
padding-left:10%;
padding-right:10%;
@media screen and (max-width:768px){
  flex-direction:${props=>(props.disabled ? "column":"row")};
}
`
export const InputContainer = styled.input`
  width: 100%; /* Change this to 100% to fill the container */
  max-width: 220px;
  min-width: 200px;
  border: none;
  outline: none;
`;

export const SearchBox = styled.div`
  width: 100%; /* Change this to 100% to fill the container */
  max-width: 300px;
  padding:5px;
  border: 1px solid black; /* Correct the order of '2px solid black' */
  border-radius: 20px;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


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


export const BackButton = styled(Button)`
  background-color: #28a745; /* Green background for the Submit button */
`;

export const AprooveButton = styled(Button)`
  background-color: blueviolet; /* Yellow background for the Proceed button */
`;

export const OrdersDetailsContainerOfSupplier = styled(OrdersDetailsContainer)`
padding:10px;
padding-bottom:0px;
border-radius:10px;
display:flex;
flex-direction:row;
overflow: scroll;
`
export const OrdersDetailsContainerOfSupplierr = styled(OrdersDetailsContainer)`
padding:10px;
padding-bottom:0px;
border-radius:10px;
display:flex;
flex-direction:column;
overflow: scroll;
margin-bottom:0px;
`

export const VerticalLine = styled.div`
  width: 2px; /* Adjust the width as needed */
  height: 100%; /* Occupy the full height of the parent container */
  background-color: brown; /* Set the color to brown */
`;

export const SupplierDatap1 = styled(OrdersHeading)`
font-size:14px;
font-weight:bold;
color:#7f8274;
margin:0px;
@media screen and (max-width:768px){
  font-size:12px;
}
`
export const SupplierDatah1 = styled(OrdersHeading)`
font-size:18px;
margin:0px;
font-weight:bold;
color:black;
@media screen and (max-width:768px){
  font-size:15px;
}
`
export const SupplierDataContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
width:27%;
margin-left:10px;
max-width:170px;
padding:0px;
overflow:hide;
`
export const AddItemContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
width:20%;
min-width:200px;
max-width:300px;
transition: background-color 0.3s; /* Add a transition for smoother hover effect */
`
export const AllUserOderedItems = styled(OrdersDetailsContainerOfSupplier)`
width:98%;
bottom-left-border-radius:0px;
bottom-right-border-radius:0px;
display:flex;
margin-top:10px;
flex-direction:row;
align-items:center;
justify-content:space-betwween;
box-shadow:none;
border:1px solid black;
border-radius: 20px 20px 0 0;
;
`
export const AllSubUserOderedItems = styled.div`
width:80%;
overflow:scroll;
display:flex;
flex-direction:row;
align-items:center;
padding-bottom:0px;
margin-bottom:0px;
`
export const TableColumnOn1 = styled(SupplierDatap1)`
width:30%;
min-width:300px;
max-width:350px;
overFlow:hide;
margin-left:5px;
margin-right:5px;
text-align:center;
`
export const TablecolumnTwo = styled(SupplierDatap1)`
width:30%;
min-width:100px;
margin-left:5px;
margin-right:5px;
max-width:130px;
text-align:start;
`