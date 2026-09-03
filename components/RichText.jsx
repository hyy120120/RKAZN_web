"use client";

import Link from "next/link";

function renderInlineLinks(text) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link href={match[2]} key={i} className="richtext-link">
          {match[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function RichText({ blocks }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return <h2 className="richtext-h2" key={i}>{block.text}</h2>;
        }
        if (block.type === "p") {
          return <p className="richtext-p" key={i}>{renderInlineLinks(block.text)}</p>;
        }
        if (block.type === "ul") {
          return (
            <ul className="richtext-ul" key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{renderInlineLinks(item)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return <blockquote className="richtext-quote" key={i}>{block.text}</blockquote>;
        }
        return null;
      })}
    </>
  );
}