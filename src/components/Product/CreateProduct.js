import React, {useState} from "react"
import {auth, db} from "../Auth/firebase"
import {LoginForm} from "../Auth/loginStyles";
import Button from "@material-ui/core/Button";
import firebase from "firebase";

const CreateProduct = () => {
    const [title, setTitle] = useState('')

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [timer, setTimer] = useState('')


    const handleSubmit = (event) => {

        event.preventDefault()
        // login logic

        db.collection('products').add({

            title: title,
            description: description,
            price: price,
        })
            .then(
                (db) => console.log("Document Successfully written!")
            )
            .catch((e) => alert(e.message))


        console.log(price, description, title)

        // db.a
        // auth.signInWithEmailAndPassword(email, password).then((auth) => {
        //     // login and redirect to the home page
        //
        //     history.push("/dashboard")
        // }).catch((e) => alert(e.message))
    }

    return (
        <>
            <h1>Create New Product</h1>
            <form action="">

                <h5>Title</h5>
                <input id="title" value={title} onChange={event => setTitle(event.target.value)} type="text"/>

                <h5>Description</h5>
                <textarea id="description" value={description} onChange={event => setDescription(event.target.value)}
                          cols="30" rows="15"/>


                <h5>Price</h5>
                <input value={price} onChange={event => setPrice(event.target.value)} type="number"/>


                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                > Create</Button>
            </form>
        </>
    )

}
export default CreateProduct
