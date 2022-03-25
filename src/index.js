import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { PageHeader, Button, Descriptions } from "antd";

ReactDOM.render(
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="凯帆"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary1111
        </Button>
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>,
  document.getElementById("container")
);
