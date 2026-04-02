"use client";

import Image from "next/image";
import ScheduleCalendar from "@/components/ScheduleCalendar";

export default function SchedulePage() {
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
            Pick a date on the calendar to see classes. Book your spot directly!
          </p>
        </div>
      </section>

      {/* Calendar + Schedule */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScheduleCalendar />

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
