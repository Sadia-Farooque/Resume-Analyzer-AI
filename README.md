# 🚀 Resume Analyzer AI

An AI-powered Resume Analyzer that helps job seekers understand why their resume may not be getting interview callbacks.

Users simply upload their resume (PDF) and paste a job description. The application analyzes both documents using a Large Language Model (LLM) and provides actionable insights, ATS compatibility analysis, personalized feedback, resume rewrite suggestions, and a downloadable report.

---

## 🎯 Project Goal

Finding a job is competitive, and many resumes are rejected before reaching a recruiter due to poor ATS optimization or missing job-specific keywords.

This project aims to bridge that gap by providing an intelligent AI assistant that compares a resume against a target job description and generates a detailed improvement report.

Instead of generic resume advice, users receive personalized recommendations tailored to the specific role they are applying for.

---

## ✨ Features

### 📄 Resume Upload
- Upload resume in PDF format
- Secure in-memory processing (no permanent storage)
- Maximum file size: 5MB

### 📝 Job Description Input
- Paste any job description from LinkedIn, company websites, or job portals
- Plain text input
- No formatting required

### 🤖 AI Resume Analysis
The application compares the uploaded resume with the provided job description and generates:

- Overall Resume Score
- Skills Match Analysis
- Experience Relevance
- Language & Impact Score
- ATS Compatibility Score

---

## 📊 Analysis Report

### ✅ Overall Resume Score

An overall score out of 100 based on:

- Skills & Keyword Match
- Experience Relevance
- Language & Impact
- ATS Compatibility

Each section includes a brief explanation of the score.

---

### 💪 Strong Points

Highlights the strongest aspects of the resume in relation to the selected job description.

Examples include:

- Matching technical skills
- Relevant work experience
- Quantified achievements
- Role-specific strengths

---

### ⚠️ Weak Spots

Identifies areas that reduce the chances of getting shortlisted.

Examples:

- Missing required skills
- Weak experience descriptions
- Lack of measurable achievements
- Career gaps
- Passive language

---

### 🔍 Missing Keywords

Detects important keywords present in the job description but absent from the resume.

Each keyword is categorized by priority:

- High
- Medium
- Low

---

### ✍️ Resume Rewrite Suggestions

AI rewrites weak resume bullet points using stronger action verbs, measurable achievements, and job-specific language.

Each suggestion includes:

- Original text
- Improved version
- Explanation of the improvement

---

### 🗺️ Personalized Learning Roadmap

For the most important missing skills, the application generates learning paths such as:

- Fast-track learning
- In-depth learning
- Learn-on-the-job approach

Helping users improve their resumes while building real-world skills.

---

### 📑 ATS Compatibility Check

Evaluates whether the resume is ATS-friendly by checking for:

- Standard section headings
- Tables
- Graphics
- Icons
- Headers & Footers
- Font compatibility

Users receive a concise ATS compatibility summary.

---

### 📥 Downloadable Report

Generate and download a professional PDF report containing:

- Resume Score
- Strong Points
- Weak Spots
- Missing Keywords
- Rewrite Suggestions
- Learning Roadmap
- ATS Analysis

---

## 🛠 Tech Stack

### Frontend

- React
- Tailwind CSS
- JavaScript

### Backend

- FastAPI
- Python

### AI

- Claude API / Gemini API / OpenAI API

### Resume Processing

- pdfplumber

### PDF Report

- ReportLab

### Deployment

- Vercel
- Railway / Render

---

## 🏗 Project Architecture

```
User
   │
   ▼
React Frontend
   │
   ▼
FastAPI Backend
   │
   ▼
PDF Text Extraction
(pdfplumber)
   │
   ▼
Prompt Engineering
   │
   ▼
LLM API
(Claude / Gemini / OpenAI)
   │
   ▼
Structured JSON Response
   │
   ▼
Frontend Dashboard
   │
   ▼
Downloadable PDF Report
```

---

## 📂 Project Structure

```
resume-analyzer-ai/

├── frontend/
├── backend/
├── docs/
├── prompts/
├── assets/
├── README.md
└── .gitignore
```

---

## 🔄 User Workflow

1. Upload Resume (PDF)
2. Paste Job Description
3. Click **Analyze**
4. AI compares resume with job requirements
5. View personalized analysis
6. Download PDF report
7. Improve resume and analyze again

---

## 🚧 Current Development Status

This project is currently under active development.

Planned implementation roadmap:

- [ ] Frontend UI
- [ ] Backend API
- [ ] Resume Upload
- [ ] PDF Text Extraction
- [ ] AI Integration
- [ ] Resume Scoring
- [ ] ATS Analysis
- [ ] Keyword Detection
- [ ] Rewrite Suggestions
- [ ] Learning Roadmap
- [ ] PDF Report Generation
- [ ] Deployment

---

## 🎓 Learning Objectives

This project is being built to gain hands-on experience with:

- Full Stack Development
- AI Application Development
- REST APIs
- Prompt Engineering
- Large Language Models
- FastAPI
- React
- Git & GitHub
- Deployment
- Software Architecture

---

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

Feel free to open an issue or submit a pull request.

---

## 👨‍💻 Author

Sadia Fatima

Computer Science Student | Aspiring AI Engineer

Building practical AI-powered applications while learning modern software engineering and full-stack development.
