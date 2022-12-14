import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Space, Alert, message } from "antd";
import "./login-style.css";
import { Navigate } from "react-router-dom";
import UserContext from "../../utils/provider";
const { Item } = Form;
const { Password } = Input;

const Login = () => {
  //Button functions
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
    }, 3000);
  };

  //Redirect to geography page
  const [goToWebSite, setGoToWebSite] = React.useState(false);
  if (goToWebSite === true) {
    const value = React.useContext(UserContext);
    value.isAuth = true;
    return (
      <div>
        <Navigate to="/geography"></Navigate>
      </div>
    );
  }

  //Check username and password
  const auth = (datos: any) => {
    if (datos.username === "admin" && datos.password === "admin") {
      setGoToWebSite(true);
      success()
    } else {
      setGoToWebSite(false);
      error()
    }
  };
  //Messgaes validations
  const error = () => {
    message.error('The user or password has not correct',3 );
  };

  const success = () => {
    message.success('Loggin complete');
  };

  return (
    <div className="loginPage">
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
                message: "Ingrese su contrase??a",
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
