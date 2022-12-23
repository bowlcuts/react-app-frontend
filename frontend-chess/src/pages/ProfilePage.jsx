import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

function ProfilePage () {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [password, setPassword] = useState('')


    const {storedToken, user, setUser, authenticateUser} = useContext(AuthContext)

    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
      });
    
      const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
      });
    
      useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/profile`, {
            headers: {
                Authorization: `Bearer ${storedToken}`,
              }
        })
        .then((foundUser) => {
            // console.log('THIS IS PROFILE USER', foundUser)
            setState({
                name: foundUser.data.name,
                email: foundUser.data.email
            })
            setUser(foundUser.data)
        })
        .catch(err => console.log(err))
      },[])


      const submitFormHandler = e => {
        e.preventDefault();
        // console.log('form submit works');
        axios.put(`${import.meta.env.VITE_BACKEND_URL}/user/profile`, {
          name: state.name,
          email: state.email
        },{ 
        headers: {
            Authorization: `Bearer ${storedToken}`,
          }},
        )
          .then(axiosResponse => {
            setUser(axiosResponse.data)
            // console.log('THIS IS THE UPDATED USER', axiosResponse.data);
          })
          .catch(err => console.log(err))
      }

      const handleDelete = () => {
        // console.log('this is the stored token', storedToken)
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/profile/${user._id}/delete`, {
            password
        }, { 
          headers: {
              Authorization: `Bearer ${storedToken}`,
            }}, 
          )
            .then(axiosResponse => {
              localStorage.clear()  
              authenticateUser()
              navigate('/')
            //   console.log('THIS IS THE DELETED USER', axiosResponse.data);
            })
            .catch(err => console.log(err))
      }

    return (
        <div className="profile-page">
        <h1>Edit Profile</h1>
        <form onSubmit={submitFormHandler}>
        <div className="profile-name">
          <label>Name</label>
          <input onChange={updateState} value={state.name} name="name" />
          </div>
          <div className="profile-email">
          <label>Email</label>
          <input onChange={updateState} value={state.email} name="email" />
          </div>
          <button className="profile-save">Save Changes</button>
          <button className="profile-delete" onClick={() => {setShowModal(!showModal)}}>Delete Profile</button>
        <Modal 
        setPassword={setPassword}

        closeModal={() => {
          setShowModal(false);
        }} 

        handleDelete={handleDelete} 

        showModal={showModal}

        />
        </form>
    


      </div>
    );
};

export default ProfilePage;