import * as content from "../content";
import stagger from "../util";
import SectionHead from "./ui/SectionHead";

export default function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <SectionHead
            title="Questions"
            lead="A few things people usually ask before we start."
          />
        </div>
        <div className="faq">
          {content.FAQ.map((item, index) => (
            <details data-in="" style={stagger(index)} key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
