import React, { ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const Providers = ({ children }: { children: ReactNode }) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};

export default Providers;
