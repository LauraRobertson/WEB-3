//Referenced: https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
//Referenced: https://github.com/XBLDev/ReactJSNodejsAuthRouterv4

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TokenHandler from '../client-auth/TokenHandler';
import UserLoginPageContent from '../components/UserLoginPageContent.jsx';

class UserLoginPage extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let userLogin = null;

    if (TokenHandler.userTokenPresent() == false && TokenHandler.adminTokenPresent() == false) {
      userLogin = <UserLoginPageContent />;
    } else if (TokenHandler.adminTokenPresent() == true) {
      userLogin = <Redirect to='/admin' />;
    } else if (TokenHandler.userTokenPresent() == true) {
      userLogin = <Redirect to='/award' />;
    }

    return (
      <div>
        {userLogin}
      </div>
    );

  }

}

export default UserLoginPage;
