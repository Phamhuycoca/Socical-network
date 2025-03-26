import { Badge, Dropdown, List } from "antd";
import React from "react";
import {
    BellFilled,
    BellOutlined
  } from "@ant-design/icons";
const notificationData = Array.from(
    { length: 50 },
    (_, i) => `Thông báo ${i + 1}`
  );
export const Notification: React.FC = () => {
  return (
    <Dropdown
      trigger={["click"]}
      placement="bottomLeft"
      dropdownRender={() => (
        <div
          style={{
            width: 400,
            height: 500,
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "#f0f0f0",
              color: "black",
              fontWeight: "bold",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <span>Thông báo</span>
            <BellFilled style={{ fontSize: 18 }} />
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            <List
              size="small"
              dataSource={notificationData}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "10px",
              textAlign: "center",
              position: "sticky",
              bottom: 0,
              zIndex: 10,
            }}
          >
            <a href="#">Xem tất cả</a>
          </div>
        </div>
      )}
    >
      <Badge count={3} overflowCount={9} className="mr-5 text-2xl">
        <BellOutlined style={{ fontSize: 24 }} />
      </Badge>
    </Dropdown>
  );
};
