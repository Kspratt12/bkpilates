"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const BUSINESS_INFO = `You are a helpful assistant for BK Pilates Raleigh. Answer questions accurately based on the following information:

ABOUT:
BK Pilates Raleigh brings mind-body connection to the Raleigh community. We believe in true self-love without pressure. True self-care isn't a race for perfection, but a process of joy. We provide a space and community promoting overall wellness, mindfulness and stress relief.

MISSION:
Our mission is to empower clients through small, sustainable changes. BK Pilates emphasizes body positivity and holistic health, maintaining our focus on enabling individuals to live healthy and happy lifestyles.

FOUNDERS:
- Marina Kaydanova (Founder): After falling in love with pilates through classes and workshops, Marina left the corporate world. She opened the first BK Pilates studio in Brooklyn, NY in 2012. Today, she is able to pursue her passion full time, teaching the life-changing practice of pilates.
- Julia Davis (Co-Founder): A Raleigh local and entrepreneur, has been a long-time student and teacher of pilates and yoga in addition to her successful career in real estate and hospitality. Julia is BASI Mat and Balanced Body Mat + Reformer certified.

FOUNDERS' STORY:
Julia first met Marina a decade ago while taking classes at a BK Pilates NYC studio. Their instructor-student relationship developed into a friendship. During their time in NYC, the two frequently dreamed about opening a studio together. Marina said "when you move back to Raleigh, let's open a BK Pilates studio!" Years later, Julia took Marina up on the offer when she moved back to Raleigh. They are thrilled to bring mind-body connection to Raleigh at their first location in Rockway.

LOCATION:
- Address: 1019 S. Saunders Street, Raleigh, NC 27603
- Located inside The Row apartment building, a newly developed property
- Look for the prominent canopy and blade signage displaying the BK Pilates name and logo at the entrance
- Phone: 919.213.9806
- Email: info@bkpilatesrdu.com
- Instagram: @bkpilatesrdu

PARKING:
- Two-hour complimentary retail parking is available in the adjacent parking deck
- From the South: Traveling down S. Saunders Street, the parking garage entrance appears on the right before The Row sign. Two deck entries precede the studio. If you see Willow House Coffee on the left, you've passed the turn-off.
- From the North: Heading uphill on S. Saunders, bear left at the traffic light (Lake Wheeler Road and Dix Park entrance are to the right). The Row sign, BK Pilates signage, and parking entrance appear on the left.
- Note: Maps services may display outdated construction site imagery. Check @bkpilatesrdu on Instagram for step-by-step parking instructions in the "Parking" highlight.

CLASS PRICING:
- New Client First Class: $29 (most popular for new clients!)
- Single Group Class: $39
- Camp Pilates (unlimited classes for a week): $79
- New Client 3 Group Class Pack: $85
- 5 Group Class Pack: $170
- 10 Group Class Pack: $330
- 20 Group Class Pack: $600

PRIVATE SESSION PRICING (starting price based on instructor level):
- Intro Private: $85
- Certified Instructor: $95
- Master Instructor: $110

MEMBERSHIP PACKAGES (monthly):
- 4 classes: $99/month
- 8 classes: $179/month (most popular membership!)
- 12 classes: $209/month
- 16 classes: $249/month
- Unlimited: $329/month

BOOKING:
Clients can book through Mindbody Online at the studio's booking page.

Keep responses concise, friendly, and helpful. If someone asks about something you don't have info on, suggest they contact the studio directly at 919.213.9806 or info@bkpilatesrdu.com.`;

function generateResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  // Greetings
  if (
    msg.match(/^(hi|hello|hey|howdy|good morning|good afternoon|good evening)/)
  ) {
    return "Hey there! Welcome to BK Pilates Raleigh. How can I help you today? I can answer questions about our classes, pricing, location, team, or anything else about the studio!";
  }

  // Location / Address / Where
  if (
    msg.includes("where") ||
    msg.includes("address") ||
    msg.includes("location") ||
    msg.includes("find you") ||
    msg.includes("located")
  ) {
    return "We're located at **1019 S. Saunders Street, Raleigh, NC 27603** - inside The Row apartment building. Look for our canopy and blade signage at the entrance. There's **free 2-hour parking** in the adjacent parking deck. Need directions from a specific area?";
  }

  // Parking
  if (msg.includes("parking") || msg.includes("park")) {
    return "Great news - we have **free 2-hour complimentary parking** in the adjacent parking deck at The Row!\n\n**From the South:** The parking garage entrance is on the right before The Row sign. If you see Willow House Coffee on the left, you've passed it.\n\n**From the North:** Bear left at the traffic light (Lake Wheeler Rd/Dix Park are to the right). The Row sign and parking entrance will be on your left.\n\nTip: Check our Instagram @bkpilatesrdu for step-by-step parking instructions in the 'Parking' highlight!";
  }

  // Pricing - general
  if (
    msg.includes("price") ||
    msg.includes("pricing") ||
    msg.includes("cost") ||
    msg.includes("how much") ||
    msg.includes("rates")
  ) {
    return "Here's a quick pricing overview:\n\n**New Clients:**\n- First Class: **$29** (best way to start!)\n- 3 Class Pack: **$85**\n\n**Class Packs:**\n- Single: $39 | 5-Pack: $170 | 10-Pack: $330 | 20-Pack: $600\n- Camp Pilates (unlimited for a week): $79\n\n**Memberships (monthly):**\n- 4 classes: $99 | 8 classes: $179 | 12: $209 | 16: $249 | Unlimited: $329\n\n**Private Sessions:**\n- Intro: $85 | Certified: $95 | Master: $110\n\nWant details on any specific option?";
  }

  // New client / first time / beginner
  if (
    msg.includes("new client") ||
    msg.includes("first time") ||
    msg.includes("beginner") ||
    msg.includes("never done") ||
    msg.includes("start") ||
    msg.includes("intro") ||
    msg.includes("new to")
  ) {
    return "Welcome! We love new clients. Here's how to get started:\n\n- **First Class: just $29!** This is our most popular intro option.\n- **3 Class Pack: $85** if you want to really test the waters.\n- **Intro Private Session: $85** for a one-on-one personalized experience.\n\nNo experience needed - our instructors modify for all levels. Just wear comfy clothes, bring water, and arrive 10-15 minutes early. We handle the rest!";
  }

  // Private sessions
  if (
    msg.includes("private") ||
    msg.includes("one on one") ||
    msg.includes("1 on 1") ||
    msg.includes("personal")
  ) {
    return "Our private sessions are one-on-one with an instructor, tailored to your specific goals:\n\n- **Intro Private: $85** - perfect for first-timers\n- **Certified Instructor: $95**\n- **Master Instructor: $110**\n\nPrivates are great for beginners, anyone with injuries, or if you want to deepen your practice. Contact us at **919.213.9806** or **info@bkpilatesrdu.com** to schedule!";
  }

  // Membership
  if (msg.includes("membership") || msg.includes("monthly") || msg.includes("member")) {
    return "Our monthly memberships are the best value:\n\n- **4 classes/month: $99**\n- **8 classes/month: $179** (most popular!)\n- **12 classes/month: $209**\n- **16 classes/month: $249**\n- **Unlimited: $329/month**\n\nThe more you come, the more you save! Want to sign up?";
  }

  // Schedule / classes / book
  if (
    msg.includes("schedule") ||
    msg.includes("class") ||
    msg.includes("book") ||
    msg.includes("time") ||
    msg.includes("when")
  ) {
    return "You can view our full real-time schedule and book directly through our **Mindbody** booking system. We offer group reformer classes throughout the day, plus private and duet sessions by appointment.\n\nClasses fill up fast, so we recommend booking in advance! Check our Schedule page or click 'Book Now' in the navigation.";
  }

  // Camp Pilates
  if (msg.includes("camp")) {
    return "**Camp Pilates** is an awesome deal - **unlimited classes for one full week for just $79!** It's a great way to immerse yourself in the practice and see real results quickly. Want to try it?";
  }

  // Team / founders / Marina / Julia
  if (
    msg.includes("team") ||
    msg.includes("founder") ||
    msg.includes("marina") ||
    msg.includes("julia") ||
    msg.includes("instructor") ||
    msg.includes("who")
  ) {
    return "BK Pilates Raleigh was founded by **Marina Kaydanova** and **Julia Davis**.\n\n**Marina** left the corporate world to follow her passion for Pilates. She opened the first BK Pilates studio in Brooklyn, NY in 2012 and now teaches full-time.\n\n**Julia** is a Raleigh local and entrepreneur with a background in real estate and hospitality. She's BASI Mat and Balanced Body Mat + Reformer certified.\n\nThey met a decade ago at a BK Pilates NYC studio and dreamed of opening a studio together. When Julia moved back to Raleigh, they made it happen!";
  }

  // Mission
  if (
    msg.includes("mission") ||
    msg.includes("values") ||
    msg.includes("about") ||
    msg.includes("philosophy")
  ) {
    return "Our mission is to **empower clients through small, sustainable changes**. We emphasize body positivity and holistic health, focusing on enabling individuals to live healthy and happy lifestyles.\n\nWe believe in true self-love without pressure. Self-care isn't a race for perfection - it's a process of joy. BK Pilates is a place to unwind and feel your best.";
  }

  // Contact
  if (
    msg.includes("contact") ||
    msg.includes("phone") ||
    msg.includes("email") ||
    msg.includes("call") ||
    msg.includes("reach")
  ) {
    return "Here's how to reach us:\n\n- **Phone:** 919.213.9806\n- **Email:** info@bkpilatesrdu.com\n- **Instagram:** @bkpilatesrdu\n- **Address:** 1019 S. Saunders Street, Raleigh, NC 27603\n\nWe'd love to hear from you!";
  }

  // Directions
  if (msg.includes("direction") || msg.includes("how to get") || msg.includes("driving")) {
    return "**From the South:** Head down S. Saunders Street. The parking garage entrance is on the right before The Row sign. If you pass Willow House Coffee on the left, you've gone too far.\n\n**From the North:** Head uphill on S. Saunders, bear left at the traffic light (Lake Wheeler Rd is to the right). The Row sign and parking entrance will be on your left.\n\nWe're inside **The Row** building at **1019 S. Saunders Street**. Look for our canopy and BK Pilates signage!";
  }

  // Thank you
  if (msg.includes("thank") || msg.includes("thanks")) {
    return "You're welcome! If you have any other questions, feel free to ask. We can't wait to see you at the studio! 🙏";
  }

  // Default
  return "Great question! I might not have the specific answer to that, but I can help with info about our **classes, pricing, location, parking, team, memberships,** and more.\n\nOr feel free to contact us directly at **919.213.9806** or **info@bkpilatesrdu.com** - we're happy to help!";
}

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! Welcome to BK Pilates Raleigh. I'm here to help with any questions about our classes, pricing, location, parking, or anything else. What can I help you with?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">BK Pilates Assistant</p>
            <p className="text-white/70 text-xs">Usually replies instantly</p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[350px] overflow-y-auto px-5 py-4 space-y-4 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-primary text-white rounded-br-md"
                    : "bg-white text-gray-700 border border-gray-100 rounded-bl-md shadow-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto">
          {["Pricing", "Location", "New Client", "Schedule"].map((q) => (
            <button
              key={q}
              onClick={() => {
                setInput(q);
                setMessages((prev) => [
                  ...prev,
                  { role: "user", content: q },
                ]);
                setTimeout(() => {
                  const response = generateResponse(q);
                  setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: response },
                  ]);
                }, 500);
              }}
              className="flex-shrink-0 text-xs px-3 py-1.5 bg-accent text-secondary rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask us anything..."
              className="flex-1 px-4 py-2.5 bg-gray-50 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary/30 border border-gray-200"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
