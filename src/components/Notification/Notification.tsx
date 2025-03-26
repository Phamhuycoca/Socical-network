import { forwardRef, useImperativeHandle } from 'react';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    title?: string;
    type?: NotificationType;
    message?: string;
}

export interface NotificationRef {
    showNotification: (type: NotificationType, message: string, title?: string) => void;
}

export const Notification = forwardRef<NotificationRef, NotificationProps>(({}, ref) => {
    const [api, contextHolder] = notification.useNotification();

    const showNotification = (type: NotificationType, message: string, title: string = '') => {
        api[type]({
            message: title || 'Thông báo',
            description: message
        });
    };

    useImperativeHandle(ref, () => ({
        showNotification
    }));

    return <>{contextHolder}</>;
});
