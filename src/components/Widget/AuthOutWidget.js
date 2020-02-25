import React, { useState } from "react";
import styled from "styled-components";
import { Input, Form, Button, Typography, Row, Col } from "antd";
import request from "../../hooks/http";
import { useHttp } from "../../hooks/http";
import Title from "antd/lib/skeleton/Title";

const AuthOutWidget = () => {
  const { loading, errors, request } = useHttp();

  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    username: "",
    phonenumber: "",
  });

  const registerHandler = async () => {
    try {
      const data = await request("api/auth/register", "POST", { ...authForm });
      console.log(data);
    } catch (e) {}
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  const handleChange = event => {
    setAuthForm({ ...authForm, [event.target.name]: event.target.value });
  };
  console.log(`Email: ${authForm.email} \n Pass: ${authForm.password} \n Username: ${authForm.username} \n Phoneumber: ${authForm.phonenumber}`);


  const [isRegisterClick, setIsRegisterClick] = React.useState(false)

  const handleClick = () =>{
      isRegisterClick ? setIsRegisterClick(false) : setIsRegisterClick(true)
  }


  if(isRegisterClick === true){
    return(
        <MyAside>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Typography.Title level={4}>Реєстрація</Typography.Title>
        </Col>
      </Row>

      <Row type='flex' justify="center" align="middle">
        <Col span={20}>
          <Form onSubmit={handleSubmit}>

            <Form.Item>
                <Input
                    id='login'
                    placeholder='Ваш логін'
                    name = 'username'
                    value = {authForm.username}
                    onChange= {handleChange}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    type='phone'
                    id='login'
                    placeholder='Ваш номер телефону'
                    name = 'phonenumber'
                    value = {authForm.phonenumber}
                    onChange= {handleChange}
                />
            </Form.Item>

            <Form.Item>
              <Input
                type="email"
                id="email"
                placeholder="Ваш Email"
                name="email"
                value={authForm.email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Input.Password
                password
                id="password"
                placeholder="Ваш пароль"
                name="password"
                value={authForm.password}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <LoginButton
                onClick={registerHandler}
                disabled={loading}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                ЗАРЕЄСТРУУВАТИСЬ
              </LoginButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row type='flex' align='middle' justify='center'>
          <Col><Button onClick={handleClick} type='link'>АВТОРИЗАЦІЯ</Button></Col>
      </Row>
    </MyAside>
    )
  }else{
      return (
    <MyAside>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Typography.Title level={4}>Авторизація</Typography.Title>
        </Col>
      </Row>

      <Row type='flex' justify="center" align="middle">
        <Col span={20}>
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                type="email"
                id="email"
                placeholder="Ваш Email"
                name="email"
                value={authForm.email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Input.Password
                password
                id="password"
                placeholder="Ваш пароль"
                name="password"
                value={authForm.password}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <LoginButton
                onClick={registerHandler}
                disabled={loading}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                АВТОРИЗУВАТИСЬ
              </LoginButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row type='flex' align='middle' justify='center'>
          <Col><Button onClick={handleClick} type='link'>РЕЄСТРАЦІЯ</Button></Col>
      </Row>
    </MyAside>
  );
  }

  
};

export default AuthOutWidget;

const MyAside = styled.aside`
  width: 94%;
  max-width: 94%;
  height: 100%;
  background-color: white;
  margin: 5.5% 0 6% 6%;
`;

const LoginButton = styled(Button)`
    width: 100%;
`
