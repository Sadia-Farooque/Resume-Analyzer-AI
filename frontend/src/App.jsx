
import "./App.css";
import { useState } from "react";
import Loading from "./components/Loading";
import { analyzeResume } from "./services/resumeAnalysisService";
import Hero from "./components/Hero";
import Result from "./components/Result";
import Footer from "./components/Footer";
import AnalyzeButton from "./components/AnalyzeButton";
import JobDescription from "./components/JobDescription";
import ResumeUpload from "./components/ResumeUpload";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    setShowResult(false);

    try {
      const data = await analyzeResume(selectedFile, jobDescription);
      setAnalysis(data);
      setShowResult(true);
    } catch (err) {
      console.error(err);
      setError("Analysis failed. Please try again with a valid PDF and job description.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading setLoading={setLoading} setShowResults={setShowResult} />;
  }

  return (
    <>
      <Hero />
      <ResumeUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
      <JobDescription jobDescription={jobDescription} setJobDescription={setJobDescription} />
      <AnalyzeButton selectedFile={selectedFile} jobDescription={jobDescription} onAnalyze={handleAnalyze} />
      {error && <p className="error-message">{error}</p>}
      {showResult && <Result analysis={analysis} />}
      <Footer />
    </>
  );
}

export default App;