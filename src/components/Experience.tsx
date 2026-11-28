import * as content from "../content";
import stagger from "../util";
import SectionHead from "./ui/SectionHead";

export default function Experience() {
  return (
    <section className="sec sec--field" id="experience">
      <div className="wrap">
        <SectionHead
          title="Background"
          lead="Where I've worked, what I can do, and where I'm studying."
        />
        <div className="cards cards--3">
          {content.EXPERIENCE.map((job, index) => (
            <article className="card" data-in="" style={stagger(index)} key={job.role}>
              <p className="mono card-tag">{job.period}</p>
              <p className="mono dim">{job.org}</p>
              <h3>{job.role}</h3>
              <ul className="bullets">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="cards cards--2" style={{ marginTop: 16 }}>
          <article className="card" data-in="">
            <p className="mono card-tag">Education</p>
            <h3>{content.EDUCATION.school}</h3>
            <p className="mono dim">{content.EDUCATION.period}</p>
            <p>{content.EDUCATION.detail}</p>
          </article>
          <article className="card" data-in="" style={stagger(1)}>
            <p className="mono card-tag">Skills</p>
            <ul className="tag-list">
              {content.SKILLS.map((skill) => (
                <li className="card-tag" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
