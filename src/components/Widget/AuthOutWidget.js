import React, {useState} from 'react'
import styled from 'styled-components'
import {Input, Form, Button} from 'antd'
import request from '../../hooks/http'
import {useHttp} from '../../hooks/http'

const AuthOutWidget = ()=>{

    const {loading, errors, request} = useHttp()

    const [authForm, setAuthForm] = useState({
        email: '',
        password: ''
    })

    const registerHandler = async () =>{
        try{
            const data = await request('api/auth/register', 'POST', {...authForm})
            console.log(data)
        }catch(e){

        }
    }


    

    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    const handleChange = (event)=>{
        setAuthForm({...authForm, [event.target.name]: event.target.value})
    }
console.log(`Email: ${authForm.email} Pass: ${authForm.password}`)
    return(
        <MyAside>
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    <Input type='email' id='email' placeholder='Ваш Email' name='email' value={authForm.email} onChange={handleChange} />
                </Form.Item>

                <Form.Item>
                   <Input.Password password id='password' placeholder='Ваш пароль' name='password' value={authForm.password} onChange={handleChange} /> 
                </Form.Item>

                <Form.Item>
                    <Button onClick={registerHandler} disabled={loading} type="primary" htmlType="submit" className="login-form-button">
                        ЗАРЕЄСТРУВАТИСЬ
                    </Button>
                </Form.Item>
            </Form>
            
            
            
        </MyAside>
    )
}

export default AuthOutWidget


const MyAside = styled.aside`
    width: 94%;
    max-width: 94%;
    height: 100%;
    background-color: white;
    margin: 5.5% 0 6% 6%;
`