import React from 'react';
import Popup from 'reactjs-popup';
import { CrossPara,SubCrossPara,SubPopupBox,SubPopupButtonBox,CloseButton,CrossPopupContainer,YesButton,NoButton } from './StyledComponents';
import {ImCross} from "react-icons/im"
//brand,price,quantity,message
export default function CrossPopup ({data}){
  const {productName} = data
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
                <SubCrossPara>{``}</SubCrossPara>
                <SubPopupButtonBox>
                    <YesButton>Yes</YesButton>
                    <NoButton>No</NoButton>
                </SubPopupButtonBox>
                <CloseButton type="button" className="trigger-button" onClick={close}>Close</CloseButton>
            </SubPopupBox>
        </CrossPopupContainer>
      )}
    </Popup>
  );
};