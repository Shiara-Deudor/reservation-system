import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={signIn}>
                <h1>Log In to your Account</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={onChangeEmail} />
                <input type="password" placeholder='Enter your password' value={password} onChange={onChangePassword} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default SignIn