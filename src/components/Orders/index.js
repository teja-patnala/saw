import {AllSubUserOderedItems,OrdersDetailsContainerOfSupplierr,TablecolumnTwo,TableColumnOn1,OrdersContainer,AllUserOderedItems,AddItemContainer,SearchBox,InputContainer,SearchBoxContainer,SupplierDataContainer,SupplierDatah1,SupplierDatap1,VerticalLine,OrdersDetailsContainerOfSupplier,BackButton,AprooveButton,OrderDetailsRow,OrdersHeading,OrdersDetailsContainer} from "./StyledComponents";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import AddItemPopup from "../AddItemPopUp";
import {useEffect,useState } from "react";
import {CiSearch} from "react-icons/ci"
import {BsPrinter} from "react-icons/bs"
import {GiMilkCarton,GiFoodChain,GiKitchenKnives,GiGoat} from "react-icons/gi"
import AddItem from "../AddItem"
import "./index.css"
import { db } from "../../firestore";
import { collection, query,onSnapshot} from 'firebase/firestore'; // Import Firestore components


export default function Orders(){
    const [allItemsData, setAllItemsData] = useState([])
    const [search,setSearch] = useState("")
    const [allFilteredData, setAllFilteredData] = useState([])


    useEffect(() => {
        // Set up a real-time listener for changes in the Firestore collection
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const productsArray = [];
          snapshot.forEach((doc) => {
            productsArray.push({ id: doc.id, ...doc.data() });
          });
          setAllItemsData(productsArray);
        });
    
        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      }, []);
    
      useEffect(() => {
        const filteredData = allItemsData.filter((item) =>
          item.productName.toLowerCase().includes(search.toLowerCase())
        );
        setAllFilteredData(filteredData);
      }, [search, allItemsData]);

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
                    <SupplierDatap1>Shipping date</SupplierDatap1>
                    <SupplierDatah1>{new Date().toDateString()}</SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Total</SupplierDatap1>
                    <SupplierDatah1>INR 15,00,000</SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Category</SupplierDatap1>
                    <SupplierDatah1><GiFoodChain className="ac-icon"/><GiGoat className="ac-icon"/><GiKitchenKnives className="ac-icon"/><GiMilkCarton className="ac-icon"/></SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Department</SupplierDatap1>
                    <SupplierDatah1>300-444-678</SupplierDatah1>
                </SupplierDataContainer>
                <VerticalLine/>
                <SupplierDataContainer>
                    <SupplierDatap1>Status</SupplierDatap1>
                    <SupplierDatah1>Awaiting your approvel</SupplierDatah1>
                </SupplierDataContainer>
            </OrdersDetailsContainerOfSupplier>
            <OrdersDetailsContainerOfSupplierr disabled>
                <SearchBoxContainer>
                    <SearchBox>
                        <InputContainer onChange={(e)=>setSearch(e.target.value)}/>
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
                        <TablecolumnTwo>Price (INR)</TablecolumnTwo>
                        <TablecolumnTwo>Quantity (Kg)</TablecolumnTwo>
                        <TablecolumnTwo>Total</TablecolumnTwo> 
                        <TablecolumnTwo>Status</TablecolumnTwo>
                    </AllSubUserOderedItems>
                </AllUserOderedItems>
                {allFilteredData && allFilteredData.map(itemData=><AddItem key={itemData.productName} itemData = {itemData}/>)}
            </OrdersDetailsContainerOfSupplierr>
        </OrdersContainer>
    )
}