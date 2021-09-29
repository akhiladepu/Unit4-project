import { Logincontextprovider } from "../../Contexts/Logincontextprovider"
import {Continueoptions} from "../ContinueOption/Continueoptions"
import {Loginthroughphone} from "../Loginthroughphone/Loginthroughphone"
import {Enterotp} from "../EnterOTP/Enterotp"
import {Route} from "react-router-dom"

export function Login(){

    return <Logincontextprovider>
     <Route path="/" exact><Continueoptions/></Route>
    <Route path="/Loginthroughphone" exact><Loginthroughphone/></Route>
    <Route path="/Enterotp" ><Enterotp/></Route>
    </Logincontextprovider>
}