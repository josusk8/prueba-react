import { Button, Result } from 'antd';
import React from 'react';

const Error404: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" href='/'>Back Home</Button>}
  />
);

export default Error404;