import { Button } from "antd";
import React, { useRef} from "react";
import { Notification, NotificationRef } from "../../components/Notification/Notification";
// import { AlertComponent } from "../../components/Alert";

const ListNguoiDung: React.FC = () => {
    const notificationRef = useRef<NotificationRef>(null);
    // const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const handleClick = () => {
        notificationRef.current?.showNotification("error", "Người dùng đã được cập nhật thành công!", "Thông báo");
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
    return (
        <>
            <Button onClick={handleClick}>Onclick</Button>
            {/* <Button onClick={handleClickOpen}>Hiển thị thông báo</Button> */}
            <Notification/>
            {/* <AlertComponent onChange={handleChange} open={isAlertOpen} onChangeOpen={onChangeOpen}/> */}
        </>
    );
};

export default ListNguoiDung;
