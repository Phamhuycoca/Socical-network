import { Button, Modal, Space } from 'antd';
import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setClose,  setResult } from '../../store/reducers/alert.slice';
interface PropsAlert {
    message?: string;
}

export const Alert: React.FC<PropsAlert>= ({message='Bạn có muốn xóa thông tin này?'}) => {
    const alert = useSelector((state: any) => state.alert);
    const dispatch=useDispatch();

    const handleClose = () => {
        dispatch(setClose())
        dispatch(setResult(false));
    };
    const handleOk = () => {
        dispatch(setClose())
        dispatch(setResult(true))
    };
    return (
        <Modal
            open={alert.open}
            onCancel={handleClose}
            title={
                <Space>
                    <span>Thông báo</span>
                    <InfoCircleOutlined />
                </Space>
            }
            onOk={handleOk}
            footer={[
                <Button key="cancel" danger onClick={handleClose}>
                    Hủy
                </Button>,
                <Button key="confirm" type="primary" onClick={handleOk}>
                    Xác nhận
                </Button>,
            ]}
        >
            <p>{message}</p>
        </Modal>
    );
};
