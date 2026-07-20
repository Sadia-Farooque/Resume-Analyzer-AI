function Result({ analysis }) {
  if (!analysis) {
    return null;
  }

  const scoreCards = [
    { label: "ATS Score", value: analysis.ats_score, suffix: "/100" },
    { label: "Resume Score", value: analysis.resume_score, suffix: "/100" },
    { label: "Overall Rating", value: analysis.overall_rating, suffix: "/100" },
    { label: "Job Match", value: analysis.job_match_percentage, suffix: "%" },
  ];

  const ringStyle = {
    "--progress": `${analysis.ats_score || 0}%`,
  };

  return (
    <section className="results-section">
      <div className="results-hero">
        <div className="results-hero-copy">
          <p className="results-eyebrow">Resume intelligence review</p>
          <h2>Executive-ready hiring insights for your next opportunity</h2>
          <p>
            This report highlights how well your resume aligns with the target role, where the gaps are, and the most valuable improvements to make next.
          </p>
        </div>

        <div className="score-ring" style={ringStyle}>
          <div className="score-ring-inner">
            <span>ATS</span>
            <strong>{analysis.ats_score}</strong>
            <small>/100</small>
          </div>
        </div>
      </div>

      <div className="score-grid">
        {scoreCards.map((card) => (
          <div key={card.label} className="score-card">
            <span className="score-label">{card.label}</span>
            <strong>
              {card.value}
              <small>{card.suffix}</small>
            </strong>
          </div>
        ))}
      </div>

      <div className="results-grid">
        <article className="result-card">
          <h3>Strengths</h3>
          <ul className="detail-list">
            {(analysis.strengths || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="result-card wide-card">
          <h3>Rewrite Example</h3>
          <div className="rewrite-example">
            <p><strong>Before:</strong> Some bullets lack measurable impact.</p>
            <p><strong>After:</strong> Delivered measurable outcomes by improving performance, reducing manual effort, and strengthening execution quality.</p>
            <p><strong>Before:</strong> A few missing role-specific keywords.</p>
            <p><strong>After:</strong> Added role-relevant terminology such as Python, React, and API integration to better align with the target position.</p>
          </div>
        </article>

        <article className="result-card">
          <h3>Weaknesses</h3>
          <ul className="detail-list">
            {(analysis.weaknesses || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="result-card wide-card">
          <h3>Missing Keywords</h3>
          <ul className="detail-list">
            {(analysis.missing_keywords || []).map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </article>

        <article className="result-card">
          <h3>Recommended Skills</h3>
          <ul className="detail-list">
            {(analysis.recommended_skills || []).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="result-card">
          <h3>Roadmap to Close Gaps</h3>
          <ul className="detail-list">
            {(analysis.recommended_learning_path || []).map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </article>

        <article className="result-card">
          <h3>Career Advice</h3>
          <ul className="detail-list">
            {(analysis.career_advice?.courses || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
            {(analysis.career_advice?.certifications || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
            {(analysis.career_advice?.projects || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="result-card wide-card">
          <h3>AI Recommendations</h3>
          <ul className="detail-list">
            {(analysis.ai_suggestions?.improve_bullets || []).map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
            {(analysis.ai_suggestions?.rewrite_weak_sentences || []).map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
            {(analysis.ai_suggestions?.professional_recommendations || []).map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Result;