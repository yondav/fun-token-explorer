interface KnowledgeBaseEntry {
  title: string;
  copy: string;
}

/** List of entries explaining app functionality */
const knowledgeBaseEntries: KnowledgeBaseEntry[] = [
  {
    title: 'How It Works',
    copy: 'Select a source and target token and enter an amount of either currency or USD. The Explorer calculates in real-time how much of each token you would receive.',
  },
  {
    title: 'Dynamic Inputs',
    copy: 'You can manually edit the USD amount, the source token amount, or the target token amount. The system recalculates all related values instantly depending on which field you are editing.',
  },
  {
    title: 'Swap Direction',
    copy: 'Click the swap button between cards to instantly reverse your source and target tokens. All input values adjust seamlessly to reflect the reversed direction.',
  },
  {
    title: 'Decimal Precision',
    copy: 'Crypto tokens support different numbers of decimal places. Inputs dynamically adjust based on the selected token’s precision, while values are automatically rounded for display and full precision is available on hover.',
  },
  {
    title: 'Real-Time Updates',
    copy: 'Enable real-time updates in Settings to refresh token pricing dynamically. This ensures your calculations remain accurate, but may incur rate limits depending on API usage.',
  },
  {
    title: 'Theme & Accessibility',
    copy: 'Choose between Light, Dark, or System theme. The app is optimized with accessible labeling and responsive design for a smooth experience across devices.',
  },
];

/**
 * KnowledgeBase component renders helpful excerpts about how to use the app.
 */
export default function KnowledgeBase() {
  return (
    <article className='flex flex-col gap-6' aria-label='Knowledge Base'>
      {knowledgeBaseEntries.map((entry, i) => (
        <section key={i} aria-labelledby={`kb-title-${i}`}>
          <h2 id={`kb-title-${i}`} className='font-semibold text-sm mb-2'>
            {entry.title}
          </h2>
          <p className='text-neutral-500'>{entry.copy}</p>
        </section>
      ))}
    </article>
  );
}
