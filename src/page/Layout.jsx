import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import menus from "../routes/config";
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Container extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Header className="header">
          <div className="logo" />
          <h2 style={{color: '#fff', fontSize: '20px'}}>后台管理系统</h2>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
              {menus.map((item, index) => {
                return item.subs ? (
                  <SubMenu key={index} title={item.title}>
                    {item.subs.map((item1, number) => {
                      return (
                        <Menu.Item key={index*Math.random()+number} id={number}>
                          <Link to={item1.key}>{item1.title}</Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                ) : (
                  <Menu.Item key={index}>
                    <Link to={item.key}>{item.title}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
        <Footer
          style={{
            backgroundColor: "#001529",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Footer
        </Footer>
      </Layout>
    );
  }
}

export default Container;
