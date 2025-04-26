const knowledgeBaseEntries: { title: string; copy: string }[] = [
  {
    title: 'How it works',
    copy: 'Enter a dollar amount and use the dropdown menus to select a source and target token. The explorer will calculate the amount you would receive in each token with live updates to reflect token values in real time.',
  },
  {
    title: 'Instant Swap',
    copy: 'Use the swap button to instantly reverse the source and target.',
  },
  {
    title: 'Formatting',
    copy: 'Crypto tokens have different decimal precision. We display a rounded version for easy reading but the full precision can be seen while hovering over a given value.',
  },
];

export default function KnowledgeBase() {
  return (
    <article className='flex flex-col gap-4'>
      {knowledgeBaseEntries.map((entry, i) => (
        <section key={i}>
          <h2 className='font-semibold text-sm mb-2'>{entry.title}</h2>
          <p className='text-neutral-500'>{entry.copy}</p>
        </section>
      ))}
    </article>
  );
}
