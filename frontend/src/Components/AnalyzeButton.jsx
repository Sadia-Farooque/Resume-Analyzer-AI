function AnalyzeButton({
  selectedFile, jobDescription, setLoading, setShowResult,
}) {
  const handleAnalyze = () => {
    if (!selectedFile) {
      alert("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter a job description.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 5000);
  };

  return (
    <section className="button-section">
      <button className="analyze-btn" onClick={handleAnalyze}>
        Analyze Resume
      </button>
    </section>
  );
}

export default AnalyzeButton;