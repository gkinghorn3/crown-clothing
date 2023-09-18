import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInwithGoogleRedirect } from '../../utils/firebase/firebase.utils'




const SignIn = () => {


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        console.log(user);
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <SignUpForm />
 
        </div>
    )
}

export default SignIn;