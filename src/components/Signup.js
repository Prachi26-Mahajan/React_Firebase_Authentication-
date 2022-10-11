import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link , useNavigate } from 'react-router-dom'
import {useUserAuth} from '../context/UserAuthContext';
import { Alert } from 'react-bootstrap';
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {signUp} = useUserAuth();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
    e.preventDefault();  //Page don't get refresh
    setError('');
    try{
        await signUp(email,password)
        navigate("/");
    }catch(err){
        setError(err.message);
    }
   };
    return (
        <>
            <div className='p-4 box'>
                <h2>Firebase Auth SignUp</h2>
                {error &&<Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                        onChange={(e)=> setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 

                          onChange={(e) => setPassword(e.target.value)}  
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className='p-4 mt-3'>
            Alread Have account <Link to = '/'>Login</Link>
            </div>
        </>
    )
}

export default Signup
