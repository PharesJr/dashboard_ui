"use client";

import React from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import {
  BellRing,
  GlobeLock,
  Inbox,
  ScrollText,
  Settings,
  SettingsIcon,
  User,
  Wallet,
} from "lucide-react";
import UserItem from "./UserItem";
import Link from "next/link";

const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User className="h-5 w-5" />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox className="h-5 w-5" />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <Wallet className="h-5 w-5" />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <BellRing className="h-5 w-5" />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings className="h-5 w-5" />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <GlobeLock className="h-5 w-5" />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <ScrollText className="h-5 w-5" />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-3 w-[300px] min-w-[300px] p-4 min-h-screen border-r">
      <div>
        <UserItem name="Phares Irungu" description="pharesirungu@gmail.com"/>
      </div>
      <div className="grow">
        <Command
          className="rounded-lg border shadow-md min-h-[320px]"
          style={{ overflow: "visible" }}
        >
          <CommandList style={{ overflow: "visible" }} className="text-[20px]">
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem key={optionKey} className="flex gap-2">
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <Link href="/team" className="flex items-center gap-2">
        <SettingsIcon className="h-5 w-5" />
        <span>Team settings</span>
      </Link >
    </div>
  );
};

export default Sidebar;
