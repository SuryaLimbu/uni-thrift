"use client";

import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { PiMagnifyingGlass } from "react-icons/pi";

// import {AcmeLogo} from "./AcmeLogo.jsx";

const NavbarUI = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="py-6">
        <div className="flex flex-col w-full gap-3  justify-between">
          <div className="grid grid-cols-3 justify-between items-center w-full">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <div>
              {/* <AcmeLogo /> */}
              <Link className="font-bold text-inherit" href="/">UniExchangeMarket</Link>
            </div>
            <div>
              <Input
                classNames={{
                  base: "max-w-full h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/10 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<PiMagnifyingGlass size={18} />}
                type="search"
              />
            </div>

            <div className="hidden lg:flex gap-6 justify-end">
              <Link href="#">Login</Link>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings"><Link href="/dashboard">Dashboard</Link></DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
          <hr className="hidden sm:flex" />
          <NavbarContent className="hidden sm:flex gap-10 " justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Book
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Electronic
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Clothing
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Furniture
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Stationary
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>
    </>
  );
};
export default NavbarUI;
