import styled from "styled-components";

export const AddItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

export const AddSubItemContainerOne = styled.div`
  display: flex;
  flex-grow: 1; /* Allow it to occupy remaining space */
  overflow-x: scroll; /* Horizontal scroll if needed */
  flex-direction: row;
  justify-content: space-between;
`;

export const AddSubItemContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items:center;
  justify-content: flex-end;
  width: 18%;
`;

export const ItemName = styled.div`
width:30%;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
min-width:300px;
max-width:350px;
overFlow:hide;
margin-left:5px;
margin-right:5px;
text-align:center;
`
export const SubItemData = styled.h1`
width:30%;
min-width:100px;
margin-left:5px;
margin-right:5px;
max-width:130px;
text-align:start;
`
export const SubItemDataa = styled(SubItemData)`
background-color: #CEF6FD;

`
export const ItemNameStyling = styled.h1`
font-size:14px;
margin:0px;
font-weight:600;
color:#7f8274;
@media screen and (max-width:768px){
  font-size:13px;
}`

export const ItemImage = styled.img`
height:35px;
width:35px;
margin-left:10px;
margin-right:10px;
`

export const ItemData = styled.div`
width:30%;
min-width:100px;
margin-left:5px;
margin-right:5px;
max-width:130px;
text-align:start;
`