"use client";

import React from "react";

const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] shadow-md p-1">
      <div
        className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500
         text-white font-[700] flex items-center justify-center"
      >
        <p>PI</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Phares Irungu</p>
        <p className="text-[12px] text-neutral-500">pharesirungu@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
