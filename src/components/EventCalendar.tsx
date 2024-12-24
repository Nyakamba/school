"use client";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalendar;
