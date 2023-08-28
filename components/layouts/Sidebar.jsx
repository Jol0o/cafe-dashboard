"use client";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-btns">
        <h2>Dashboard</h2>
        <Link href="/">
          <Button variant="secondary">
            <AiOutlineUser /> <h1>Users</h1>
          </Button>
        </Link>
        <Link href="/product">
          <Button variant="secondary">
            <MdOutlineProductionQuantityLimits /> <h1>Products</h1>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
