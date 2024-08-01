import * as React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IoChevronForwardOutline } from "react-icons/io5";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ServicesLinks, ArticlesLinks, IndustriesLinks } from "./Navlinks";
interface Props {
    showMenu: boolean;
    closeMenu: () => void;
}
const ResponsiveMenu: React.FC<Props> = ({ showMenu, closeMenu }) => {
    const handleClick = () => {
        closeMenu();
    };
    return (
        <div className={`${showMenu ? 'top-14 md:hidden' : 'hidden'} fixed w-[100vw] overflow-x-hidden z-50 bg-white h-[50vh] flex items-center justify-center py-6 border-b shadow-md`}>
            <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-4">
                    {/* Home section */}
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* About page */}
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* services dropdown */}
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none flex justify-center items-center gap-2">Services<IoChevronForwardOutline /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {ServicesLinks.map((link) => (
                                    <Link href={link.href} key={link.title}><DropdownMenuItem onClick={handleClick}>{link.title}</DropdownMenuItem></Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>
                    
                    {/* Articles dropdown */}
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none flex justify-center items-center gap-2">Insights<IoChevronForwardOutline /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {ArticlesLinks.map((link) => (
                                    <Link href={link.href} key={link.title}><DropdownMenuItem onClick={handleClick}>{link.title}</DropdownMenuItem></Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>

                    {/* industries dropdown */}
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none flex justify-center items-center gap-2">Industries<IoChevronForwardOutline /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {IndustriesLinks.map((link) => (
                                    <Link href={link.href} key={link.title}><DropdownMenuItem onClick={handleClick}>{link.title}</DropdownMenuItem></Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>

                    {/* Career page */}
                    <NavigationMenuItem>
                        <Link href="/career" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                Career
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Contact page */}
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default ResponsiveMenu;
