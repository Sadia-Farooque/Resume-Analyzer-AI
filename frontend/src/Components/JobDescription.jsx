function JobDescription({jobDescription , setJobDescription}) {
  const handleJobDescriptionChange = (event) =>{
    setJobDescription(event.target.value);
  };
  return (
    <section className="job-section">
      <div className="job-card">

        <h2>Job Description</h2>

        <p>
          Paste the job description below to compare it with your resume.
        </p>

        <textarea
          placeholder="Paste the complete job description here..."
          rows="10"
          value ={jobDescription}
          onChange={handleJobDescriptionChange}
        ></textarea>

      </div>
    </section>
  );
}

export default JobDescription;