import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import Link from "next/link";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Pageout() {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaCss3Alt />}>
          <Link href={"/"}>Dashboard</Link>
        </MenuItem>
        <SubMenu title="study" icon={<FaCss3Alt />}>
          <MenuItem icon={<FaCss3Alt />}>
            <Link href={"/study/dog"}>dog</Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/study/formik"}>formilk</Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/study/video"}>video</Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/study/qrcode"}>qrcode</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
export default Pageout;
