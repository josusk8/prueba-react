import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.css";
import { updateShorthandPropertyAssignment } from "typescript";

const { Item } = Form;
const { Password } = Input;

function Login() {

    const auth = (datos:any) =>{

        if(datos.username === "admin" && datos.password === "admin"){
            console.log("GENIAL")
        }else{
            console.log("NAIN")
        }
        
        
    }




  return (
    <div className="primaryForm">
      <div className="secundaryForm"></div>
      <Form name="form" initialValues={{
        remind: true
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
