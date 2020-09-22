import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useStateValue} from "../GlobalContext/StateProvider";

const ProtectedRoute = ({component: Component, ...rest}) => {

    const [{user}] = useStateValue()


    console.log("USER STATUS", user)
    return (
        <Route
            {...rest}
            render={props => {
                if (user) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
            }
        />
    )
}
export default ProtectedRoute