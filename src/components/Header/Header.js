import React from 'react';
import {Logo} from "../../assets/svg/imageSvg";
import {
    Nav,
    LogoIcon,
    SearchBar,
    HeaderNav,
    HeaderOption,
    HeaderOptionBasket
} from "./headerStyles";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "../GlobalContext/StateProvider";
import {auth} from "../Auth/firebase";

const Header = () => {


    const [{basket, user}] = useStateValue()

    const login = () => {
        if (user) {
            auth.signOut()
        }
    }

    // const [{basket}, dispatch] = useStateValue()

    // console.log(" HEADER PAGE BASKET CONTENT", basket)
    return (
        <Nav>
            <Link to="/">
                <LogoIcon><Logo/></LogoIcon>
            </Link>

            <SearchBar>
                <input type="text"/>
                <SearchIcon className="searchIcon"/>
            </SearchBar>

            <HeaderNav>
                <Link to={!user && "/login"}>
                    <HeaderOption onClick={login}>
                        <span>Hello {user?.email}!</span>
                        <span>{user ? "Sign Out" : "Sign Is"}</span>
                    </HeaderOption>
                </Link>

                <Link to= "/dashboard" >
                {/*<Link to={user ? "/dashboard" : "/"}>*/}
                    <HeaderOption>
                        <span>User</span>
                        <span>Dashboard</span>
                    </HeaderOption>
                </Link>

                <Link to="/newproduct">
                    <HeaderOption>
                        <span>Your</span>
                        <span>Prime</span>
                    </HeaderOption>
                </Link>



                <Link to="/product/4">
                    <HeaderOption>
                        <span>Your</span>
                        <span>Prime</span>
                    </HeaderOption>
                </Link>

                <Link to="/checkout">
                    <HeaderOptionBasket>
                        <ShoppingBasketIcon/>
                        <span className="basket-count">{basket?.length}</span>
                    </HeaderOptionBasket>
                </Link>

            </HeaderNav>
        </Nav>
    )
}

export default Header;