
import React from 'react';
import Popup from 'reactjs-popup';
import {useState} from "react"
//import 'reactjs-popup/dist/index.css';
import {AddItemButton,InputLabel,Input,SubPopupContainer,SubmitButton,PopupContainer} from "./StyledComponents"
import {db} from "../../firestore"
import { doc, setDoc } from 'firebase/firestore'; 


export default function AddItemPopup (){
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    price: '',
    quantity: '',
    message:"",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the form data here, e.g., send it to an API
    console.log(formData);
    (async function fetchData(){
      try {
        // Add the form data to Firestore
        const docRef = doc(db,"products",formData.productName)
        await setDoc(docRef, formData);
        // Clear the form after submission
        setFormData({
          productName: '',
          brand: '',
          price: '',
          quantity: '',
        });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    })()
  };

  return (
    <Popup
      modal
      trigger={
        <AddItemButton type="button" className="trigger-button">
          Add Item
        </AddItemButton>
      }
    >
      {close => (
        <PopupContainer>
          <SubPopupContainer>
            <form onSubmit={handleSubmit}>
              <InputLabel>
                Product Name:
                <Input
                  required
                  type="text"
                  name="productName"
                  placeholder="Enter product name"
                  value={formData.productName}
                  onChange={handleInputChange}
                />
              </InputLabel>
              <InputLabel>
                Brand:
                <Input
                  required
                  type="text"
                  name="brand"
                  placeholder="Enter brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                />
              </InputLabel>
              <InputLabel>
                Price:
                <Input
                  required
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </InputLabel>
              <InputLabel>
                Quantity:
                <Input
                  required
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </InputLabel>
              <SubmitButton type="submit">Submit</SubmitButton>
              <AddItemButton type="button" className="trigger-button" onClick={close}>
                Close
              </AddItemButton>
            </form>
            
          </SubPopupContainer>
        </PopupContainer>
      )}
    </Popup>
  );
};