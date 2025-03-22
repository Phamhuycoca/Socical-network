import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const history = useNavigate();
  const handler = () => {
    history(-1);
  };
  console.log('okkkk');
  
  return (
    <Result
      status="404"
      title="404"
      subTitle="Trang bạn truy cập không tồn tại."
      extra={
        <Button type="primary" onClick={handler}>
          Quay lại trang trước
        </Button>
      }
    />
  );
};

export default NotFound;