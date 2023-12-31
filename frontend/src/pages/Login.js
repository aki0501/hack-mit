import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Login.css"

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3000/login', { username, password });
        alert(response.data.message);

        window.location.href = "/home";
    } catch (error) {
        alert('Login failed' + error);
    }
  };

  const handleRegister = async () => {
    try {
        window.location.href = "/signup";
    } catch (error) {
        alert('Signup failed' + error);
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <h4 className="cover">Welcome</h4>
            </div>

            <div className="texty-text">
              <MDBInput wrapperClass='mb-4' label='Username' id='form1'
                        type='username' value={username} onChange={(e) => setUsername(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2'
                        type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2 " onClick={handleLogin}>Sign in</MDBBtn>
              <a className="texty-text" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="texty-text">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger' onClick={handleRegister}>
                Register!
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        {/* <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol> */}

      </MDBRow>

    </MDBContainer>
  );
}

    /* //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleLogin}>Login</button>
    // </div> */

export default Login;
