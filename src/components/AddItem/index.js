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

export default function AddItem({ itemData }) {
  const { productName, brand, price, quantity, message } = itemData;

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
        <SubItemData>
          <ItemNameStyling>{message}</ItemNameStyling>
        </SubItemData>
      </AddSubItemContainerOne>
      <AddSubItemContainerTwo>
        <button className="button">
          <TiTick className="icon-tick" style={{ height: "22px", width: "22px" }} />
        </button>
        <CrossPopup data={itemData} />
        <button className="button">
          <ItemNameStyling className="icon-tick" style={{ marginLeft: "20px", fontWeight: "bold" }}>
            Edit
          </ItemNameStyling>
        </button>
      </AddSubItemContainerTwo>
    </AddItemContainer>
  );
}
