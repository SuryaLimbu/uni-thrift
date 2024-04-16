"use client";

import React, { useEffect, useState } from "react";
import { deleteCookie } from "cookies-next";
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
  Switch,
  Divider,
} from "@nextui-org/react";
import { PiMagnifyingGlass, PiMoon, PiSun } from "react-icons/pi";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { fetchApiData } from "@/app/lib/fetchData";


// import {AcmeLogo} from "./AcmeLogo.jsx";
interface CategoryInterface {
  id: number;
  categoryName: string;
}
const NavbarUI = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [category, setCategory] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiData("category");
      console.log("category:", data);
      setCategory(data);
    };
    fetchData();
  }, []);

  const menuItems = ["Profile", "Dashboard", "My Settings", "Log Out"];

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("userId");
    router.push("/");
  };

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="py-6">
        <div className="flex flex-col w-full gap-3  justify-between">
          <div className="flex sm:grid sm:grid-cols-3 justify-between items-center w-full">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <div>
              {/* <AcmeLogo /> */}
              <Link className="font-bold text-4xl text-inherit text-teal-600" href="/">
                {process.env.NEXT_PUBLIC_SITE_TITLE}
              </Link>
            </div>
            <div className="hidden sm:flex">
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

            <div className="lg:flex gap-6 justify-end">
              <Switch
                defaultSelected
                size="lg"
                color="primary"
                className="hidden sm:flex"
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <PiSun
                      className={className}
                      onClick={() => setTheme("light")}
                    />
                  ) : (
                    <PiMoon
                      className={className}
                      onClick={() => setTheme("dark")}
                    />
                  )
                }
              ></Switch>

              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="primary"
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
                  <DropdownItem key="team_settings">
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownItem>

                  <DropdownItem key="logout" color="danger" onClick={logout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <NavbarMenu>
            <NavbarMenuItem>
              Profile
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/site/productCollection">Latest Products</Link>
       
            </NavbarMenuItem>
            <Divider className="my-4" />
            <h1 className=" font-bold">Category</h1>
            {category.map((item) => (
              <NavbarMenuItem>
                <Link
                  color="foreground"
                  href={`/site/productCollection/${item.id}`}
                >
                  {item.categoryName}
                </Link>
              </NavbarMenuItem>
            ))}
            <Divider className="my-4" />
          </NavbarMenu>
          <Divider className="hidden sm:flex" />
          <NavbarContent className="hidden sm:flex gap-10 " justify="center">
            {category.map((item) => (
              <NavbarItem>
                <Link
                  color="foreground"
                  href={`/site/productCollection/${item.id}`}
                >
                  {item.categoryName}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </div>
      </Navbar>
    </>
  );
};
export default NavbarUI;
function userState(): [any, any] {
  throw new Error("Function not implemented.");
}
