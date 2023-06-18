"use client";

import { EmailCard } from "../components/EmailCard";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">Resend + react email sample</h1>

      <div className="mt-4 flex flex-col gap-4">
        <EmailCard
          title="招待されました"
          body={<p>testtest</p>}
          onClick={console.log}
        />
      </div>
    </div>
  );
}
