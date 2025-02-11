"use client";

import { Navbar, NavItem, Button } from "@first-apps/shared/components";

export const Sidebar = () => {
  return (
    <Navbar>
      <Button>Test</Button>
      <NavItem to="/">Your Streams</NavItem>
      <NavItem to="/streams">Manage Streams</NavItem>
    </Navbar>
  );
};
