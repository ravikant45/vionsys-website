"use client";
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Industries, ServicesLinks } from "./Navlinks";
import { VscClose } from "react-icons/vsc"
import { HiMenuAlt1 } from "react-icons/hi"
import ResponsiveMenu from "./ResponsiveMenu"
import { useRouter } from "next/navigation";

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    href: string;
}


const ListItem: React.FC<ListItemProps> = ({ className, title, children, href }) => {
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
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </div>
            </NavigationMenuLink>
        </li>
    );
};


const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const [scrolling, setScrolling] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className="overflow-x-hidden">
            <div className={`fixed z-50 w-[100vw] flex p-1 justify-between items-center  ${scrolling ? 'bg-white' : 'bg-white'}`}>
                {/* Logo of the organization */}
                <div className="px-4">
                    <img src="https://www.vionsys.com/public/assets/img/logo_3.png" alt="" />
                </div>

                {/* Nav menus */}
                <div className="py-2 md:block hidden px-4">
                    <NavigationMenu>
                        <NavigationMenuList >
                            {/* Home page */}
                            <NavigationMenuItem >
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* About page */}
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/*Services dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] relative right-0 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                                        {ServicesLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {/* {component.description} */}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>


                            {/*Industries dropdown */}
                            <NavigationMenuItem>
                                <Link href="/industries" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Industries
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>


                            {/* Career Page */}
                            <NavigationMenuItem>
                                <Link href="/career" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Career
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* Contact page */}
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden block text-4xl cursor-pointer">
                    {
                        !showMenu ? <HiMenuAlt1 onClick={() => toggleMenu()} /> : <VscClose onClick={() => toggleMenu()} />
                    }
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} />
        </div>
    )
}

export default Navbar;
