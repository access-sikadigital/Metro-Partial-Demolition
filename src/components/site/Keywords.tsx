/**
 * Headlines are all white; only the starting price is highlighted ("from $99",
 * "From $800"). John, 27 Nov second call: every word on the home headline is a
 * keyword, so partial highlighting looked odd.
 */
const KEYWORDS = /(from \$\d[\d,]*)/gi;

export function Keywords({ text, className }: { text: string; className: string }) {
  const parts = text.split(KEYWORDS);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={className}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
