import React from 'react';
import {
    HomePageWrapper,
    Banner,
    HomeRow
} from "./homePageStyles";
import bannerImage from "../../assets/image/homepagebanner.jpg"
import Product from "../Product/Product";
import ProductList from "../Product/ProductList"
const HomePage = () => {
    return (
        <HomePageWrapper>
            <Banner>
                <img src={bannerImage} alt=""/>
            </Banner>

            <HomeRow>
                {/*<Product*/}
                {/*    id="1255663"*/}
                {/*    title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"*/}
                {/*    price={11.23}*/}
                {/*    rating={5}*/}
                {/*    image="https://images-na.ssl-images-amazon.com/images/I/41TEawIMRfL._AA130_.jpg"*/}
                {/*/>*/}
             <ProductList/>
            </HomeRow>

            {/*<HomeRow>*/}
            {/*    <Product*/}
            {/*        id="1235125125"*/}
            {/*        title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"*/}
            {/*        price={11.23}*/}
            {/*        rating={5}*/}
            {/*        image="https://images-na.ssl-images-amazon.com/images/I/41TEawIMRfL._AA130_.jpg"*/}
            {/*    />*/}
            {/*    <Product*/}
            {/*        id="123111"*/}
            {/*        title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"*/}
            {/*        price={11.23}*/}
            {/*        rating={5}*/}
            {/*        image="https://images-na.ssl-images-amazon.com/images/I/41TEawIMRfL._AA130_.jpg"*/}
            {/*    />*/}
            {/*    <Product*/}
            {/*        id="1234214"*/}
            {/*        title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"*/}
            {/*        price={11.23}*/}
            {/*        rating={5}*/}
            {/*        image="https://images-na.ssl-images-amazon.com/images/I/41TEawIMRfL._AA130_.jpg"*/}
            {/*    />*/}
            {/*</HomeRow>*/}
        </HomePageWrapper>
    );

}

export default HomePage;