"use client";

import WelcomeEmail from "@/email/emails/welcome";
import { render } from "@react-email/components";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("Taro Tanaka");

  return (
    <main className="flex flex-col items-center justify-between p-4">
      <h1 className="text-2xl font-extrabold mb-8">
        Resend + react.email Sample
      </h1>

      <div className="bg-white w-1/2 flex flex-col gap-2 shadow-lg rounded-lg border border-slate-200 p-4">
        <div className="mb-1">
          <span className="rounded-md text-xs bg-slate-200 py-0.5 px-2 m-1">
            送信先
          </span>
          <input
            className="border border-slate-300 rounded-md py-0.5 px-2 min-w-[240px] text-sm"
            placeholder="receiver-address@example.com"
          />
        </div>

        <div>
          <span className="rounded-md text-xs bg-slate-200 py-0.5 px-2 m-1">
            タイトル
          </span>
          <h2 className="text-lg font-bold inline mb-1">
            <WelcomeEmail.title username={username} />
          </h2>
        </div>
        <hr />
        <div className="p-1">
          <span className="rounded-md text-xs bg-slate-200 py-0.5 px-2 m-1">
            本文
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: render(<WelcomeEmail.body username={username} />),
            }}
          />
        </div>

        <div className="border border-slate-200 mt-4 mb-2 p-2 rounded-md">
          <p className="text-lg font-bold">Parameters</p>

          <label className="text-xs font-thin">username</label>
          <input
            className="block border border-slate-300 rounded-md py-1 px-2"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="flex justify-end items-center gap-2 mt-2 text-sm">
            <button className="rounded-md bg-purple-800 text-white py-1 px-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
