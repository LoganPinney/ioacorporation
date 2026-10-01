import { enterpriseSystems, type PublishedCaseStudy } from "../lib/enterprise-systems";

export function EnterpriseSystems({
  caseStudies = [],
}: {
  caseStudies?: readonly PublishedCaseStudy[];
}) {
  const publishedStudies = caseStudies.filter((study) => study.publicationApproved === true);

  return (
    <section
      className="enterprise-systems section-shell section-space"
      id="enterprise-systems"
      aria-labelledby="enterprise-systems-heading"
    >
      <div className="section-intro">
        <p className="section-label">SYSTEMS / DESIGN & IMPLEMENTATION</p>
        <div>
          <h2 id="enterprise-systems-heading">
            Enterprise systems.<br /><span>Built around the operation.</span>
          </h2>
          <p>
            IOA designs and implements the architecture, workflows, tools and
            controls that connect enterprise operations. We work across the
            system, from how information is structured to how decisions are made
            and work is carried out.
          </p>
        </div>
      </div>
      <div className="systems-grid">
        {enterpriseSystems.map((system) => (
          <article className="system-card" key={system.id}>
            <p className="small-index">{system.label}</p>
            <h3>{system.title}</h3>
            <p>{system.description}</p>
            <ul className="system-disciplines" aria-label={`${system.title} disciplines`}>
              {system.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <aside className="systems-confidentiality" aria-labelledby="systems-confidentiality-heading">
        <h3 id="systems-confidentiality-heading">Delivery with discretion.</h3>
        <p>
          Selected engagements and implementation details are confidential.
          Our public material describes capabilities and methodology while
          protecting client identities, systems and operational information.
          Project details and demonstrations are shared only where disclosure
          is authorized.
        </p>
      </aside>
      {publishedStudies.length > 0 ? (
        <div className="published-studies" aria-labelledby="published-studies-heading">
          <h3 id="published-studies-heading">Selected engagements</h3>
          <div className="systems-grid">
            {publishedStudies.map((study) => (
              <article className="system-card" key={study.id}>
                <h4>{study.title}</h4>
                <p>{study.context}</p>
                <p>{study.implementation}</p>
                {study.verifiedOutcomes && study.verifiedOutcomes.length > 0 ? (
                  <ul className="study-outcomes">
                    {study.verifiedOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
