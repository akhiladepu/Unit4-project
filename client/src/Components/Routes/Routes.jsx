import { Route, Switch } from "react-router"
import { HomePage } from "../HomePage/HomePage.jsx"
import {Loginthroughphone} from "../Loginthroughphone/Loginthroughphone.jsx"
import {Enterotp} from "../EnterOTP/Enterotp.jsx"
// import { Postloading } from "../UpdatingAd/Loading/Postloading.jsx";

export const Routes = () => {
    return (<>
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/Loginthroughphone" exact>
                <Loginthroughphone />
            </Route>
            <Route path="/Enterotp" exact >
                <Enterotp />
            </Route>
            {/* <Route path="/postloading" exact>
                <Postloading />
            </Route> */}
    </Switch>
    </>);
}