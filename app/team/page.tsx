"use client";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import UserItemTeams from "@/components/UserItemTeams";
import React, { useState } from "react";

type Member = {
  email: string;
  full_name: string;
  role: string;
};

const TeamSettings = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      email: "wTqyB@example.com",
      full_name: "Phares Irungu",
      role: "admin",
    },
    {
      email: "ahksakcbkjab@example.com",
      full_name: "John Doe",
      role: "user",
    },
    {
      email: "iwnklkanklka@example.com",
      full_name: "Phares Irungu",
      role: "user",
    },
    {
      email: ";llcsanncak@example.com",
      full_name: "John Doe",
      role: "user",
    },
  ]);

  return (
    <div className="grid gap-4">
      <header>
        <h2 className="text-[32px] font-[700]">Team Settings</h2>
      </header>
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <Command className="rounded-lg border md:min-w-[450px]">
            <CommandInput
              className="border-none"
              placeholder="Type an email to invite..."
            />
          </Command>
          <Button variant="secondary">Add a new member</Button>
        </div>
        <div className="border rounded p-1">
          {members.map((member: Member, key: number) => (
            <div
              key={key}
              className="flex items-center justify-between gap-2 p-2 border-b last:border-b-0"
            >
              <UserItemTeams
                name={member.full_name}
                description={member.email}
              />
              <Button variant="ghost">Action</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSettings;
