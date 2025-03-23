import React, { useEffect, useState } from "react";
import TableView from "../../components/TableView/TableView";
import { Button, Row } from "antd";
import { CommonButton, CreateButton, DeleteButton, EditButton, SaveButton } from "../../components/Button";
import { PlusOutlined } from "@ant-design/icons";

interface User {
  id: number;
  name: string;
  email: string;
}

// Hàm tạo dữ liệu giả lập
const generateFakeData = (totalRecords: number): User[] => {
  return Array.from({ length: totalRecords }, (_, i) => ({
    id: i + 1,
    name: `Người dùng ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));
};

const ListDanhMuc: React.FC = () => {
  const [data, setData] = useState<User[]>([]); // 🛠 Fix: Định nghĩa kiểu dữ liệu cho state
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(50);
  const [loading, setLoading] = useState<boolean>(false);

  // Fake dữ liệu thay vì gọi API
  const fetchData = (page: number, pageSize: number) => {
    setLoading(true);
    setTimeout(() => {
      const fakeData = generateFakeData(50);
      const startIndex = (page - 1) * pageSize;
      const slicedData = fakeData.slice(startIndex, startIndex + pageSize);
      setData(slicedData);
      setTotal(50);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchData(page, pageSize);
  }, [page, pageSize]);

  const handlePageChange = (newPage: number, newPageSize: number) => {
    setPage(newPage);
    setPageSize(newPageSize);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <div>
      <TableView
        action={
          <Row justify={'end'}>
              <Button>Thêm mới</Button>
              <EditButton/>
              <CreateButton/>
              <DeleteButton/>
              <SaveButton/>
              <CommonButton text="Button" icon={<PlusOutlined/>}/>
          </Row>
        }
        columns={columns}
        data={data}
        page={page}
        pageSize={pageSize}
        total={total}
        loading={loading}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ListDanhMuc;
