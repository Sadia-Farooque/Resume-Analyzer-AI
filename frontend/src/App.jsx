
import "./App.css";
import {useState} from "react";
import { testBackend } from "./services/resumeAnalysisService";
import Loading from "./Components/Loading";
import Hero from "./Components/Hero";
import Result from "./Components/Result";
import Footer from "./Components/Footer";
import AnalyzeButton from "./Components/AnalyzeButton";
import JobDescription from "./Components/JobDescription";
import ResumeUpload from "./Components/ResumeUpload";
function App(){
  const [selectedFile, setSelectedFile]= useState(null);
  const [jobDescription , setJobDescription] = useState("");
  const [loading , setLoading]= useState(false);
  const [showResult , setShowResult]= useState(false);
const handleAnalyze = async () => {
  setLoading(true);

  try {
    const data = await testBackend();

    console.log(data);

    setLoading(false);
    setShowResult(true);

  } catch (error) {
    console.error(error);

    setLoading(false);
  }
};
  if (loading) {
    return (
      <Loading
        setLoading={setLoading}
        setShowResults={setShowResult}
      />
    );
  }
  return(
  <>
   <Hero />
    <ResumeUpload 
    selectedFile={selectedFile}
    setSelectedFile={setSelectedFile}
    />
    <JobDescription 
    jobDescription={jobDescription}
    setJobDescription={setJobDescription}/>
    <AnalyzeButton 
    selectedFile={selectedFile}
    jobDescription={jobDescription}
  onAnalyze={handleAnalyze}
    />
    {showResult && <Result />}
    <Footer />

</>
        
      
 
  );
}

export default App;