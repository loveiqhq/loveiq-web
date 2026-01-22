"use client";

import { useState, type FC } from "react";

const faqs = [
  {
    question: "Is this a test or an ongoing journey?",
    answer:
      "LoveIQ is not a one-off quiz. It is a guided journey of self-understanding. You begin with a core assessment, and your profile can deepen over time as you explore additional topics, reflections, and optional follow-ups. Continued engagement allows your insights to become more precise and personalized.",
  },
  {
    question: "What exactly does this app do?",
    answer:
      "LoveIQ analyzes how you think, feel, communicate, and relate. It translates your responses into a personalized archetype profile and relationship intelligence report that highlights patterns, strengths, challenges, and compatibility dynamics.",
  },
  {
    question: "How is my data used and protected?",
    answer:
      "Your data is encrypted, private, and never sold. Responses are used only to generate your results and to improve our models in anonymized form. You can delete or export your data at any time.",
  },
  {
    question: "What kind of results will I receive?",
    answer:
      "Depending on the product you use, your results may include: Archetype match scores; Trait patterns across psychological dimensions; Strengths, challenges, and blind spots; Practical insights for attraction, communication, intimacy, and long-term compatibility. The reports are designed to feel both emotionally resonant and scientifically grounded.",
  },
  {
    question: "Who is this app for?",
    answer:
      "LoveIQ is for anyone seeking deeper clarity about themselves and their relationship patterns—whether single, dating, or in a long-term partnership. It is especially relevant for people who value self-awareness, emotional intelligence, and personal growth.",
  },
  {
    question: "Is it based on science?",
    answer:
      "Yes. LoveIQ draws from relationship psychology, attachment theory, personality science, behavioral research, and large-scale pattern analysis. These foundations are combined with modern machine-learning techniques to create a rigorous and human-centered system.",
  },
  {
    question: "How accurate are the insights?",
    answer:
      "Accuracy depends on the clarity and honesty of your inputs. The model identifies consistent patterns across multiple dimensions, going beyond a casual personality quiz. While no system can capture every nuance of a person, many users report that the insights feel precise and personally meaningful.",
  },
  {
    question: "Will I get recommendations or next steps?",
    answer:
      "Yes. Your profile includes tailored suggestions such as communication strategies, dating insights, intimacy considerations, and long-term growth paths. Optional follow-up modules allow for deeper exploration.",
  },
  {
    question: "Is it anonymous?",
    answer:
      "Yes. You can use LoveIQ with only an email address, and in some cases without entering your name. Your answers are private unless you choose to share your results.",
  },
  {
    question: "Can I talk to a professional or coach through the app?",
    answer:
      "We are working with selected psychologists and relationship coaches to offer optional paid sessions. These experts will be familiar with the LoveIQ framework and able to support you based on your profile.",
  },
  {
    question: "Is it free?",
    answer:
      "You can start with a free introductory assessment. Full reports and advanced insights are available through a one-time purchase.",
  },
  {
    question: "How long does the first assessment take?",
    answer: "Most users complete the initial assessment in 7–12 minutes. It is mobile-friendly, intuitive, and can be paused and resumed at any time.",
  },
  {
    question: "Can I save progress, revisit results, or share with a partner?",
    answer:
      "Yes. Progress is saved using a secure magic link sent to your email. You can resume, revisit results, or share them with a partner—no account required.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all duration-300 hover:bg-white/10 ${isOpen ? "bg-white/10" : ""}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer select-none items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-white sm:text-base">{question}</span>
        <span className={`text-white/50 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div
            className={`px-5 pb-4 pt-0 text-sm leading-relaxed text-gray-300 sm:px-6 transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-8px]"}`}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const Section11: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="faq-heading">
      <div className="content-shell relative flex max-w-4xl flex-col items-center gap-8 animate-on-scroll">
        <div className="flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FE6839]">
          FAQs
        </div>
        <div className="space-y-3 text-center">
          <h2 id="faq-heading" className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            <span className="block sm:inline">Curious Minds Ask.</span>{" "}
            <span className="block sm:inline text-[#9c7dff]">We Answer.</span>
          </h2>
        </div>

        <div className="flex w-full flex-col gap-3">
          {faqs.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section11;
