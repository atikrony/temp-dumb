import React from "react";
import Image from "next/image";

const messages = [
  {
    id: 1,
    text: "Hi Sami 👋",
    sender: "other",
    time: "10:30 AM",
  },
  {
    id: 2,
    text: "Your payment procedure is ok now.",
    sender: "other",
    time: "10:31 AM",
  },
  {
    id: 3,
    text: "Thank you for your service. I need to know more about your next upcoming course.",
    sender: "user",
    time: "10:32 AM",
    showAvatar: true,
  },
  {
    id: 4,
    text: "Glad to help you. Which Course ?",
    sender: "other",
    time: "10:33 AM",
  },
  {
    id: 5,
    text: "Welcome",
    sender: "user",
    time: "10:34 AM",
    showAvatar: false,
  },
  {
    id: 6,
    text: "Biology | HSC 2027 | BH Troops | Cycle 1/6",
    sender: "user",
    time: "10:34 AM",
    showAvatar: true,
  },
  {
    id: 7,
    text: "The class will start this upcoming Monday.",
    sender: "other",
    time: "10:35 AM",
  },
  {
    id: 8,
    text: "Do I get any discount ?",
    sender: "user",
    time: "10:36 AM",
    showAvatar: false,
  },
  {
    id: 9,
    text: "Since I am already taking two courses at your organization.",
    sender: "user",
    time: "10:36 AM",
    showAvatar: true,
  },
  {
    id: 10,
    text: "I will let you know tomorrow.",
    sender: "other",
    time: "10:37 AM",
  },
];

export const ChatInterface = () => {
  return (
    <div className="flex flex-col h-screen max-w-[430px] mx-auto bg-[#F5F5F5]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/01dp.jpg"
              alt="Adnan Sami"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <h2 className="text-[16px] font-semibold text-gray-900">
            Adnan Sami
          </h2>
        </div>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
          <svg
            width="4"
            height="16"
            viewBox="0 0 4 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" r="2" fill="#6B7280" />
            <circle cx="2" cy="8" r="2" fill="#6B7280" />
            <circle cx="2" cy="14" r="2" fill="#6B7280" />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2 ${
              message.sender === "other" ? "justify-end" : "justify-start"
            }`}
          >
            {/* Avatar for user messages */}
            {message.sender === "user" && (
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 self-end mb-0.5">
                {message.showAvatar ? (
                  <Image
                    src="/01dp.jpg"
                    alt="User"
                    width={28}
                    height={28}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-7 h-7"></div>
                )}
              </div>
            )}

            {/* Message Bubble */}
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                message.sender === "other"
                  ? "bg-[#2C2C2C] text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
              }`}
            >
              <p className="text-[14px] leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200">
            <input
              type="text"
              placeholder="Write your message..."
              className="flex-1 bg-transparent text-[14px] text-gray-700 placeholder-gray-400 outline-none"
            />
            <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                  fill="currentColor"
                />
                <path
                  d="M7 7c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zM15 7c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zM14.5 12h-9c-.276 0-.5.224-.5.5 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-.276-.224-.5-.5-.5z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 8.5l-6-6c-.281-.281-.719-.281-1 0l-10 10c-.094.094-.156.219-.188.344l-1 5c-.062.313.031.641.25.859.187.187.438.281.688.281.062 0 .125 0 .188-.016l5-1c.125-.031.25-.094.344-.187l10-10c.281-.282.281-.72 0-1.001zM5.344 13.656l-2.406-2.406 7.5-7.5 2.406 2.406-7.5 7.5zm-1.875.563l1.969 1.969-2.672.531.703-2.5zm13.219-8.625l-1.031 1.031-2.406-2.406 1.031-1.031 2.406 2.406z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <button className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#2C2C2C] text-white rounded-lg hover:bg-[#3C3C3C] transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.75 1.5c.141 0 .25.109.25.25v.5c0 .078-.031.156-.094.219l-8.406 8.406v7.375c0 .188-.219.313-.406.219l-3-1.5c-.094-.047-.156-.141-.156-.25v-5.844L.531 2.469C.469 2.406.438 2.328.438 2.25v-.5c0-.141.109-.25.25-.25h19.062z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
