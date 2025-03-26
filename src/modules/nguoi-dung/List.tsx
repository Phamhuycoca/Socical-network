import { Button } from 'antd';
import React, { useRef, useState } from 'react';
import { Notification, NotificationRef } from '../../components/Notification/Notification';
// import { AlertComponent } from "../../components/Alert";
import ReactPlayer from 'react-player';
const ListNguoiDung: React.FC = () => {
    const notificationRef = useRef<NotificationRef>(null);
    const [playTime, setPlayTime] = useState<number>(0);
    // const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const handleClick = () => {
        notificationRef.current?.showNotification('error', 'Người dùng đã được cập nhật thành công!', 'Thông báo');
    };
    // const handleClickOpen =()=>{
    //     setIsAlertOpen(!isAlertOpen);
    // }
    // const handleChange=(result:any)=>{
    //     console.log('handleChange',result);
    // }
    // const onChangeOpen=(result:boolean)=>{
    //     console.log('onChangeOpen',result);
    //     setIsAlertOpen(result)
    // }
    const handleProgress = (state: any) => {
        setPlayTime(state.playedSeconds);
    };
    return (
        <>
            <Button onClick={handleClick}>Onclick</Button>
            {/* <Button onClick={handleClickOpen}>Hiển thị thông báo</Button> */}
            <Notification />
            {/* <AlertComponent onChange={handleChange} open={isAlertOpen} onChangeOpen={onChangeOpen}/> */}
            <ReactPlayer
                url={['https://www.youtube.com/watch?v=oUFJJNQGwhk', 'https://www.youtube.com/watch?v=jNgP6d9HraI']}
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
