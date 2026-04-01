"use client";

import { useState } from "react";
import Image from "next/image";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SCHEDULE: Record<string, { time: string; name: string; instructor: string; spots?: string }[]> = {
  Monday: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Marina", spots: "3 left" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Marina", spots: "2 left" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Julia" },
  ],
  Tuesday: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Marina" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Julia", spots: "4 left" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Marina" },
  ],
  Wednesday: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Marina" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Julia", spots: "5 left" },
  ],
  Thursday: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Marina" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "6:45 PM", name: "Group Reformer", instructor: "Marina" },
  ],
  Friday: [
    { time: "6:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "12:00 PM", name: "Group Reformer", instructor: "Julia" },
    { time: "5:30 PM", name: "Group Reformer", instructor: "Marina" },
  ],
  Saturday: [
    { time: "8:00 AM", name: "Group Reformer", instructor: "Marina" },
    { time: "9:15 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:30 AM", name: "Group Reformer", instructor: "Marina" },
  ],
  Sunday: [
    { time: "9:00 AM", name: "Group Reformer", instructor: "Julia" },
    { time: "10:15 AM", name: "Group Reformer", instructor: "Marina" },
  ],
};

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState(
    DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]
  );

  const classes = SCHEDULE[selectedDay] || [];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-secondary/80 z-10" />
        <div className="absolute inset-0 opacity-30">
          <Image src="/hero3.png" alt="BK Pilates Schedule" fill className="object-cover" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Find Your Class
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Class Schedule
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            View available classes and book your spot directly. Classes fill up quickly!
          </p>
        </div>
      </section>

      {/* Full Calendar Schedule */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Day Tabs */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedDay === day
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-muted border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Classes List */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-secondary text-white flex items-center justify-between">
              <h2 className="font-bold text-lg">{selectedDay}</h2>
              <span className="text-sm text-gray-400">{classes.length} classes</span>
            </div>
            <div className="divide-y divide-gray-100">
              {classes.map((cls, i) => (
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
                  <div className="flex items-center gap-4">
                    {cls.spots && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {cls.spots}
                      </span>
                    )}
                    <a
                      href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md"
                    >
                      Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live schedule link */}
          <div className="mt-8 bg-accent rounded-2xl p-8 text-center">
            <p className="text-muted mb-4">
              For the most up-to-date schedule and real-time availability, view our live schedule on Mindbody.
            </p>
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg"
            >
              View Live Schedule on Mindbody
            </a>
          </div>
        </div>
      </section>

      {/* Class Types + Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Class Types */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Class Types</h2>
              <div className="space-y-4">
                {[
                  { title: "Group Reformer", desc: "Our signature group class on reformer machines. Suitable for all levels.", time: "Various times daily" },
                  { title: "Private Sessions", desc: "One-on-one personalized instruction. Book directly or contact us.", time: "By appointment" },
                  { title: "Duet Sessions", desc: "Semi-private sessions for two. Perfect for friends or couples.", time: "By appointment" },
                ].map((c) => (
                  <div key={c.title} className="bg-background rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-secondary">{c.title}</h3>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{c.time}</span>
                    </div>
                    <p className="text-muted text-sm">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Before Your First Class</h2>
              <div className="space-y-4">
                {[
                  { tip: "Arrive 10-15 minutes early", detail: "Time to check in, change, and get settled." },
                  { tip: "Wear comfortable clothing", detail: "Form-fitting activewear so instructors can see alignment. Grip socks recommended." },
                  { tip: "Bring water", detail: "Stay hydrated! A water bottle is all you need." },
                  { tip: "Communicate with your instructor", detail: "Let us know about injuries, limitations, or goals." },
                ].map((item) => (
                  <div key={item.tip} className="bg-background rounded-xl p-5 border border-gray-100">
                    <h3 className="font-semibold text-secondary mb-1">{item.tip}</h3>
                    <p className="text-muted text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
