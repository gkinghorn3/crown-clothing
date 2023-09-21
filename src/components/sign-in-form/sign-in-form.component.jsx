import { useState, useContext } from "react";
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInwithGoogleRedirect, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {UserContext} from '../../contexts/user.context'  


import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
      const {user} = await signInAuthUserWithEmailAndPassword(email, password)
      
      setCurrentUser(user);

      resetFormFields();
      
    } catch (Error) {
        alert('Email or Password Incorrect');
    
    }
    };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className='btn-container'>
        <Button type="submit">Sign In</Button>
        <Button buttonType='google' clickFunc={signInWithGoogle} type="submit">Google Sign In</Button>
        </div>

      </form>


    </div>
  );
};

export default SignInForm;
