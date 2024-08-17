"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LogoImage from "/public/assets/logo.png";
import { ArticlesLinks, IndustriesLinks, ServicesLinks } from "./Navlinks";
import { VscClose } from "react-icons/vsc";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
  className,
  title,
  children,
  href,
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          onClick={handleClick}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <div
        className={`fixed z-50 w-[100vw] flex p-2 justify-between items-center bg-white  ${
          visible ? "top-0 shadow-md shadow-gray2" : "-top-full"
        }`}
      >
        {/* Logo of the organization */}
        <div className="px-4">
          <Link href="/" aria-label="Home link">
            <Image src={LogoImage} alt="Home-link" className="w-[152px]" />
          </Link>
        </div>

        {/* Nav menus */}
        <div className="py-2 md:block hidden px-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home page */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={closeMenu}
                    aria-label="Home link"
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* About page */}
              <NavigationMenuItem>
                <Link
                  href="/about"
                  aria-label="About link"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={closeMenu}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/*Services dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger aria-label="Services dropdown">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] relative right-0 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                    {ServicesLinks?.map((component) => (
                      <ListItem
                        className="hover:cursor-pointer"
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        aria-label={component.ariaLabel}
                      >
                        {/* {component.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* articles links */}
              <NavigationMenuItem>
                <NavigationMenuTrigger aria-label="Insights dropdown">
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] relative right-0 gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                    {ArticlesLinks.map((component) => (
                      <ListItem
                        className="hover:cursor-pointer"
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        aria-label={component.ariaLabel}
                      >
                        {/* {component.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/*Industries dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger aria-label="Industries dropdown">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] relative right-0 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                    {IndustriesLinks.map((component) => (
                      <ListItem
                        className="hover:cursor-pointer"
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        aria-label={component.ariaLabel}
                      >
                        {/* {component.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Career Page */}
              <NavigationMenuItem>
                <Link href="/career" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={closeMenu}
                    aria-label="Career link"
                  >
                    Career
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contact page */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={closeMenu}
                    aria-label="Contact link"
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden block text-4xl cursor-pointer">
          {!showMenu ? (
            <HiMenuAlt1 onClick={() => toggleMenu()} aria-label="Open menu" />
          ) : (
            <VscClose onClick={() => toggleMenu()} aria-label="Close menu" />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;
