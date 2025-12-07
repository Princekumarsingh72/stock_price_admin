import { Button, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";
import { items } from "./action";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("price-request");

  useEffect(() => {
    const path = location.pathname.replace(/^\/+/, "");
    const currentKey = path || "price-request";
    setSelectedTab(currentKey);
  }, [location]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }) => {
    setSelectedTab(key);
    navigate(`/${key}`);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar>
        <Button
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
          title="Collapse"
        >
          {collapsed ? <RiMenu2Fill /> : <RiMenu3Fill />}
        </Button>
      </Navbar>

      {/* Main Layout */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          gap: "8px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            minHeight: "100vh",
            height: "100%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <Menu
            style={{ width: collapsed ? 80 : 250, height: "100%" }}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
            selectedKeys={[selectedTab]}
            defaultOpenKeys={["/"]}
            onSelect={handleMenuClick}
          />
        </div>

        {/* Main Content Area */}
        <div
          style={{
            width: "100%",
            minHeight: "calc(100vh - 75px)",
            height: "100%",
            padding: "40px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
