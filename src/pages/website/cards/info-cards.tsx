import { Card } from "antd";
import React from "react";
import "./info-cards.css";

interface IMyProps {
  name: string;
  code: string;
  capital: string;
}
const InfoCard: React.FC<IMyProps> = (props: IMyProps) => (
  <div className="site-card-border-less-wrapper">
    <Card title={props.name} bordered={false} style={{ width: 300 }}>
      <p>{props.code}</p>
      <p>{props.capital}</p>
    </Card>
  </div>
);

export default InfoCard;
