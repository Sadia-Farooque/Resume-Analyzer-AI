import { useState, useEffect } from "react";

function Loading({ setLoading, setShowResults }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Reading your resume...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 2;

        if (nextProgress >= 100) {
          clearInterval(interval);
          setMessage("Analysis complete!");

          setTimeout(() => {
            setLoading(false);
            setShowResults(true);
          }, 500);

          return 100;
        }

        if (nextProgress < 20) {
          setMessage("📄 Reading your resume...");
        } else if (nextProgress < 40) {
          setMessage("📝 Reading job description...");
        } else if (nextProgress < 60) {
          setMessage("🔍 Extracting text from CV...");
        } else if (nextProgress < 80) {
          setMessage("🤝 Matching resume with job description...");
        } else {
          setMessage("🛠️ Creating improvement roadmap...");
        }

        return nextProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [setLoading, setShowResults]);

  return (
    <div className="loading-container">
      <div className="loading-background"></div>

      <div className="loading-content">
        <div className="spinner"></div>

        <h1>Analyzing Your Resume</h1>

        <p className="loading-subtitle">
          Please wait while our AI reviews your resume...
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="progress-text">{progress}%</p>

        <p className="loading-status">{message}</p>

        <div className="dots-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;