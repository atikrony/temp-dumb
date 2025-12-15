import React from "react";
import Image from "next/image";

const chatList = [
  {
    id: 1,
    name: "Adnan Sami",
    time: "5m",
    message: "You: I will let you know tomorrow.",
    avatar: "/01dp.jpg",
    unread: false,
  },
  {
    id: 2,
    name: "Ibrahim Yakub",
    time: "2m",
    message: "Sir, ajke rate ki amader class...",
    avatar: "/01dp.jpg",
    unread: true,
  },
  {
    id: 3,
    name: "Saad Ziaul Hasan",
    time: "14m",
    message: "Sir, ami ki ajker session-er link ta...",
    avatar: "/01dp.jpg",
    unread: true,
  },
  {
    id: 4,
    name: "Tamima Sultana",
    time: "1h",
    message: "Assignment-er deadline ta ektu e...",
    avatar: "/01dp.jpg",
    unread: false,
  },
  {
    id: 5,
    name: "Aponra Khatun",
    time: "6h",
    message: "Ajker recorded class ta ki pore up...",
    avatar: "/01dp.jpg",
    unread: false,
  },
  {
    id: 6,
    name: "Shovon Chandra Das",
    time: "1d",
    message: "Ei chapter-er quiz ta ki ajkei nite h...",
    avatar: "/01dp.jpg",
    unread: false,
  },
  {
    id: 7,
    name: "Farhan Mahbub",
    time: "1d",
    message: "Sir, ami ki ajker session-er link ta...",
    avatar: "/01dp.jpg",
    unread: false,
  },
];

export const ChatUserCard = () => {
  return (
    <div className="w-[280px] bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <h2 className="text-[18px] font-semibold text-gray-900">Chat</h2>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-md transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.333 2L14 4.667 8.667 10H6v-2.667L11.333 2zM12.667 0.667L14.863 2.863a1 1 0 010 1.414L6.5 12.667H2v-4.5L10.363 0.167a1 1 0 011.414 0l0.89 0.89z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-100">
        <button className="text-[14px] font-medium text-[#22B8F4] border-b-2 border-[#22B8F4] pb-1">
          All
        </button>
        <button className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
          Unread
        </button>
        <button className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
          Workplace Chat
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 text-[14px] text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22B8F4] focus:border-transparent transition-all"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto h-[450px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0"
          >
            {/* Top row: avatar, name, time */}
            <div className="flex items-center gap-3 mb-1">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={chat.avatar}
                  alt={chat.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-semibold text-[15px] text-gray-900 flex-1 truncate">
                {chat.name}
              </span>
              <span className="text-[13px] text-gray-500 flex-shrink-0">
                {chat.time}
              </span>
            </div>

            {/* Bottom row: message and unread indicator */}
            <div className="flex items-center gap-2 ml-[52px]">
              <span className="text-[14px] text-gray-600 flex-1 truncate leading-snug">
                {chat.message}
              </span>
              {chat.unread && (
                <span className="w-2.5 h-2.5 bg-[#22B8F4] rounded-full flex-shrink-0"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
