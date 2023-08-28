"use client";

import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

function Header() {
  const logout = async () => {
    try {
      const result = await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="header-container">
    
      <div className="dashboard-nav">
        
          <h4>Café Urban</h4>
        
        <>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Button variant="dark">Profile</Button>
                  <Button variant="dark">Settings</Button>
                  <Button variant="dark" onClick={logout}>
                    Logout
                  </Button>
                </Popover.Body>
              </Popover>
            }
          >
            <Image
              src="https://res.cloudinary.com/dkibnftac/image/upload/v1690208728/deku_ggqhox.jpg"
              alt="user"
              width={45}
              height={45}
            />
          </OverlayTrigger>
        </>
      </div>
    </div>
  );
}

export default Header;
