import React, {useRef} from 'react'
import { Card, Form, Button  } from 'react-bootstrap'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
         <Card> <Card.Body>
             <h2 className= "text-center -mb-4"> Sign Up</h2>
             <Form>
                 <Form.Group id= "email">
                     <Form.Label>Email </Form.Label>
                     <Form.Control type= "email" ref={emailRef}
                      required></Form.Control>

                 </Form.Group>
                 <Form.Group id= "password">
                     <Form.Label>password </Form.Label>
                     <Form.Control type= "password" ref={passwordRef}
                      required></Form.Control>

                 </Form.Group>
                 <Form.Group id= "password-confirm">
                     <Form.Label>password confirmation </Form.Label>
                     <Form.Control type= "password-confirm" ref={passwordConfirmRef}
                      required></Form.Control>
                      <Button type= "submit" className= "w-100">Sign Up</Button>

                 </Form.Group>
             </Form>
             </Card.Body> </Card>   
         <div className="w-100 text-center mt-2" >Already have an account? Log In </div>
        </>
    )
}
