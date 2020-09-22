import React from 'react';

import {Link} from "react-router-dom";
import {useStateValue} from "../GlobalContext/StateProvider";
import {
    ProductWrapper,
    ProductPrice,
    ProductRating,
    AddToBasketBtn,
    ProductInformation,
    ProductImage
} from './productStyles'
import Star from "../../assets/svg/star.svg"
import Button from "@material-ui/core/Button"


const Product = ({id, title, price, rating, image}) => {

    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () => {
    //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,

        })
    }

    return (
        <ProductWrapper key={id}>
            <ProductInformation>
                <Link to={`/product/${id}`}>
                <h4>{title}</h4>
                </Link>
                <ProductPrice>
                    <small>$</small>
                    <strong>{price}</strong>

                </ProductPrice>

                <ProductRating>
                    {Array(rating)
                        .fill()
                        .map((_,index) => (
                                <span key={index}>
                         <img src={Star} alt=""/>
                       </span>
                            )
                        )
                    }
                </ProductRating>
            </ProductInformation>

            <ProductImage>
                <img src={image} alt=""/>
            </ProductImage>

            <AddToBasketBtn>
                <Button onClick={addToBasket} variant="contained">Add to Basket</Button>
            </AddToBasketBtn>

        </ProductWrapper>
    );

}

export default Product;