import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuProps } from "antd";
import "./header-style.css";
import { MessageOutlined, CloseCircleOutlined, AimOutlined } from "@ant-design/icons";


const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/login" target="_parent" rel="noopener noreferrer">
        Close sesion
      </Link>
    ),
    key: "login",
    icon: <CloseCircleOutlined />,
  },
  {
    label: (
      <Link to="/geography" target="_parent" rel="noopener noreferrer">
        Geography
      </Link>
    ),
    key: "geography",
    icon: <AimOutlined />,
  },
  {
    label: (
      <Link to="/faqs" target="_parent" rel="noopener noreferrer">
        FAQS
      </Link>
    ),
    key: "faqs",
    icon: <MessageOutlined />,
  },
];

const MyHeader: React.FC = () => {
  const [current, setCurrent] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    
      <Menu
      className="menu"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme={"light"}
    />
    
  );
};

export default MyHeader;
