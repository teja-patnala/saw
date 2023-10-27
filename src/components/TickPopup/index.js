import React from 'react';
import Popup from 'reactjs-popup';
import { CrossPara,SubCrossPara,SubPopupBox,SubPopupButtonBox,CloseButton,CrossPopupContainer,YesButton,NoButton } from './StyledComponents';
import {ImCross} from "react-icons/im"
import { db } from "../../firestore";
import { doc, updateDoc, getDoc } from 'firebase/firestore';
//brand,price,quantity,message

export default function CrossPopup ({data}){
  const {productName} = data

  async function setMessage(message) {
    try {
      const docRef = doc(db, "products", productName);

      // Fetch the document first
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // Update the specific field in the document
        await updateDoc(docRef, {
          message
        });
        console.log(`Message is updated: ${message}`);
      } else {
        console.log('Document does not exist.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const YesSubmission = ()=>{
    setMessage("Missing")
  }

  const NoSubmission = ()=>{
    setMessage("Missing--Urgent")
  }

  return (
    <Popup
      modal
      trigger={
        <button className="button"><ImCross className="icon-tick" style={{height:"12px",width:"12px"}}/></button>
      }
    >
      {close => (
        <CrossPopupContainer>
            <SubPopupBox>
                <CrossPara>Missing product</CrossPara>
                <SubCrossPara>{`${productName}`}</SubCrossPara>
                <SubPopupButtonBox>
                    <YesButton onClick={YesSubmission}>Yes</YesButton>
                    <NoButton onClick={NoSubmission}>No</NoButton>
                </SubPopupButtonBox>
                <CloseButton type="button" className="trigger-button" onClick={close}>Close</CloseButton>
            </SubPopupBox>
        </CrossPopupContainer>
      )}
    </Popup>
  );
};