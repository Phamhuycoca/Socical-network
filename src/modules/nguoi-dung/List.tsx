import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Notification, NotificationRef } from '../../components/Notification/Notification';
import { AlertComponent } from "../../components/Alert";
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { resetSate, setOpen } from '../../store/reducers/alert.slice';
const ListNguoiDung: React.FC = () => {
    const notificationRef = useRef<NotificationRef>(null);
    const [playTime, setPlayTime] = useState<number>(0);
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const alert = useSelector((state: any) => state.alert);
    console.log(playTime);
    
    const dispatch=useDispatch();
    const handleClick = () => {
        notificationRef.current?.showNotification('error', 'Người dùng đã được cập nhật thành công!', 'Thông báo');
    };
    const handleClickShow =()=>{
        dispatch(setOpen());
    }
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(resetSate());
            setIsAlertOpen(!isAlertOpen);
        },5000);
    },[isAlertOpen]);
    const handleProgress = (state:any) => {
        setPlayTime(state.playedSeconds);
    }
    return (
        <>
            <span>Thông báo {alert.result ? 'Xóa':'Không'}</span>
            <Button onClick={handleClick}>Onclick</Button>
            <Button onClick={handleClickShow}>showAlert</Button>
            {/* <Button onClick={handleClickOpen}>Hiển thị thông báo</Button> */}
            <Notification />
            <AlertComponent />
            <ReactPlayer
               url={[
                    'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                    'https://www.youtube.com/watch?v=jNgP6d9HraI'
                ]}
                width="640px"
                height="360px"
                playing={true}
                controls={false}
                onProgress={handleProgress}
            />
        </>
    );
};

export default ListNguoiDung;
