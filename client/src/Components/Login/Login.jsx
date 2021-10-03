import { Logincontextprovider } from "../../Contexts/Logincontextprovider.jsx"
import {Continueoptions} from "../ContinueOption/Continueoptions.jsx"
import {Loginthroughphone} from "../Loginthroughphone/Loginthroughphone.jsx"
import {Enterotp} from "../EnterOTP/Enterotp.jsx"
import {Route} from "react-router-dom"

export function Login(){

    return <Logincontextprovider>
        <Route path="/" exact>
            <Continueoptions />
        </Route>
        <Route path="/Loginthroughphone" exact>
            <Loginthroughphone />
        </Route>
        <Route path="/Enterotp" >
            <Enterotp />
        </Route>
    </Logincontextprovider>
}