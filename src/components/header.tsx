"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "./ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./ui/drawer";
import { Icons } from "@/components/icons";
import { Menu } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

function Header() {
    const [scrollHeader, setScrollHeader] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 50) {
            setScrollHeader(true);
        } else {
            setScrollHeader(false);
        }
    });

    return (
        <header
            className={cn(
                "fixed left-0 top-0 z-50 w-full bg-background transition-shadow",
                scrollHeader && "shadow-[0_4px_16px_hsla(22,100%,8%,0.1)]",
            )}
        >
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    <Link
                        className="flex items-center gap-x-2 font-aclonica text-heading"
                        href="/"
                    >
                        <div className="bg-primary p-[6px] rounded-lg">
                            <Icons.logo className="w-5 h-5" />
                        </div>
                        Burgers
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-x-8">
                            <li>
                                <Link
                                    className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                    href=""
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                    href=""
                                >
                                    Recipe
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                    href=""
                                >
                                    Popular
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                    href=""
                                >
                                    Delivery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                    href=""
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button
                                className="md:hidden"
                                variant="ghost"
                                size="icon"
                            >
                                <Menu className="w-5 h-5 text-heading" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <VisuallyHidden.Root>
                                <DrawerHeader>
                                    <DrawerTitle></DrawerTitle>
                                    <DrawerDescription></DrawerDescription>
                                </DrawerHeader>
                            </VisuallyHidden.Root>
                            <nav className="pt-[4.5rem] pb-[3.5rem]">
                                <ul className="flex flex-col items-center gap-y-8">
                                    <li>
                                        <Link
                                            className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                            href=""
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                            href=""
                                        >
                                            Recipe
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                            href=""
                                        >
                                            Popular
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                            href=""
                                        >
                                            Delivery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="relative text-heading font-aclonica after:w-[0] after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-[width] hover:after:w-[60%]"
                                            href=""
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    );
}

export default Header;
