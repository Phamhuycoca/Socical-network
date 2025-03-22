import React from "react";
import { Table, Pagination, Spin, Row } from "antd";
import type { PaginationProps } from 'antd';
interface TableViewProps {
  columns: any[]; // Cấu hình cột của bảng
  data: any[]; // Dữ liệu hiển thị từ API
  loading?: boolean; // Trạng thái loading
  page: number; // Trang hiện tại từ API
  pageSize: number; // Số dòng trên mỗi trang từ API
  total: number; // Tổng số bản ghi từ API
  pagination?: boolean;
  onPageChange: (page: number, pageSize: number) => void; // Xử lý khi đổi trang
}

const TableView: React.FC<TableViewProps> = ({
  columns,
  data,
  loading = false,
  page,
  pageSize,
  total,
  pagination = true,
  onPageChange,
}) => {
    const showTotal: PaginationProps['showTotal'] = (total) => `Tổng ${total} bản ghi`;
  return (
    <Spin spinning={loading}>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id || record.key}
        pagination={false} // Tắt pagination mặc định của Table
      />
      <Row justify="end">
        {pagination && (
          <Pagination
            showTotal={showTotal}
            current={page}
            pageSize={pageSize}
            total={total}
            showSizeChanger
            pageSizeOptions={["5", "10", "20", "50"]} // Các lựa chọn cho số bản ghi/trang
            onChange={onPageChange}
            onShowSizeChange={onPageChange} // Cập nhật pageSize khi thay đổi
            className="mt-4"
          />
        )}
      </Row>
    </Spin>
  );
};

export default TableView;
