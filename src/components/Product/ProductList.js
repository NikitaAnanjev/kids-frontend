import React, {useEffect, useState} from "react"
import {db} from "../Auth/firebase"
import {HomePageWrapper, HomeRow} from "../HomePage/homePageStyles";
import Product from "../Product/Product";

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            // const cat = await db.collection("categories").get()
            const data = await db.collection("products").get()

            setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})))
            // setProducts( data.docs.map(doc => doc.data()))


        }
        fetchData();

    }, [])

    return (

        <HomeRow>

            { products && products.map(product => (

                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41TEawIMRfL._AA130_.jpg"
                />
            ))}

        </HomeRow>
    )

}
export default ProductList
