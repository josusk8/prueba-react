
import { Button, Result } from 'antd';
import React from 'react';
import "./error404-style.css"

const Error404: React.FC = () => {

  return (
    <div className='error'>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href='/'>Back Home</Button>}></Result>
    </div>

  )

}


export default Error404;