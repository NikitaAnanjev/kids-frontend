import React, {useEffect, useState} from "react"
import {db} from "../Auth/firebase"

const UserDashboard = () => {

    console.log("DATA FROM DB", db)


    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            // const cat = await db.collection("categories").get()
            const data = await db.collection("products").get()

            console.log("DATA FROM DB DATA", data)
           setProducts( data.docs.map(doc => doc.data()))
           // setProducts( cat.docs.map(doc => doc.data()))
            // const products = data.map(doc => doc.data())
        }
        fetchData();
        // console.log(fetchData())
    },[])

    return (
        <ul>
           User DashBoard: Need to redirect non-login users > Please FInd how


            {products.map(product => (
                <li>{product.title}</li>
            ) )}
        </ul>
    )

}
export default UserDashboard
