"use client";

import React from "react";

const UserItemTeams = ({name, description}: {name: string, description: string}) => {
  return (
    <div className="flex items-center justify-between gap-2 p-1 min-w-[250px]">
      <div
        className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500
         text-white font-[700] flex items-center justify-center"
      >
        <p>PI</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">{name}</p>
        <p className="text-[12px] text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

export default UserItemTeams;
