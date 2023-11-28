import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center; /* Corrected "align-item" to "align-items" */
  justify-content: space-between;
  
  @media screen and (max-width: 768px) { /* Corrected "screen (max-width:768px)" to "screen and (max-width: 768px)" */
    flex-direction: column;
  }
`;

export const SubHeaderContainer = styled.div`
  width: 40%;
  max-width: 300px;
  padding-top: 1%;
  padding-left:10%;
  min-padding-left:20px;
  padding-right:10%;
  min-padding-right:20px;
  display: flex;
  flex-direction: row;
  align-items: center; /* Corrected "align-item" to "align-items" */
  justify-content: space-between;
  
  @media screen and (max-width: 768px) { /* Corrected "screen (max-width:768px)" to "screen and (max-width: 768px)" */
    width: 100%;
    padding-left:10%;
    padding-right:10%;
  }
`;
