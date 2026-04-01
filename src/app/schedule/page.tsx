import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule | BK Pilates Raleigh",
  description:
    "View the full class schedule at BK Pilates Raleigh. Book your reformer, mat, and private sessions.",
};

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-secondary/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Find Your Class
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Class Schedule
          </h1>
        </div>
      </section>

      {/* Schedule Embed */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-muted text-lg">
              View available classes and book directly through our scheduling
              system.
            </p>
          </div>

          {/* Mindbody Widget Embed */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  View Full Schedule & Book Online
                </h3>
                <p className="text-muted mb-8 max-w-md mx-auto">
                  Click below to view our real-time class schedule and reserve
                  your spot. Classes fill up quickly!
                </p>
                <a
                  href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  View Schedule & Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Class Types Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Group Reformer",
                time: "Various times daily",
                description:
                  "Our signature group class on reformer machines. Suitable for all levels with modifications offered.",
                level: "All Levels",
              },
              {
                title: "Private Sessions",
                time: "By appointment",
                description:
                  "One-on-one personalized instruction. Book directly or contact us to schedule.",
                level: "All Levels",
              },
              {
                title: "Duet Sessions",
                time: "By appointment",
                description:
                  "Semi-private sessions for two people. Perfect for friends or couples.",
                level: "All Levels",
              },
            ].map((classType) => (
              <div
                key={classType.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {classType.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-1">
                  {classType.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {classType.time}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {classType.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
            Before Your First Class
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                tip: "Arrive 10-15 minutes early",
                detail:
                  "This gives you time to check in, change, and get settled before class begins.",
              },
              {
                tip: "Wear comfortable clothing",
                detail:
                  "Form-fitting activewear works best so your instructor can see your alignment. Grip socks are recommended.",
              },
              {
                tip: "Bring water",
                detail:
                  "Stay hydrated! A water bottle is all you need to bring.",
              },
              {
                tip: "Communicate with your instructor",
                detail:
                  "Let us know about any injuries, limitations, or goals before class starts.",
              },
            ].map((item) => (
              <div
                key={item.tip}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-semibold text-secondary mb-2">
                  {item.tip}
                </h3>
                <p className="text-muted text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
