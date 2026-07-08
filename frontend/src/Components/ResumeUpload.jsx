function ResumeUpload({ selectedFile, setSelectedFile }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

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
          onChange={handleFileChange}
        />

        {selectedFile && (
          <p>Selected File: {selectedFile.name}</p>
        )}
      </div>
    </section>
  );
}

export default ResumeUpload;