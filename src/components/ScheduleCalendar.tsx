"use client";

import { useState, useMemo } from "react";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface ClassSlot {
  time: string;
  name: string;
  instructor: string;
}

const WEEKLY_CLASSES: Record<number, ClassSlot[]> = {
  0: [
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
  ],
  1: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Marina" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Julia" },
  ],
  2: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Marina" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Marina" },
  ],
  3: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Marina" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Julia" },
  ],
  4: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Marina" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Marina" },
  ],
  5: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Marina" },
  ],
  6: [
    { time: "8:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "9:15 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:30 AM", name: "Group Reformer", instructor: "Marina" },
  ],
};

function getWeekDates(baseDate: Date): Date[] {
  const dates: Date[] = [];
  const day = baseDate.getDay();
  const monday = new Date(baseDate);
  monday.setDate(baseDate.getDate() - ((day + 6) % 7));
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d);
  }
  return dates;
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isToday(d: Date) {
  return isSameDay(d, new Date());
}

export default function ScheduleCalendar() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const baseDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + weekOffset * 7);
    return d;
  }, [weekOffset]);

  const weekDates = useMemo(() => getWeekDates(baseDate), [baseDate]);
  const classes = WEEKLY_CLASSES[selectedDate.getDay()] || [];

  const weekLabel = useMemo(() => {
    const start = weekDates[0];
    const end = weekDates[6];
    if (start.getMonth() === end.getMonth()) {
      return `${MONTH_NAMES[start.getMonth()]} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
    }
    return `${MONTH_NAMES[start.getMonth()]} ${start.getDate()} - ${MONTH_NAMES[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
  }, [weekDates]);

  return (
    <div>
      {/* Week Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setWeekOffset((w) => w - 1)}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center">
          <h3 className="text-xl font-bold text-secondary">{weekLabel}</h3>
          {weekOffset !== 0 && (
            <button
              onClick={() => { setWeekOffset(0); setSelectedDate(new Date()); }}
              className="text-xs text-primary font-medium mt-1 hover:underline"
            >
              Back to today
            </button>
          )}
        </div>
        <button
          onClick={() => setWeekOffset((w) => w + 1)}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {weekDates.map((date, i) => {
          const selected = isSameDay(date, selectedDate);
          const today = isToday(date);
          const dayClasses = WEEKLY_CLASSES[date.getDay()] || [];
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(new Date(date))}
              className={`relative rounded-2xl p-4 text-center transition-all duration-200 ${
                selected
                  ? "bg-primary text-white shadow-lg scale-105"
                  : today
                    ? "bg-white border-2 border-primary text-secondary"
                    : "bg-white border border-gray-100 text-secondary hover:border-primary/50"
              }`}
            >
              <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${
                selected ? "text-white/80" : "text-muted"
              }`}>
                {SHORT_DAYS[date.getDay()]}
              </p>
              <p className={`text-2xl font-bold mb-1 ${selected ? "text-white" : ""}`}>
                {date.getDate()}
              </p>
              <p className={`text-[10px] ${selected ? "text-white/70" : "text-muted"}`}>
                {dayClasses.length} classes
              </p>
              {today && !selected && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Day Classes */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-secondary text-white flex items-center justify-between">
          <h3 className="font-bold text-lg">
            {DAY_NAMES[selectedDate.getDay()]}, {MONTH_NAMES[selectedDate.getMonth()]} {selectedDate.getDate()}
          </h3>
          <span className="text-sm text-gray-400">{classes.length} classes</span>
        </div>
        <div className="divide-y divide-gray-100">
          {classes.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-muted">No classes scheduled for this day.</p>
            </div>
          ) : (
            classes.map((cls, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-5 hover:bg-background transition-colors">
                <div className="flex items-center gap-5">
                  <div className="w-20 text-right">
                    <p className="font-bold text-secondary text-sm">{cls.time}</p>
                  </div>
                  <div className="w-px h-10 bg-primary/30" />
                  <div>
                    <p className="font-semibold text-secondary">{cls.name}</p>
                    <p className="text-sm text-muted">with {cls.instructor}</p>
                  </div>
                </div>
                <a
                  href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md"
                >
                  Book
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
