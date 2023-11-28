import {AllSubUserOderedItems,OrdersDetailsContainerOfSupplierr,TablecolumnTwo,TableColumnOn1,OrdersContainer,AllUserOderedItems,AddItemContainer,SearchBox,InputContainer,SearchBoxContainer,SupplierDataContainer,SupplierDatah1,SupplierDatap1,VerticalLine,OrdersDetailsContainerOfSupplier,BackButton,AprooveButton,OrderDetailsRow,OrdersHeading,OrdersDetailsContainer} from "./StyledComponents";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import AddItemPopup from "../AddItemPopUp";
import {useEffect,useState } from "react";
import {CiSearch} from "react-icons/ci"
import {BsPrinter} from "react-icons/bs"
import AddItem from "../AddItem"
import "./index.css"
import { db } from "../../firestore";
import { collection, query, getDocs} from 'firebase/firestore'; // Import Firestore components


export default function Orders(){
    const [allItemsData, setAllItemsData] = useState([])
    

    useEffect(()=>{
        
        (async  function fetchData(){
            try{
                console.log("hii",allItemsData)
                const q = query(collection(db,"products"));
                const querySnapshot = await getDocs(q);
                const productsArray = [];
                querySnapshot.forEach((doc)=>{
                    productsArray.push({id:doc.id,...doc.data()});
                })
                setAllItemsData(productsArray)
            }catch(error){
                console.log(error)
            }
        })()
    })

    return(
        <OrdersContainer>
            <OrdersDetailsContainer>
               <OrderDetailsRow>
                    <OrdersHeading >Orders</OrdersHeading>
                    <MdOutlineKeyboardArrowRight className="icon-styling"/>
                    <OrdersHeading disabled>Order 3245RT5R5</OrdersHeading>
               </OrderDetailsRow>
               <OrderDetailsRow disabled>
                    <OrdersHeading fontSize = "22px" fontWeight = "bold"> Order 3245RT5R5</OrdersHeading>
                    <div>
                        <BackButton>Back</BackButton>
                        <AprooveButton>Approve order</AprooveButton>
                    </div>
               </OrderDetailsRow>
            </OrdersDetailsContainer>
            <OrdersDetailsContainerOfSupplier disabled>
                <SupplierDataContainer>
                    <SupplierDatap1>Supplier</SupplierDatap1>
                    <SupplierDatah1>East coast fruits & vegetables</SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Supplier</SupplierDatap1>
                    <SupplierDatah1>East coast fruits & vegetables</SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Supplier</SupplierDatap1>
                    <SupplierDatah1>East coast fruits & vegetables</SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Supplier</SupplierDatap1>
                    <SupplierDatah1>East coast fruits & vegetables</SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Supplier</SupplierDatap1>
                    <SupplierDatah1>East coast fruits & vegetables</SupplierDatah1>
                </SupplierDataContainer>
            </OrdersDetailsContainerOfSupplier>
            <OrdersDetailsContainerOfSupplierr disabled>
                <SearchBoxContainer>
                    <SearchBox>
                        <InputContainer/>
                        <CiSearch className="icon-styling"/>
                    </SearchBox>
                    <AddItemContainer>
                        <AddItemPopup/>
                        <BsPrinter className="printer-icon"/>
                    </AddItemContainer>
                </SearchBoxContainer>
                <AllUserOderedItems>
                    <AllSubUserOderedItems>
                        <TableColumnOn1>Product name</TableColumnOn1>
                        <TablecolumnTwo>Brand</TablecolumnTwo>
                        <TablecolumnTwo>Price</TablecolumnTwo>
                        <TablecolumnTwo>Quantity</TablecolumnTwo>
                        <TablecolumnTwo>Total</TablecolumnTwo> 
                        <TablecolumnTwo>Status</TablecolumnTwo>
                    </AllSubUserOderedItems>
                </AllUserOderedItems>
                {allItemsData && allItemsData.map(itemData=><AddItem key={itemData.productName} itemData = {itemData}/>)}
            </OrdersDetailsContainerOfSupplierr>
        </OrdersContainer>
    )
}