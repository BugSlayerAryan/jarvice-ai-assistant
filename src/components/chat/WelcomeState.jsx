import React from 'react';
import {
  ArrowRightIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  LightBulbIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const quickActions = [
  {
    title: 'Strategize an idea',
    description:
      'Transform early thoughts into clear concepts, action plans, product directions, or creative strategies.',
    prompt:
      'Help me turn a rough idea into a clear, professional plan with practical next steps.',
    icon: LightBulbIcon,
  },
  {
    title: 'Engineer a solution',
    description:
      'Design, build, debug, refactor, or optimize code with clean structure and production-ready thinking.',
    prompt:
      'Help me design, write, debug, or improve code with a clean and scalable approach.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Clarify a concept',
    description:
      'Break down complex topics into simple explanations, examples, comparisons, and key takeaways.',
    prompt:
      'Explain this concept clearly, simply, and professionally with practical examples.',
    icon: SparklesIcon,
  },
  {
    title: 'Polish and refine',
    description:
      'Improve writing, code, UI, structure, logic, clarity, tone, and overall presentation quality.',
    prompt:
      'Review this carefully and improve it for clarity, quality, professionalism, and impact.',
    icon: DocumentTextIcon,
  },
];

export default function WelcomeState({ onSuggestionClick = () => {} }) {
  const handleClick = (prompt) => {
    onSuggestionClick(prompt);
  };

  return (
    <section
      className="relative flex h-full w-full items-center justify-center overflow-y-auto px-4 py-8 sm:px-8 lg:px-8"
      aria-labelledby="welcome-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-6 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Ready to help
        </div>

        <div className="text-center">
          <h1
            id="welcome-heading"
            className="mx-auto max-w-85 text-3xl font-semibold leading-tight tracking-tight text-white sm:max-w-xl sm:text-4xl lg:max-w-none lg:text-5xl"
          >
            What can I help you build today?
          </h1>

          <p className="mx-auto mt-4 max-w-85 text-sm leading-6 text-slate-400 sm:max-w-xl sm:text-base sm:leading-7 lg:max-w-2xl">
            Ask questions, generate ideas, write code, review content, or turn
            rough thoughts into polished work.
          </p>
        </div>

        <div
          className="mt-9 w-full sm:px-0"
          style={{
            paddingLeft: '18px',
            paddingRight: '18px',
          }}
        >
          <div className="mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.title}
                  type="button"
                  onClick={() => handleClick(action.prompt)}
                  className="group flex min-h-26 w-full items-center rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-md shadow-black/10 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 sm:min-h-27.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-slate-300 group-hover:text-white" />
                  </div>

                  <div
                    className="min-w-0 flex-1"
                    style={{
                      paddingLeft: '18px',
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-[17px] font-semibold leading-6 text-white sm:text-base">
                        {action.title}
                      </h2>

                      <ArrowRightIcon className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
                    </div>

                    <p className="mt-1.5 text-sm leading-6 text-slate-400">
                      {action.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 px-4 text-center text-xs leading-5 text-slate-500 sm:text-sm">
          Choose a suggestion or type your message below.
        </p>
      </div>
    </section>
  );
}