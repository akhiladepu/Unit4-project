import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';



export default class Facebooklogin extends Component {

    

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture:''
    }

    responseFacebook = response => {
        console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });

        

    }

    componentClicked = () => {
        console.log("clicked");
    }

    render() {

        let fbContent;

        if (this.state.isLoggedIn) { fbContent = null; }
        else {
            fbContent = (<FacebookLogin appId="607482670616895" autoLoad={true} fields="name,email,picture" onClick={this.componentClicked} callback={this.responseFacebook} />);
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}







// export const Facebooklogin2 = ({gettingData}) => {

//     const [fbdata,setFbdata]=useState(dataHeist)

//     const happeningFnc = () => {
//         gettingData(fbdata);
//     }

//     return (
//         <div>
//             <button onClick={happeningFnc}>Upload</button>
//         </div>
//     )
// }
