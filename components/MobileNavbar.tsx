"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="hamburger"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image src={"/icons/logo.svg"} width={34} height={34} alt="Logo" />
            <h1 className="text-[26px] font-ibm-plex-serif font-black text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    link.route == pathName ||
                    pathName.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bankGradient": isActive,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={link.imgURL}
                            width={20}
                            height={20}
                            alt={link.label}
                            className={cn("", {
                              "invert-0 brightness-[3]": isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn("text-16 font-semibold text-black-2 ", {
                            "text-white": isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
