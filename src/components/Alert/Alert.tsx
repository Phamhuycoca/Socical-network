import { Button, Modal, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';

interface PropsAlert {
    onChange?: (value: boolean) => void;
    onChangeOpen?:(value: boolean) => void;
    message?: string;
    open?: boolean;
}

export const Alert: React.FC<PropsAlert> = ({ onChange,onChangeOpen, message = 'Bạn có muốn xóa thông tin này?', open = false }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const handleClose = () => {
        onChange?.(false);
        setIsOpen(false);
        onChangeOpen?.(false);
    };
    const handleOk = () => {
        onChange?.(true);
        setIsOpen(false);
        onChangeOpen?.(false);
    };
    return (
        <Modal
            open={isOpen}
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
