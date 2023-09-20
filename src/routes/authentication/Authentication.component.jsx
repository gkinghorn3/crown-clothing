import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInwithGoogleRedirect } from '../../utils/firebase/firebase.utils'





const Authentication = () => {


    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
      };


    return (
        <div>
            <h1>Sign In Page</h1>
            <SignUpForm />
            <SignInForm />

        </div>
    )
}

export default Authentication;