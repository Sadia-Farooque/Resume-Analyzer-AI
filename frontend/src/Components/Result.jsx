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

  return (
    <section className="results-section">
      <div className="results-header">
        <h2>AI Career Analysis</h2>
        <p>Your resume now has a recruiter-style evaluation with ATS, skills, and career guidance insights.</p>
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
          <h3>Matching Keywords</h3>
          <ul>
            {(analysis.matching_keywords || []).map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </article>

        <article className="result-card">
          <h3>Missing Keywords</h3>
          <ul>
            {(analysis.missing_keywords || []).map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </article>

        <article className="result-card">
          <h3>Technical Skills</h3>
          <ul>
            {(analysis.technical_skills || []).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="result-card">
          <h3>Recommended Skills</h3>
          <ul>
            {(analysis.recommended_skills || []).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="result-card wide-card">
          <h3>AI Suggestions</h3>
          <ul>
            {(analysis.ai_suggestions?.professional_recommendations || []).map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        </article>

        <article className="result-card wide-card">
          <h3>Career Advice</h3>
          <ul>
            {(analysis.career_advice?.career_roadmap ? [analysis.career_advice.career_roadmap] : []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Result;