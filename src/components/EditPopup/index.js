import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import {
  Div,
  ButtonContainer,
  CloseButtonIcon1,
  ItemNameStylingFour,
  ItemNameStylingTwo,
  ItemNameStylingThree,
  InputLabelContainer,
  InputEditData,
  EditPopupSubContainer,
  CloseButtonIcon,
  ItemNameStylingOne,
  SubPopupContainerOne,
  SubmitButton,
  PopupContainerOne,
  AvocadoImageEdit,
  Input,
  MinusButtonIcon,
  PlusButtonIcon
} from './StyledComponents';

import { db } from '../../firestore';
import { doc, setDoc } from 'firebase/firestore';
import { RxCross2 } from 'react-icons/rx';

export default function EditPopup({ data }) {
  const { productName, brand, price, quantity } = data;

  const [formData, setFormData] = useState({
    productName: productName,
    brand: brand,
    price: price,
    quantity: quantity,
    message: '',
  });

  const increment = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity + 1,
    }));
  };

  const decrement = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity - 1,
    }));
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      price: parseFloat(price) || 0,
    }));
  };

  const handleQuantityChange = (event) => {
    const quantity = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      quantity: parseInt(quantity) || 0,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Create a reference to the Firestore document
      const docRef = doc(db, 'products', productName);
  
      // Update the Firestore document with the new data
      let message = '';
  
      if (price !== formData.price && quantity !== formData.quantity) {
        message = "Quantity and Price updated";
      } else if (price !== formData.price) {
        message = "Price updated";
      } else {
        message = "Quantity updated";
      }
  
      // Update the formData state with the new message
      await setFormData((prevData) => ({
        ...prevData,
        message: message
      }));
  
      // Update the Firestore document with the new data
      await setDoc(docRef, formData);
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };
  
  return (
    <Popup
      modal
      trigger={
        <button className="button">
          <ItemNameStylingOne className="icon-tick" style={{ marginLeft: '20px', fontWeight: 'bold' }}>
            Edit
          </ItemNameStylingOne>
        </button>
      }
    >
      {close => (
        <PopupContainerOne onSubmit={handleSubmit}>
          <SubPopupContainerOne>
            <CloseButtonIcon onClick={close}>
              <RxCross2 style={{ height: '20px', width: '20px' }} />
            </CloseButtonIcon>
            <ItemNameStylingOne disabled>{productName}</ItemNameStylingOne>
            <ItemNameStylingOne>{brand}</ItemNameStylingOne>
            <EditPopupSubContainer>
              <AvocadoImageEdit src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1698337608/Avocado_Hass_fulkt0.jpg" />
              <InputEditData>
                <InputLabelContainer>
                  <ItemNameStylingOne>{`Price (INR)`}</ItemNameStylingOne>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={handlePriceChange}
                  />
                </InputLabelContainer>
                <InputLabelContainer>
                  <ItemNameStylingOne>{`Quantity`}</ItemNameStylingOne>
                  <Div>
                    <MinusButtonIcon onClick={decrement}>-</MinusButtonIcon>
                    <Input
                      type="number"
                      value={formData.quantity}
                      onChange={handleQuantityChange}
                    />
                    <PlusButtonIcon onClick={increment}>+</PlusButtonIcon>
                  </Div>
                </InputLabelContainer>
                <InputLabelContainer>
                  <ItemNameStylingOne>{`Total`}</ItemNameStylingOne>
                  <Input
                    value={formData.price * formData.quantity}
                    readOnly
                  />
                </InputLabelContainer>
              </InputEditData>
            </EditPopupSubContainer>
            <ItemNameStylingTwo>Choose reason <ItemNameStylingThree>(Optional)</ItemNameStylingThree></ItemNameStylingTwo>
            <ItemNameStylingOne style={{margin:"10px"}}>
              <ItemNameStylingFour>Missing Product</ItemNameStylingFour>
              <ItemNameStylingFour>Quality is not the same</ItemNameStylingFour>
              <ItemNameStylingFour>Price is not the same</ItemNameStylingFour>
              <ItemNameStylingFour>Other</ItemNameStylingFour>
            </ItemNameStylingOne>
            <ButtonContainer>
              <CloseButtonIcon1 onClick={close}>
                Cancle
              </CloseButtonIcon1>
              <SubmitButton type="submit">
                Submit
              </SubmitButton>
            </ButtonContainer>
          </SubPopupContainerOne>
        </PopupContainerOne>
      )}
    </Popup>
  );
}
