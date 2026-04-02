"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function generateResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim();

  // Greetings
  if (msg.match(/^(hi|hello|hey|howdy|good morning|good afternoon|good evening|sup|yo|what'?s up)/)) {
    return "Hey! Welcome to BK Pilates Raleigh. How can I help you today?";
  }

  // Location / Address
  if (msg.includes("where") || msg.includes("address") || msg.includes("location") || msg.includes("find you") || msg.includes("located")) {
    return "We're at 1019 S. Saunders Street, Raleigh, NC 27603 - inside The Row building. Look for our canopy and blade signage at the entrance. Free 2-hour parking in the adjacent deck!";
  }

  // Parking
  if (msg.includes("parking") || msg.includes("park")) {
    return "Free 2-hour parking in the adjacent deck at The Row.\n\nFrom the South: Garage entrance on the right before The Row sign. If you see Willow House Coffee on the left, you've passed it.\n\nFrom the North: Bear left at the traffic light (Lake Wheeler Rd is to the right). Entrance on your left.\n\nCheck @bkpilatesrdu on Instagram for the parking highlight!";
  }

  // Pricing - general
  if (msg.includes("price") || msg.includes("pricing") || msg.includes("cost") || msg.includes("how much") || msg.includes("rates") || msg.includes("$")) {
    return "Here's our pricing:\n\nNew Clients: First class $29 | 3-pack $85\n\nClass Packs: Single $39 | 5 for $170 | 10 for $330 | 20 for $600\n\nMonthly Memberships: 4x $99 | 8x $179 (most popular) | 12x $209 | 16x $249 | Unlimited $329\n\nPrivate Sessions: Intro $85 | Certified $95 | Master $110\n\nCamp Pilates: Unlimited for one week $79";
  }

  // New client / first time / beginner
  if (msg.includes("new client") || msg.includes("first time") || msg.includes("beginner") || msg.includes("never done") || msg.includes("start") || msg.includes("new to") || msg.includes("intro")) {
    return "Welcome! Your first group class is just $29 - no experience needed. You can also try 3 classes for $85, or do an Intro Private Session for $85 if you want one-on-one attention.\n\nJust wear comfy clothes, bring water, and arrive 10-15 minutes early. Our instructors modify for all levels!";
  }

  // Private sessions
  if (msg.includes("private") || msg.includes("one on one") || msg.includes("1 on 1") || msg.includes("personal")) {
    return "Private sessions are one-on-one with an instructor:\n\nIntro Private: $85 (great for first-timers)\nCertified Instructor: $95\nMaster Instructor: $110\n\nCall 919.213.9806 or email info@bkpilatesrdu.com to schedule!";
  }

  // Membership
  if (msg.includes("membership") || msg.includes("monthly") || msg.includes("member") || msg.includes("unlimited")) {
    return "Monthly memberships:\n\n4 classes/month: $99\n8 classes/month: $179 (most popular)\n12 classes/month: $209\n16 classes/month: $249\nUnlimited: $329/month\n\nThe more you come, the more you save!";
  }

  // Schedule / classes / book
  if (msg.includes("schedule") || msg.includes("class") || msg.includes("book") || msg.includes("time") || msg.includes("when") || msg.includes("open")) {
    return "We have group reformer classes throughout the day Monday through Sunday. Weekdays start at 6:00 AM with evening classes until 6:45 PM. Weekends start at 8:00 AM (Sat) and 9:00 AM (Sun).\n\nPrivate and duet sessions are by appointment. Check the schedule on our homepage or book through Mindbody!";
  }

  // Camp Pilates
  if (msg.includes("camp")) {
    return "Camp Pilates is unlimited classes for one full week for just $79! It's a great way to immerse yourself and see real results quickly.";
  }

  // Duet
  if (msg.includes("duet") || msg.includes("couple") || msg.includes("friend") || msg.includes("partner") || msg.includes("two")) {
    return "Duet sessions are semi-private sessions for two people. Share the experience with a friend or partner while still getting personalized attention. Contact us at 919.213.9806 to schedule!";
  }

  // Team / founders / Marina / Julia
  if (msg.includes("team") || msg.includes("founder") || msg.includes("marina") || msg.includes("julia") || msg.includes("instructor") || msg.includes("who") || msg.includes("owner")) {
    return "BK Pilates Raleigh was founded by Marina Kaydanova and Julia Davis.\n\nMarina left the corporate world to follow her passion. She opened the first BK Pilates in Brooklyn, NY in 2012.\n\nJulia is a Raleigh local with a background in real estate and hospitality. She's BASI Mat and Balanced Body Mat + Reformer certified.\n\nThey met a decade ago at a BK Pilates NYC studio and dreamed of opening a studio together!";
  }

  // Mission / about
  if (msg.includes("mission") || msg.includes("values") || msg.includes("about") || msg.includes("philosophy") || msg.includes("what is bk")) {
    return "Our mission is to empower clients through small, sustainable changes. We emphasize body positivity and holistic health. Self-care isn't a race for perfection - it's a process of joy.\n\nBK stands for Be Kind - be kind to your body!";
  }

  // Contact
  if (msg.includes("contact") || msg.includes("phone") || msg.includes("email") || msg.includes("call") || msg.includes("reach") || msg.includes("number")) {
    return "Phone: 919.213.9806\nEmail: info@bkpilatesrdu.com\nInstagram: @bkpilatesrdu\nAddress: 1019 S. Saunders St, Raleigh, NC 27603";
  }

  // Directions
  if (msg.includes("direction") || msg.includes("how to get") || msg.includes("driving") || msg.includes("navigate")) {
    return "From the South: Down S. Saunders St, garage entrance on the right before The Row sign. If you pass Willow House Coffee, you've gone too far.\n\nFrom the North: Uphill on S. Saunders, bear left at the traffic light. The Row sign and parking entrance are on your left.\n\nWe're inside The Row at 1019 S. Saunders Street.";
  }

  // Reformer
  if (msg.includes("reformer") || msg.includes("equipment") || msg.includes("machine")) {
    return "We use state-of-the-art reformer machines for our group classes. The reformer is a versatile piece of equipment that uses springs for resistance - it's great for building strength, flexibility, and body awareness. All levels welcome!";
  }

  // What to wear / bring
  if (msg.includes("wear") || msg.includes("bring") || msg.includes("prepare") || msg.includes("what do i need")) {
    return "Wear form-fitting activewear so your instructor can see your alignment. Grip socks are recommended (we have some for sale too). Bring a water bottle. That's it - we provide everything else!";
  }

  // Hours
  if (msg.includes("hour") || msg.includes("close") || msg.includes("open")) {
    return "Classes run Monday-Friday from 6:00 AM to 7:30 PM, Saturday 8:00 AM - 11:30 AM, and Sunday 9:00 AM - 11:15 AM. Check our schedule for exact class times!";
  }

  // Thank you
  if (msg.includes("thank") || msg.includes("thanks") || msg.includes("appreciate")) {
    return "You're welcome! See you at the studio!";
  }

  // Bye
  if (msg.includes("bye") || msg.includes("goodbye") || msg.includes("see you") || msg.includes("later")) {
    return "See you at the studio! Don't hesitate to reach out if you have more questions.";
  }

  // Default
  return "I can help with pricing, classes, location, parking, schedule, team info, what to wear, and more. Or reach us directly at 919.213.9806 or info@bkpilatesrdu.com!";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! How can I help you today? Ask me about classes, pricing, location, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Lock body scroll on mobile when chat is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: generateResponse(msg) }]);
    }, 400);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          isOpen ? "bg-secondary" : "bg-primary hover:bg-primary-dark"
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window - full screen on mobile, floating on desktop */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 sm:w-[380px] sm:max-w-[calc(100vw-2rem)] bg-white sm:rounded-2xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col sm:max-h-[520px]">
          {/* Header */}
          <div className="bg-secondary px-5 py-4 flex items-center justify-between sm:rounded-t-2xl flex-shrink-0">
            <div>
              <p className="text-white font-semibold text-sm">BK Pilates</p>
              <p className="text-gray-400 text-xs">Ask us anything</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="sm:hidden w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-2xl rounded-br-sm"
                      : "bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-bl-sm shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-1.5 overflow-x-auto flex-shrink-0">
            {["Pricing", "Location", "Schedule", "New Client", "Parking"].map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="flex-shrink-0 text-xs px-3 py-1.5 bg-background text-muted rounded-full hover:bg-primary hover:text-white transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2 flex-shrink-0 sm:rounded-b-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 px-4 py-2.5 bg-gray-50 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary/20 border border-gray-200"
            />
            <button
              onClick={() => handleSend()}
              className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
