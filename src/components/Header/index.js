import {HeaderContainer,SubHeaderContainer} from "./StyledComponents"
import {TiShoppingCart} from "react-icons/ti"
import {BsChevronDown} from "react-icons/bs"
import "./index.css"
import {Link} from "react-router-dom"
export default function Header(){
    return(
        <HeaderContainer>
            <SubHeaderContainer>
                <Link className="heading-link">Reeco</Link>
                <Link className="link" to="/">Orders</Link>
                <Link className="link" to="/store">Store</Link>
                <Link className="link" to="/analytics">Analytics</Link>
            </SubHeaderContainer>
            <SubHeaderContainer>
                <TiShoppingCart className="cart-icon"/>
                <h5 className="user-name">Hello, Teja  <BsChevronDown/></h5>
            </SubHeaderContainer>
        </HeaderContainer>
    )
}