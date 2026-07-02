function ResumeUpload() {
  return (
    <section className="upload-section">
      <div className="upload-card">

        <h2>Upload Your Resume</h2>

        <p>
          Upload your resume in PDF format to begin the analysis.
        </p>

        <input
          type="file"
          accept=".pdf"
        />

      </div>
    </section>
  );
}

export default ResumeUpload;