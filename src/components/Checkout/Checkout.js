import React from "react";
import {CheckoutWrap, ImageWrap, CheckoutProductWrap} from "./checkoutStyles"
import {useStateValue} from "../GlobalContext/StateProvider";
import Image from "../../assets/image/homepagebanner.jpg"
import CheckoutProduct from "./CheckoutProduct"

const Checkout = () => {
    const [{basket}] = useStateValue()
    // console.log("ChECKOUT PAGE ",basket)
    return (
        <CheckoutWrap>
            <ImageWrap>
                <img src={Image} alt=""/>
            </ImageWrap>


            {basket?.length === 0 ? (
                <CheckoutProductWrap>
                    <h2> Basket is Empty</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum!</p>
                </CheckoutProductWrap>
            ) : (
                <CheckoutProductWrap>
                    <h2>Your Shopping Basket</h2>
                    {basket.map((item) => (

                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </CheckoutProductWrap>
            )}
        </CheckoutWrap>
    )
}

export default Checkout