import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",

  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",

  "postgresql",
  "firebase",

  "vercel",

  "git",

  "github",
  "gitlab",
  "visualstudiocode",

  "figma",
];

export function TechStack() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-20 pb-10 pt-0">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
