import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Space } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";

const { Item } = Form;
const { Password } = Input;

const Login: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const [toWebSite, setToWebSite] = React.useState(false);

  if (toWebSite === true) {
    return <Navigate to="/website"></Navigate>;
  }

  const auth = (datos: any) => {
    if (datos.username === "admin" && datos.password === "admin") {
      setToWebSite(true);
    } else {
      setToWebSite(false);
    }
  };

  return (
    <div>
       <Button type="primary">Primary Button</Button>
    
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

        <Button
          htmlType="submit"
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Login
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default Login;
