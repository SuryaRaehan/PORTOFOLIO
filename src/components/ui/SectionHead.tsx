import type { CSSProperties } from "react";

type SectionHeadProps = {
  title: string;
  lead: string;
};

export default function SectionHead({ title, lead }: SectionHeadProps) {
  return (
    <div className="head">
      <h2 className="h2" data-in="">
        {title}
      </h2>
      <p className="lead head-lead" data-in="" style={{ "--d": 1 } as CSSProperties}>
        {lead}
      </p>
    </div>
  );
}
