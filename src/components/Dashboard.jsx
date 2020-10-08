import React, { Component } from "react";
import { Row, Col, Card, Timeline } from "antd";
import {
  CloudOutlined,
  AppleOutlined,
  WindowsOutlined,
  AlipayOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import EchartsProjects from "./EchartsProjects";
import EchartsViews from "./EchartsViews";
import b1 from "../style/imgs/b1.jpg";

class Dashboard extends Component {
  render() {
    return (
      <div className="gutter-container">
        <Row gutter={10}>
          <Col md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <CloudOutlined
                      style={{ fontSize: "36px", color: "#00f" }}
                    />
                  </div>
                  <div className="clear">
                    <div className="text-muted">收藏</div>
                    <h2>309</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <AppleOutlined
                      style={{ fontSize: "36px", color: "#eb2f96" }}
                    />
                  </div>
                  <div className="clear">
                    <div className="text-muted">喜欢</div>
                    <h2>1237</h2>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <WindowsOutlined
                      style={{ fontSize: "36px", color: "#52c41a" }}
                    />
                  </div>
                  <div className="clear">
                    <div className="text-muted">关注</div>
                    <h2>567</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <AlipayOutlined
                      style={{ fontSize: "36px", color: "#52c41a" }}
                    />
                  </div>
                  <div className="clear">
                    <div className="text-muted">收藏</div>
                    <h2>309</h2>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col md={16}>
            <div className="gutter-box">
              <Card bordered={false} className={"no-padding"}>
                <EchartsProjects />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>任务</h3>
                  <small>10个已经完成，2个待完成，1个正在进行中</small>
                </div>
                <span className="card-tool">
                  <RedoOutlined />
                </span>
                <Timeline>
                  <Timeline.Item color="green">新版本迭代会</Timeline.Item>
                  <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>联调接口</p>
                    <p>功能验收</p>
                  </Timeline.Item>

                  <Timeline.Item color="#108ee9">
                    <p>登录功能设计</p>
                    <p>权限验证</p>
                    <p>页面排版</p>
                  </Timeline.Item>
                </Timeline>
              </Card>
            </div>
          </Col>
          <Col md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>消息栏</h3>
                </div>
                <span className="card-tool">
                  <RedoOutlined />
                </span>
                <ul className="list-group no-border">
                  <li className="list-group-item">
                    <span className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </span>
                    <div className="clear">
                      <span className="block">鸣人</span>
                      <span className="text-muted">终于当上火影了！</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <span className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </span>
                    <div className="clear">
                      <span className="block">佐助</span>
                      <span className="text-muted">吊车尾~~</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <span className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </span>
                    <div className="clear">
                      <span className="block">小樱</span>
                      <span className="text-muted">佐助，你好帅！</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <span className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </span>
                    <div className="clear">
                      <span className="block">雏田</span>
                      <span className="text-muted">
                        鸣人君。。。那个。。。我。。喜欢你..
                      </span>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </Col>
          <Col md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>访问量统计</h3>
                  <small>最近7天用户访问量</small>
                </div>
                <span className="card-tool">
                  <RedoOutlined />
                </span>
                <EchartsViews />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
