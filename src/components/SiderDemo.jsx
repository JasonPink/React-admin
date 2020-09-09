import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          title: '菜单1',
          icon: 'UserOutlined'
        },
        {
          title: '菜单2',
          icon: 'VideoCameraOutlined'
        },
        {
          title: '菜单3',
          icon: 'UploadOutlined'
        },
        {
          title: '菜单4',
          icon: 'UploadOutlined'
        }
      ]
    }
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              {
                this.state.navList.map(item => {
                  return (
                    <Menu.Item key="1">
                      {item.title}
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default SiderDemo;
// ReactDOM.render(<SiderDemo />, mountNode);
