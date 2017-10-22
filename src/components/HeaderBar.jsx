//Referenced: https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
//Referenced: https://github.com/XBLDev/ReactJSNodejsAuthRouterv4

import React from 'react';
import { Link } from 'react-router-dom';
import TokenHandler from '../client-auth/TokenHandler';
import { Redirect } from 'react-router-dom';

class HeaderBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      SiteText: 'Cassiopeia Homepage',
      loginText: 'Log In',
      signupText: 'Sign up',
      userWelcomeText: 'Hello ',
      adminText: 'Admin',
      redirect: false,

    };

    this.onLogOutClicked = this.onLogOutClicked.bind(this);

  }

  onLogOutClicked()
  {
    TokenHandler.removeToken();

  }

  render() {
    return (

    <div className="top-bar">



        <div className="top-bar-left">
                <Link to="/">{this.state.SiteText}</Link>
        </div>


        <div>
        {TokenHandler.userTokenPresent() == true || TokenHandler.adminTokenPresent() == true ? (
            <div className="top-bar-left">
                  {this.state.userWelcomeText} {JSON.parse(localStorage.getItem('usrname')).name}!
            </div>
            ) :
            (
            <div>
            </div>
            )}

        </div>

        {TokenHandler.userTokenPresent() == false && TokenHandler.adminTokenPresent() == false ? (
        <div>
                <div><Link to="/login">{this.state.loginText}</Link></div>
                <div><Link to="/signup">{this.state.signupText}</Link></div>
                <div><Link to="/admin">{this.state.adminText}</Link></div>
        </div>
        ) :
        (
        <div className="top-bar-right">
                 <Link to="/login" onClick={this.onLogOutClicked}>Log out</Link>
        </div>
        )
        }



    </div>

    );
  }

}

export default HeaderBar;
