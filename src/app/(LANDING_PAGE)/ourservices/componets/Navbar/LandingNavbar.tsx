import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
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
import { VscClose } from "react-icons/vsc";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  ArticlesLinks,
  IndustriesLinks,
  ServicesLinks,
} from "@/app/ui/navbar/Navlinks";
import ResponsiveMenu from "@/app/ui/navbar/ResponsiveMenu";
import { useRouter } from "next/navigation";

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

  function cn(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }

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

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const LandingNavbar: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const [scrolling, setScrolling] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed z-50 w-full flex px-4 py-2 text-white justify-between items-center 
          bg-gradient-to-r from-white transition-all duration-300 
          ${visible ? "top-0" : "-top-full"}
          ${
            scrolling ? " via-gray-500 to-black" : "via-transparent to-transparent"
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
              {/* About page */}
              <NavigationMenuItem>
                <Link
                  href="/about"
                  aria-label="About link"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className="bg-transparent px-4 h-full"
                    onClick={closeMenu}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/*Services dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger aria-label="Services dropdown" className="bg-transparent">
                  <Link href={"/services"}>Services</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] bg-white text-black relative right-0 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
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
                <NavigationMenuTrigger aria-label="Insights dropdown" className="bg-transparent">
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] bg-white text-black  relative right-0 gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
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
                <NavigationMenuTrigger aria-label="Industries dropdown" className="bg-transparent">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] bg-white text-black  relative right-0 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
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

              {/* Contact page */}
              <NavigationMenuItem>
                <button onClick={() => setShowModal(true)}>
                  <NavigationMenuLink
                    className={
                      "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
                    }
                    onClick={closeMenu}
                    aria-label="Contact link"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </button>
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

export default LandingNavbar;
