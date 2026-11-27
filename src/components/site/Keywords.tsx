/**
 * Headline text with only the key terms highlighted: the service names and
 * "Melbourne" (John, 27 Nov call: highlight the main words, not half the
 * headline).
 */
const KEYWORDS =
  /(garage, shed and driveway removal|partial demolition|internal strip-outs|strip-outs|rubbish removal|kitchen demolition|bathroom demolition|house|melbourne)/gi;

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
