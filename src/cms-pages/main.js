import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import "./style-main.scss";
import StockTable from './Table';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<b>{'Total'}</b>, '1', <PieChartOutlined />),
  getItem(<b>{'Today list'}</b>, '2', <DesktopOutlined />),
  getItem(<b>{'Setting'}</b>, '3', <FileOutlined />),
];

const MainScreen = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className='content-wrapper-main'
        >
          <StockTable/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainScreen;