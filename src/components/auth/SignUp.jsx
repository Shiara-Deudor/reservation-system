import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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
            <form onSubmit={signUp}>
                <h1>Create an Account</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={onChangeEmail} />
                <input type="password" placeholder='Enter your password' value={password} onChange={onChangePassword} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp