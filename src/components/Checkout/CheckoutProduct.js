import React from "react";
import {CheckProduct, CheckoutProductInfo, RemoveFromBasketBtn, ImgWrap} from "./checkoutStyles"
import {
    ProductPrice,
    ProductRating,
} from "../Product/productStyles";
import Star from "../../assets/svg/star.svg";
import Button from "@material-ui/core/Button";
import {useStateValue} from "../GlobalContext/StateProvider";


const CheckoutProduct = ({id, title, image, price, rating}) => {

    // console.log(" CHECKOUTproduct page single iten ",id, title, image, price, rating)
    const [
        {basket},
        dispatch
    ] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        })

    }
    return (

        <CheckProduct key={id}>
            <ImgWrap>
                 <img src={image} alt=""/>
            </ImgWrap>
            <CheckoutProductInfo>
                <p className="checkoutProductTitle">{title}</p>
                <ProductPrice>
                    <small>$</small>
                    <strong>{price}</strong>
                </ProductPrice>

                <ProductRating>
                    {Array(rating)
                        .fill()
                        .map((_,index) => (
                                <span  key={index}>
                         <img src={Star} alt=""/>
                       </span>
                            )
                        )
                    }
                </ProductRating>


                <RemoveFromBasketBtn>
                    <Button onClick={removeFromBasket} variant="contained">Remove Item</Button>
                    {/*<Button onClick={addToBasket} variant="contained">Add to Basket</Button>*/}
                </RemoveFromBasketBtn>
            </CheckoutProductInfo>
        </CheckProduct>
    )
}
export default CheckoutProduct