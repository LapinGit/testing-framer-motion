"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "New Jeans", url: "/newjeans" },
  { id: 3, title: "Kanye West", url: "/kanyewest" },
  { id: 4, title: "Leejin Ah", url: "/leejinah" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />

      {open && (
        <div className="bg-black text-white absolute left-0 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
