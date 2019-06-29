import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";

const ClassroomSailorRoute = ({ Component, ...props }) => {
    return <Route {...props} render={routeProps => {
        <Component {...routeProps}></Component>
    }}>

    </Route>
}

const ClassroomSailorRouter = (props) => {
    return (
        <BrowserRouter>

        </BrowserRouter>
    )
}