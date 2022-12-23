import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage(){

  const navigate = useNavigate();

  const [state, setState] = useState({
    email: '',
    name: '',
    password: ''
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const onFormSubmit = e => {
    e.preventDefault();
    // console.log(state)
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, state)
      .then(axiosResponse => {
        // console.log(axiosResponse.data)
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='profile-page'>
      <h1>Sign Up</h1>
      <form onSubmit={onFormSubmit}>
        <div className='profile-name'>
        <label>Name</label>
        <input value={state.name} name="name" onChange={updateState} />
        </div>
        <div className='profile-email'>
        <label>Email</label>
        <input value={state.email} name="email" onChange={updateState} />
        </div>
        <div className='profile-email'>
        <label>Password</label>
        <input value={state.password} name="password" onChange={updateState} type="password"/>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignupPage;