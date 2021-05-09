import { Breadcrumb } from 'antd';
import "./Breadcrumb.css";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  export const Demo1 = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div className="buttons">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">About</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Services</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Careers</Breadcrumb.Item>
            <Breadcrumb.Item>Login</Breadcrumb.Item>
            </Breadcrumb>
      </div>
  
    );
  }; 
