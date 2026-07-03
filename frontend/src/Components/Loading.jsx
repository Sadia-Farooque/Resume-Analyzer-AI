function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-background"></div>
      
      <div className="loading-content">
        <div className="spinner"></div>
        
        <h1>Analyzing Your Resume</h1>
        <p className="loading-subtitle">Please wait while our AI reviews your resume...</p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p className="loading-status">Reading Resume...</p>
        
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