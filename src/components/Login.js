import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import {useUserAuth} from '../context/UserAuthContext'   
import { Alert } from 'react-bootstrap'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {login, googleSignIn} = useUserAuth(); 
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        try{
            await login(email,password);
            navigate('/home');
        }catch(err){
            setError(err.message);
        }
    }

    const handleGoogleSign =  async (e) =>{
        e.preventDefault();
        try{
            await googleSignIn();
            navigate('/home')
        }catch(err){
            setError(err.message);
        }
    }
    return (
        <>
            <div className='p-4 box'>
                <h2>Firebase Auth Login</h2>
                {error && <Alert variant = 'danger'>{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 

                          onChange={(e) => setEmail(e.target.value)} // THIS ONCHANGE function takes event as argumnet  
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                            onChange={ (e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <hr></hr>
                   <div>
                    <GoogleButton  onClick={handleGoogleSign}/>
                   </div>
                </Form>
            </div>
            <div className='p-4 box mt-3'>
            Don't have an account? <Link to="/signup">SignUp</Link> 

            </div>
        </>
    )
}

export default Login
