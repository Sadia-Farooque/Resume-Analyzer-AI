import { useState } from "react";

function AnalyzeButton({
  selectedFile,
  jobDescription,
  onAnalyze,
}){
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    if (!selectedFile) {
      setError("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please enter a job description.");
      return;
    }

 setError("");
onAnalyze();
  };

  return (
    <section className="button-section">
      <button className="analyze-btn" onClick={handleAnalyze}>
        Analyze Resume
      </button>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
}

export default AnalyzeButton;