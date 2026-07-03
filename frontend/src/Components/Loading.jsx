function Loading() {
    
  return (
    <div className="loading-container">

      <h1>Analyzing Your Resume</h1>

      <p>Please wait while our AI reviews your resume...</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <p>Reading Resume...</p>

    </div>
  );
}

export default Loading;