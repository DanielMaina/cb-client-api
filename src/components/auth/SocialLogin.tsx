import React from 'react'
import { useDispatch } from 'react-redux'

import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
// import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

import { googleLogin, facebookLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token
    dispatch(googleLogin(id_token))
  }

//   const onFBSuccess = (response: FacebookLoginAuthResponse) => {
//     const { accessToken, userID } = response.authResponse
//     dispatch(facebookLogin(accessToken, userID))
//   }  


  return (
    <>
      <div className="my-2">
        <GoogleLogin 
        client_id='485504776832-573mc7q86cnh8c1auuvjpi02eprbiav7.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
        theme='light'
        />
      </div>

      {/* <div className="my-2">
        <FacebookLogin 
        appId="333953021722051"
        onSuccess={onFBSuccess}
        theme='light'
        />
      </div> */}
    </>
  )
}

export default SocialLogin