export const CATEGORIES = [
  'Spiritual',
  'Tech',
  'Life',
  'Philosophy',
  'Work',
  'Personal Growth',
];

export const BLOGS = [
  {
    title: 'Silence Between the Commits',
    category: 'Spiritual',
    excerpt:
      'How a quiet morning practice shapes the way I write code — less noise, clearer intent, fewer wasted cycles.',
    content: `There is a stretch of time before the first commit of the day where nothing is typed. Just breath, a cup of tea, and a blank terminal.

That pause is not procrastination. It is how I decide what actually matters before I touch the keyboard.

In a world of dashboards and Slack pings, silence is a feature. It lets me ask: is this the right problem? Am I solving a symptom or a root cause?

I bring the same question to production incidents. When an API took 25 seconds, the loudest answer was "scale the server." Silence made room for a quieter one — redesign the cache. Under a second later, the noise stopped.

Practice stillness. Then ship.`,
    date: '2025-08-12',
    readTime: '4 min',
    coverEmoji: '🧘',
  },
  {
    title: 'From 25s to Under 1s',
    category: 'Tech',
    excerpt:
      'A walkthrough of the Redis caching redesign and RabbitMQ event flow that cut a critical API from twenty-five seconds to sub-second.',
    content: `Latency is rarely a hardware problem first. It is usually a data-flow problem wearing a hardware costume.

At Korn Ferry, one pay-equity endpoint routinely sat around twenty-five seconds. The instinct was to throw more compute at it. Mapping the call graph told a different story: repeated DB work, no shared cache boundary, and synchronous steps that could be events.

We redesigned around Redis for hot reads and RabbitMQ for the heavy side effects. The hot path got thin. The cold path got async. The number that mattered dropped below one second.

The lesson I keep: measure the path, not the machine. Architecture is the first optimization.`,
    date: '2025-07-03',
    readTime: '6 min',
    coverEmoji: '⚡',
  },
  {
    title: 'Weekends Without a Ticket Board',
    category: 'Life',
    excerpt:
      "Why I protect unstructured time — and how it makes Monday's engineering sharper instead of softer.",
    content: `Not every hour needs a ticket. Some hours need a walk, a book, or a conversation that has nothing to do with NestJS.

I used to treat weekends like unpaid sprints. Burnout arrived on schedule. The work did not get better; I just got worse at noticing when it was wrong.

Now I keep a hard boundary. Offline means offline. The paradox is that Monday code reviews get kinder and clearer when I actually rested.

Life outside the IDE is not a distraction from craft. It is the fuel for it.`,
    date: '2025-06-18',
    readTime: '3 min',
    coverEmoji: '🌿',
  },
  {
    title: 'Code as Craft, Not Just Output',
    category: 'Philosophy',
    excerpt:
      'Shipping fast matters. Leaving a trail the next developer can follow matters more — including future me.',
    content: `Craft is not perfectionism. Perfectionism freezes. Craft is care with a deadline.

I write for the next person who opens the file. That person is often me in six months, confused by my own shortcuts. Clear names, honest comments, and one obvious path beat clever abstractions.

At work that means stored functions with readable contracts, workers with explicit payloads, and logs that say what happened without leaking what should stay private.

Philosophy in engineering is practical: choose the boring option that survives contact with production.`,
    date: '2025-05-22',
    readTime: '5 min',
    coverEmoji: '📜',
  },
  {
    title: 'Mentoring Without the Hero Complex',
    category: 'Work',
    excerpt:
      'How I try to teach teammates how to think about systems — not how to wait for me to fix them.',
    content: `Hero culture feels good for a week and then breaks on-call. The goal of mentoring is independence, not dependency.

When someone asks how a pipeline works, I try not to paste the answer. We walk the flow together: producer, queue, worker, S3, status. They leave with a map, not a patch.

At Korn Ferry and earlier at PhillipCapital, the best wins were never solo commits. They were the moments a junior engineer owned the next incident without me in the thread.

Work scales when knowledge does.`,
    date: '2025-04-09',
    readTime: '4 min',
    coverEmoji: '🤝',
  },
  {
    title: 'Small Habits, Compound Returns',
    category: 'Personal Growth',
    excerpt:
      'Daily notes, one focused deep-work block, and reading outside tech — the boring loop that keeps me growing.',
    content: `Growth rarely looks like a breakthrough. It looks like a note you almost skipped writing, a PR you almost rubber-stamped, a book you almost abandoned for another tutorial.

I keep three small habits: a short daily note, one protected deep-work block, and reading that is not always about software. None of them are glamorous. Together they compound.

Personal growth in this industry is easy to confuse with collecting tools. Tools change. Judgment is what you carry between jobs.

Stay curious. Stay consistent. Skip the hype cycle when you can.`,
    date: '2025-03-14',
    readTime: '4 min',
    coverEmoji: '🌱',
  },
];

/** Normalize blogs — auto id from index so adding a row is enough */
export const getBlogs = () =>
  BLOGS.map((blog, index) => ({
    ...blog,
    id: index + 1,
    coverEmoji: blog.coverEmoji || '✍️',
  }));

export const getBlogById = (id) => {
  const numericId = Number(id);
  return getBlogs().find((blog) => blog.id === numericId);
};

export const getCategoryCounts = () => {
  const blogs = getBlogs();
  const counts = { All: blogs.length };
  CATEGORIES.forEach((category) => {
    counts[category] = blogs.filter((blog) => blog.category === category).length;
  });
  return counts;
};
