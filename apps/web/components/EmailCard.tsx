import { ReactNode } from "react";

type Props = {
  title: string;
  body: ReactNode;
  onClick: () => void;
};

export const EmailCard = ({ title, body, onClick }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <p>{title}</p>
      {body}
      <div className="flex justify-end">
        <button
          className="bg-purple-800 text-white rounded-md py-1 px-3 shadow-md"
          onClick={onClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};
