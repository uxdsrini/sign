"use client";

import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../views/UI/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer:
        "Great question! Let's break it down: the annual cost of hiring a senior-level designer is over $100,000, plus benefits—and finding one with availability is another challenge. Even if you do hire, you might not have enough work to keep them busy full-time, meaning you're paying for idle hours.\n\nWith our monthly plan, you have the flexibility to pause and resume your subscription whenever needed, ensuring you only pay when you actually have work for your designer. It's cost-effective, efficient, and tailored to your needs.",
    },
    {
      question: "Is there a limit to how many requests I can have?",
      answer:
        "Once you're subscribed, you can add as many design requests to your queue as you'd like, with each one delivered individually.",
    },
    {
      question: "How fast will I receive my designs?",
      answer:
        "On average, most requests are completed within two days or less, though more complex designs may take a bit longer.",
    },
    {
      question: "What will I receive in 48 hours?",
      answer:
        "Most requests are delivered within 48 hours on average, including items like brand concepts, landing pages, or social media templates. For larger requests, you'll receive deliverables every 24 hours until the entire project is completed.",
    },
    {
      question: "Who are the designers?",
      answer:
        "You may be surprised to learn that signjoy is a one-person agency. That means you'll work directly with me, the founder. For specialized requests like animations or custom illustrations, I collaborate with partner designers to deliver exceptional results.",
    },
    {
      question: "How does the pause feature work?",
      answer:
        "We understand that you may not always have enough design work to fill an entire month—maybe just one or two requests. That's where the pause feature comes in handy.\n\nBilling cycles are based on a 31-day period. For example, if you sign up and use the service for 21 days, then decide to pause your subscription, the billing cycle will pause. You'll have the remaining 10 days of service to use at any time in the future.",
    },
    {
      question: "How do you handle larger requests?",
      answer:
        "For larger requests, such as full-scale website or mobile app designs, UI/UX work, and similar projects, signjoy breaks them into smaller tasks. You can expect to receive deliverables every 24-48 hours until the entire project is completed.",
    },
    {
      question: "What programs do you design in?",
      answer: "The majority of requests are designed using Figma.",
    },
    {
      question: "How do I request designs?",
      answer:
        "Signjoy provides great flexibility in how you request designs through Trello. Common methods include submitting requests directly on Trello, sharing Google Docs or wireframes, or even recording a short Loom video for those who prefer not to write out briefs. Essentially, anything that can be linked or shared in Trello works!",
    },
    {
      question: "What if I don't like the design?",
      answer:
        "Don't worry! We'll revise the design as many times as needed until you're 100% satisfied.",
    },
    {
      question: "Is there any design work you don't cover?",
      answer:
        "Yes, signjoy does not cover the following: 3D modeling, animated graphics (GIFs, etc.), document design (such as medical forms), complex packaging, extensive print design (like magazines or books), and Adobe InDesign documents. if serious request we will give this in additional cost.",
    },
    {
      question: "What if I only have a single request?",
      answer:
        "That's no problem. You can pause your subscription once your request is complete and resume it when you have more design needs. There's no need to let any part of your subscription go unused.",
    },
  ];

  return (

    <section id='faq' className="min-h-screen bg-[#FAF9F6] w-full py-20">

<div className="max-w-3xl text-gray-900 mx-auto px-4 ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          FAQ's
        </h2>
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="flex text-left justify-between py-4 text-sm font-medium hover:no-underline">
                {faq.question}
                <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="text-sm text-left leading-relaxed text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
