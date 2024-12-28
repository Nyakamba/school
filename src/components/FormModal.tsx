"use client";

import Image from "next/image";

interface FormModalProps {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

const FormModal = ({ table, type, data, id }: FormModalProps) => {
  const size = type === "create" ? "w-8 h-8" : "mw-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow"
      : type === "update"
      ? "bg-sky"
      : "bg-purple";
  return (
    <>
      <button
        className={`w-7 h-7 ${bgColor} flex items-center justify-center rounded-full ${size}`}
      >
        <Image src={`/${type}.png`} alt={`${type}`} width={16} height={16} />
      </button>
    </>
  );
};

export default FormModal;
