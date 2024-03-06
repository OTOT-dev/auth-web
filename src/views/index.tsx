import React from 'react';
import { DashboardFilled, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps, Layout, Menu, theme } from 'antd';
import { useAuth } from '@/hooks';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom'
import { api_logout } from '@/apis/auth';

const { Header, Content, Sider } = Layout;

const sideItems: MenuProps['items'] = [
  {
    key: `dashboard`,
    icon: React.createElement(DashboardFilled),
    label: <Link to={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: `plugins`,
    icon: React.createElement(PlusSquareOutlined),
    label: <Link to={"/plugins"}>Plugins</Link>,
  }
]

const dropItems: MenuProps['items'] = [
  {
    key: 'logout',
    label: '登出',
    onClick: () => {
      api_logout()
      window.location.reload()
    }
  }
]


export const IndexView = () => {
  const { authInfo } = useAuth()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="p-14 bg-24 w-[1%] bg-no-repeat bg-center bg-[url(../../assets/images/opensource.png)]" />
        <div className='text-3xl text-white ml-8'>auth-server</div>
        <Avatar style={{ background: '#87d068', marginLeft: 'auto' }} icon={<UserOutlined />} />
        <Dropdown menu={{ items: dropItems }} className='text-white ml-8'>
          <span className='text-center'>{authInfo.email}</span>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer, height: "100vh" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={sideItems}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: 24, margin: 12, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
