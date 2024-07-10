"use client";
import Image from "next/image";
import React from "react";
import { IoHome } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { LiaBlogSolid } from "react-icons/lia";
import { SiMaterialformkdocs } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import useAuthLogout from "@/services/auth/useAuthLogout";
import { Button, Tooltip } from "antd";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { mutate: logout, isPending: isLogoutPending } = useAuthLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <section className="fixed md:w-44 w-16 h-screen bg-blue-100 shadow-md shadow-gray-400 z-20">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="border-b border-gray-400 bg-white py-2 md:block hidden">
            <Image
              src={"/assets/logo.png"}
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          {/* mobile screen logo */}
          <div className="border-b border-gray-400 bg-white py-2 md:hidden block">
            <Image
              src={"/assets/short_V_logo.png"}
              alt="Logo"
              width={200}
              height={200}
            />
          </div>

          <div className="hidden md:flex flex-col gap-1 w-full items-center py-4">
            <Link
              href={"/admin"}
              className={classNames(
                "flex gap-4 px-4 items-center py-3 rounded-md w-full",
                {
                  "bg-white": pathname === "/admin" || pathname === "/",
                  "hover:bg-white": pathname !== "/admin" && pathname !== "/",
                }
              )}
              onClick={() => router.push("/admin")}
            >
              <IoHome size={20} />
              <h1 className="md:block hidden">Home</h1>
            </Link>

            <Link
              href={"/admin/blogs"}
              className={classNames(
                "flex gap-4 px-4 items-center py-3 rounded-md w-full",
                {
                  "bg-white": pathname === "/admin/blogs" || pathname === "/",
                  "hover:bg-white":
                    pathname !== "/admin/blogs" && pathname !== "/",
                }
              )}
            >
              <LiaBlogSolid size={20} />
              <h1 className="md:block hidden">Blogs</h1>
            </Link>

            <Link
              href={"/admin/caseStudies"}
              className={classNames(
                "flex gap-4 px-4 items-center py-3 rounded-md w-full",
                {
                  "bg-white":
                    pathname === "/admin/caseStudies" || pathname === "/",
                  "hover:bg-white":
                    pathname !== "/admin/caseStudies" && pathname !== "/",
                }
              )}
            >
              <SiMaterialformkdocs size={20} />
              <h1 className="md:block hidden">Case Studies</h1>
            </Link>
          </div>

          <div className="flex md:hidden flex-col gap-1 w-full items-center py-4">
            <Tooltip title="Home" className="" placement="right">
              <Link
                href={"/admin"}
                className={classNames(
                  "flex gap-4 px-4 items-center py-3 rounded-md w-full",
                  {
                    "bg-white": pathname === "/admin" || pathname === "/",
                    "hover:bg-white": pathname !== "/admin" && pathname !== "/",
                  }
                )}
                onClick={() => router.push("/admin")}
              >
                <IoHome size={20} />
                <h1 className="md:block hidden">Home</h1>
              </Link>
            </Tooltip>

            <Tooltip className="" title="Blogs" placement="right">
              <Link
                href={"/admin/blogs"}
                className={classNames(
                  "flex gap-4 px-4 items-center py-3 rounded-md w-full",
                  {
                    "bg-white": pathname === "/admin/blogs" || pathname === "/",
                    "hover:bg-white":
                      pathname !== "/admin/blogs" && pathname !== "/",
                  }
                )}
              >
                <LiaBlogSolid size={20} />
                <h1 className="md:block hidden">Blogs</h1>
              </Link>
            </Tooltip>

            <Tooltip className="" title="Case Study" placement="right">
              <Link
                href={"/admin/caseStudies"}
                className={classNames(
                  "flex gap-4 px-4 items-center py-3 rounded-md w-full",
                  {
                    "bg-white":
                      pathname === "/admin/caseStudies" || pathname === "/",
                    "hover:bg-white":
                      pathname !== "/admin/caseStudies" && pathname !== "/",
                  }
                )}
              >
                <SiMaterialformkdocs size={20} />
                <h1 className="md:block hidden">Case Studies</h1>
              </Link>
            </Tooltip>
          </div>
        </div>

        <div className="bg-white md:hidden ">
          <Tooltip title="Logout" placement="right">
            <Button
              onClick={() => handleLogout()}
              loading={isLogoutPending}
              type="text"
              danger
              className="w-full h-full py-4"
            >
              <IoLogOut size={25} />
              <h1 className="text-base md:block hidden">Logout</h1>
            </Button>
          </Tooltip>
        </div>

        <div className="bg-white md:block hidden">
          <Button
            onClick={() => handleLogout()}
            loading={isLogoutPending}
            type="text"
            danger
            className="w-full h-full py-4"
          >
            <IoLogOut size={25} />
            <h1 className="text-base md:block hidden">Logout</h1>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
