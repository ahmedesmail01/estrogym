import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spin size="default" indicator={<LoadingOutlined spin />} />
    </div>
  );
};

export default Loading;
