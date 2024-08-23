"use client";

import React, { useState } from "react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import { BellRing } from "lucide-react";

// dropdown menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [notifications, setNotification] = useState<any>([
    {
      text: "This is a notification",
      date: "18-8-2024",
      read: true,
    },
    {
      text: "This is another notification",
      date: "13-9-2024",
      read: false,
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-3 border-r p-4 border-b">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="relative" variant="outline" size="icon">
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <BellRing className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="p-1 hover:bg-neutral-50 transition flex items-start gap-1"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p className="text.xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
