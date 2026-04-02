"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function generateResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim();

  if (msg.match(/^(hi|hello|hey|howdy|good morning|good afternoon|good evening|sup|yo|what'?s up)/)) {
    return "Hey! Welcome to BK Pilates Raleigh. How can I help you today?";
  }

  if (msg.includes("where") || msg.includes("address") || msg.includes("location") || msg.includes("find you") || msg.includes("located")) {
    return "We're at **1019 S. Saunders Street, Raleigh, NC 27603** inside The Row building. Free 2-hour parking in the adjacent deck!";
  }

  if (msg.includes("parking") || msg.includes("park")) {
    return "Free 2-hour parking in the adjacent deck at The Row.\n\n**From South:** Garage entrance on the right before The Row sign.\n**From North:** Bear left at the light, entrance on your left.\n\nCheck @bkpilatesrdu on Instagram for the parking highlight!";
  }

  if (msg.includes("price") || msg.includes("pricing") || msg.includes("cost") || msg.includes("how much") || msg.includes("rates")) {
    return "**New Clients:** First class $29 | 3-pack $85\n**Class Packs:** Single $39 | 5 for $170 | 10 for $330 | 20 for $600\n**Monthly:** 4x $99 | 8x $179 | 12x $209 | 16x $249 | Unlimited $329\n**Private:** From $85\n**Camp Pilates:** Unlimited week $79";
  }

  if (msg.includes("new client") || msg.includes("first time") || msg.includes("beginner") || msg.includes("never done") || msg.includes("start") || msg.includes("new to")) {
    return "Welcome! Your first class is just **$29** - no experience needed. Wear comfy clothes, bring water, and arrive 10-15 min early. We handle the rest!";
  }

  if (msg.includes("private") || msg.includes("one on one") || msg.includes("1 on 1") || msg.includes("personal")) {
    return "**Private sessions:**\n- Intro Private: $85\n- Certified Instructor: $95\n- Master Instructor: $110\n\nCall **919.213.9806** or email **info@bkpilatesrdu.com** to book!";
  }

  if (msg.includes("membership") || msg.includes("monthly") || msg.includes("member")) {
    return "**Monthly memberships:**\n- 4x/month: $99\n- 8x/month: $179 (most popular)\n- 12x/month: $209\n- 16x/month: $249\n- Unlimited: $329";
  }

  if (msg.includes("schedule") || msg.includes("class") || msg.includes("book") || msg.includes("time") || msg.includes("when")) {
    return "We have group reformer classes throughout the day Mon-Sun, plus private and duet sessions by appointment. Check the schedule on our homepage or book directly through Mindbody!";
  }

  if (msg.includes("camp")) {
    return "**Camp Pilates** - unlimited classes for one full week, just **$79**! Great way to dive in.";
  }

  if (msg.includes("team") || msg.includes("founder") || msg.includes("marina") || msg.includes("julia") || msg.includes("instructor") || msg.includes("who")) {
    return "Founded by **Marina Kaydanova** (opened first BK studio in Brooklyn, 2012) and **Julia Davis** (Raleigh local, BASI Mat + Balanced Body certified). They met at a BK Pilates NYC studio a decade ago!";
  }

  if (msg.includes("mission") || msg.includes("values") || msg.includes("about") || msg.includes("philosophy")) {
    return "Our mission is to empower clients through small, sustainable changes. We emphasize body positivity and holistic health - self-care as a process of joy, not perfection.";
  }

  if (msg.includes("contact") || msg.includes("phone") || msg.includes("email") || msg.includes("call") || msg.includes("reach")) {
    return "**Phone:** 919.213.9806\n**Email:** info@bkpilatesrdu.com\n**Instagram:** @bkpilatesrdu\n**Address:** 1019 S. Saunders St, Raleigh, NC 27603";
  }

  if (msg.includes("direction") || msg.includes("how to get") || msg.includes("driving")) {
    return "**From South:** Down S. Saunders, garage on the right before The Row sign.\n**From North:** Uphill on S. Saunders, bear left at the light, entrance on your left.\n\nWe're inside The Row at 1019 S. Saunders St.";
  }

  if (msg.includes("thank") || msg.includes("thanks")) {
    return "You're welcome! See you at the studio!";
  }

  return "I can help with **pricing, classes, location, parking, schedule, team info,** and more. Or reach us at **919.213.9806** / **info@bkpilatesrdu.com**!";
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

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-secondary px-5 py-4">
          <p className="text-white font-semibold text-sm">BK Pilates</p>
          <p className="text-gray-400 text-xs">Ask us anything</p>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
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
        <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-1.5 overflow-x-auto">
          {["Pricing", "Location", "Schedule", "New Client"].map((q) => (
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
        <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2">
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
    </>
  );
}
