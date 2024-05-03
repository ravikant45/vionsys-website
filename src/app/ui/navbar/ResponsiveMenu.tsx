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
import { ServicesLinks } from "./Navlinks";

const ResponsiveMenu = ({ showMenu }: any) => {
    return (
        <div className={`${showMenu ? 'top-14 md:hidden' : 'hidden'} fixed w-full z-50 bg-white h-[50vh] flex items-center justify-center py-6 border-b shadow-md`}>
            <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-4">
                    {/* Home section */}
                    <NavigationMenuItem>
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

                    {/* services dropdown */}
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none flex justify-center items-center gap-2">Services<IoChevronForwardOutline /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {ServicesLinks.map((link) => (
                                    <Link href={link.href} key={link.title}><DropdownMenuItem>{link.title}</DropdownMenuItem></Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>

                    {/* industries dropdown */}
                    <NavigationMenuItem>
                        <Link href="/industries" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Industries
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Career page */}
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
    );
};

export default ResponsiveMenu;
