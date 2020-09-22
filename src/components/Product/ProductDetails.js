import React, {useEffect, useState} from "react"
import {db} from "../Auth/firebase";

const ProductDetails = (props) => {
    console.log("single PAGE PROOPS",props.match.params.id)

    const [product, setProduct] = useState([])

    const itemId = props.match.params.id



    return (
        <>
            <p>{itemId}</p>
        </>
    )

}
export default ProductDetails
