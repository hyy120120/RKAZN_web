"use client";

export default function RevealText({ text, delay = 0, as: Tag = "span", className = "" }) {
  return (
    <Tag className={`reveal-line ${className}`}>
      <span className="reveal-inner" style={{ animationDelay: `${delay}s` }}>
        {text}
      </span>
    </Tag>
  );
}