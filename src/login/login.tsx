import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";

const { Item } = Form;
const { Password } = Input;


function Login() {
  const [toWebSite, setToWebSite] = React.useState(false)

  
  if (toWebSite === true){
    return <Navigate to = "/website"></Navigate>
  }


  const auth = (datos: any) => {
    if (datos.username === "admin" && datos.password === "admin") {
      setToWebSite(true)
    } else {
      setToWebSite(false)
    }
  };

  return (
    <div className="primaryForm">
      <div className="secundaryForm"></div>
      <Form
        name="form"
        initialValues={{
          remind: true,
        }}
        onFinish={auth}
      >
        <Item
          label="User"
          name="username"
          rules={[
            {
              required: true,
              message: "Ingrese su nombre de usuario",
            },
          ]}
        >
          <Input />
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Ingrese su contraseña",
            },
          ]}
        >
          <Password />
        </Item>

        <Item name="remind" valuePropName="checked">
          <Checkbox>Recordar usuario</Checkbox>
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Item>
      </Form>
    </div>
  );
}

export default Login;
