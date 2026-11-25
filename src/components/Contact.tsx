import * as content from "../content";
import SectionHead from "./ui/SectionHead";
import { ArrowIcon } from "./ui/Icons";
import stagger from "../util";

export default function Contact() {
  return (
    <section className="sec sec--field" id="contact">
      <div className="wrap">
        <SectionHead
          title="Let's build something sharp"
          lead="Open for select projects, collaborations, and creative teams."
        />
        <div className="cards cards--2">
          <article className="card card--os" data-in="">
            <p className="mono dim">Email</p>
            <h3>Say hello.</h3>
            <dl className="spec">
              <div>
                <dt className="mono">To</dt>
                <dd>{content.EMAIL}</dd>
              </div>
              <div>
                <dt className="mono">Location</dt>
                <dd>{content.LOCATION}</dd>
              </div>
              <div>
                <dt className="mono">Status</dt>
                <dd>{content.AVAILABILITY}</dd>
              </div>
            </dl>
            <a className="btn btn-ink btn-lg" href={`mailto:${content.EMAIL}`}>
              Email me <ArrowIcon />
            </a>
          </article>
          <article className="card card--os" data-in="" style={stagger(1)}>
            <p className="mono dim">Resume &amp; socials</p>
            <h3>The details.</h3>
            <dl className="spec">
              <div>
                <dt className="mono">Resume</dt>
                <dd>
                  <a href={content.RESUME_URL} target="_blank" rel="noreferrer">
                    Download PDF
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono">GitHub</dt>
                <dd>
                  <a href={content.GITHUB_URL} target="_blank" rel="noreferrer">
                    @suryaraehan
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono">LinkedIn</dt>
                <dd>
                  <a href={content.LINKEDIN_URL} target="_blank" rel="noreferrer">
                    /in/suryaraehan
                  </a>
                </dd>
              </div>
            </dl>
            <a
              className="btn btn-line btn-lg"
              href={content.RESUME_URL}
              target="_blank"
              rel="noreferrer"
            >
              View resume <ArrowIcon />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
