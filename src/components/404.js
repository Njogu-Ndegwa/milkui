import React from 'react';
import { Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

export default function Error () {
    return (
<Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"> <Link to='/option1'>Home Page</Link> </Button>}
  />
    )
}
  