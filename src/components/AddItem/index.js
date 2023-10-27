import React from "react";
import "./index.css";
import {
  AddItemContainer,
  AddSubItemContainerOne,
  AddSubItemContainerTwo,
  ItemImage,
  ItemNameStyling,
  ItemName,
  SubItemData,
} from "./StyledComponents";
import { TiTick } from "react-icons/ti";
import CrossPopup from "../CrossPopup";
import { db } from "../../firestore";
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import EditPopup from "../EditPopup";

export default function AddItem({ itemData }){
  const { productName, brand, price, quantity,message} = itemData;

  async function approveButton() {
    try {
      const docRef = doc(db, "products", productName);

      // Fetch the document first
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // Update the specific field in the document
        await updateDoc(docRef, {
          message:"Approve"
        });
        console.log(`Message is updated: ${message}`);
      } else {
        console.log('Document does not exist.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  let messageStyling;

  switch (message) {
    case "Missing":
      messageStyling = "green";
      break;
    case "Missing--Urgent":
      messageStyling = "red";
      break;
    case "Approve":
      messageStyling = "blueviolet";
      break;
    default:
      messageStyling = "orange";
  }
  

  return (
    <AddItemContainer>
      <AddSubItemContainerOne>
        <ItemName>
          <ItemImage src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1698337608/Avocado_Hass_fulkt0.jpg" />
          <ItemNameStyling>{productName}</ItemNameStyling>
        </ItemName>
        <SubItemData>
          <ItemNameStyling>{brand}</ItemNameStyling>
        </SubItemData>
        <SubItemData>
          <ItemNameStyling>{price}</ItemNameStyling>
        </SubItemData>
        <SubItemData>
          <ItemNameStyling>{quantity}</ItemNameStyling>
        </SubItemData>
        <SubItemData>
          <ItemNameStyling>{`${price}*${quantity}=${price * quantity}`}</ItemNameStyling>
        </SubItemData>
        <SubItemData className="message-div-one" style={{backgroundColor:`${messageStyling}`}}>
          <ItemNameStyling style={{color:"black"}} >{message}</ItemNameStyling>
        </SubItemData>
      </AddSubItemContainerOne>
      <AddSubItemContainerTwo>
        <button onClick = {approveButton} className="button">
          <TiTick className="icon-tick" style={{ height: "22px", width: "22px" }} />
        </button>
        <CrossPopup data={itemData} />
        <EditPopup data={itemData}/>
      </AddSubItemContainerTwo>
    </AddItemContainer>
  );
}
