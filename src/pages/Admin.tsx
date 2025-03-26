import React, { useState } from 'react';
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Col, Dropdown, Image, Layout, Menu, Row, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { PageHeader } from '../components/PageHeader';
import { Notification } from '../components/Notification';

const items: MenuProps['items'] = [
    {
        label: <a>Thông tin tài khoản</a>,
        key: '0',
    },
    {
        label: <a>Đổi mật khẩu</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Row justify={'space-between'}>
                <span>Đăng xuất</span>
                <LogoutOutlined />
            </Row>
        ),
        key: '3',
    },
];

const { Header, Sider, Content } = Layout;
const customBreadcrumbTitles = {
    'danh-muc': 'Danh mục',
    'hanh-dong': 'Hành động',
    'nguoi-dung': 'Người dùng',
};

const Admin: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout className="h-screen">
            <Sider trigger={null} collapsible collapsed={collapsed} className="h-screen" width={256}>
                <Image
                    width={'100%'}
                    height={50}
                    style={{ objectFit: 'contain' }}
                    preview={false}
                    src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1706264627/gnio9s5elrbaq9fghyqp.png"
                />
                <Menu
                    style={{
                        height: 'calc(100vh - 20px)',
                    }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => {
                        navigate(e.key);
                    }}
                    items={[
                        {
                            key: '/admin/danh-muc',
                            icon: <UserOutlined />,
                            label: 'nav 1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                        },
                        {
                            key: '/admin/nguoi-dung',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '/admin/hanh-dong',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        width: '100%',
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}
                >
                    <Row justify={'space-between'} className="w-full">
                        <Col span={12}>
                            <Button
                                className="mt-1"
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                            />
                        </Col>
                        <Col span={12} className="flex justify-end items-center">
                            <Notification />

                            <Dropdown menu={{ items }} trigger={['click']}>
                                <Avatar
                                    src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1742911593/481694997_2251497398613021_9101917449659733743_n_jbtqcx.jpg"
                                    className="mr-4"
                                    size={'large'}
                                    onClick={(e) => e?.preventDefault()}
                                />
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: '16px',
                        padding: 8,
                        minHeight: 'calc(100vh - 64px)',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        overflow: 'auto', // Tránh tràn nội dung
                    }}
                >
                    <PageHeader customTitles={customBreadcrumbTitles} />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default Admin;
