import { Route, Switch } from "react-router"
import { HomePage } from "../HomePage/HomePage.jsx"

export const Routes = () => {
    return (<>
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
    </Switch>
    </>);
}