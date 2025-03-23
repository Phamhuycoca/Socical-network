import React from "react";
import { Table, Pagination, Spin, Row, Col } from "antd";
import type { PaginationProps } from "antd";
import { Space } from "antd";
import { Typography } from "antd";
import { AutoComplete, Input } from "antd";
const { Title } = Typography;
interface TableViewProps {
  title?: string;
  columns: any[]; // Cấu hình cột của bảng
  data: any[]; // Dữ liệu hiển thị từ API
  loading?: boolean; // Trạng thái loading
  page: number; // Trang hiện tại từ API
  pageSize: number; // Số dòng trên mỗi trang từ API
  total: number; // Tổng số bản ghi từ API
  pagination?: boolean;
  searchKey?: boolean;
  action?: React.ReactNode;
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
  title = null,
  searchKey = false,
  action = null,
}) => {
  const showTotal: PaginationProps["showTotal"] = (total) =>
    `Tổng ${total} bản ghi`;
  return (
    <Spin spinning={loading}>
      <Row>
        {title != null && (
          <Col span={12}>
            <Space align="center" className="mt-2 mb-2">
              <Title level={5}>{title}</Title>
            </Space>
          </Col>
        )}
        {searchKey && (
          <Col span={12}>
            <Row justify={"end"}>
              <AutoComplete
                popupMatchSelectWidth={252}
                style={{ width: 300 }}
                size="large"
              >
                <Input.Search
                  size="large"
                  placeholder="Nhập từ khóa tìm kiếm"
                  enterButton
                />
              </AutoComplete>
            </Row>
          </Col>
        )}
      </Row>
      {action && (
        <>
          {action}
        </>
      )}

      <Table
        className={action === null || searchKey === false ? "mt-2 mb-2" : ""}
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id || record.key}
        pagination={false}
      />
      <Row justify="end">
        {pagination && (
          <Pagination
            showTotal={showTotal}
            current={page}
            pageSize={pageSize}
            total={total}
            showSizeChanger
            pageSizeOptions={["10", "20", "50", "100"]}
            onChange={onPageChange}
            onShowSizeChange={onPageChange}
            className="mt-4"
          />
        )}
      </Row>
    </Spin>
  );
};

export default TableView;
