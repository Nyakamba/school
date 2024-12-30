import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3 ">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row   gap-4">
          {/* user into card */}
          <div className="bg-sky py-6 px-4  rounded-md flex-1 flex items-center gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=2400"
                alt="student"
                width={100}
                height={100}
                className="w-20 md:w-28 h-20 md:h-28 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Cameron Wright</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between flex-wrap text-xs font-medium gap-2">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>AB+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="blood" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="blood" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="blood" width={14} height={14} />
                  <span>1 234 456 789</span>
                </div>
              </div>
            </div>
          </div>

          {/* small cards */}
          <div className="flex-1 flex justify-between flex-wrap gap-4">
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-45% 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-45% 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="branch"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-45% 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="lesson"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-45% 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="class"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white p-4 rounded-md h-[800px]">
          <h1>Student &#39;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className=" text-lg font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href="/" className="p-3 rounded-md bg-skyLight">
              Student &#39;s Lessons
            </Link>
            <Link
              href={`/list/teachers?classId=${2} `}
              className="p-3 rounded-md bg-purpleLight"
            >
              Student &#39;s Teachers
            </Link>
            <Link href="/" className="p-3 rounded-md bg-yellowLight">
              Student &#39;s Results
            </Link>{" "}
            <Link href="/" className="p-3 rounded-md bg-pink-50">
              Student &#39;s Exams
            </Link>{" "}
            <Link href="/" className="p-3 rounded-md bg-skyLight">
              Student &#39;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
