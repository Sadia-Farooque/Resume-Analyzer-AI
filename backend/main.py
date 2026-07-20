from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import fitz
from ai_service import analyze_resume

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Backend Running"}


@app.get("/hello")
def hello():
    return {"message": "Hello from FastAPI!"}


@app.post("/analyze")
async def analyze(
    resume: UploadFile = File(...),
    job_description: str = Form(...),
):
    if not resume.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Please upload a PDF resume.")

    if not job_description.strip():
        raise HTTPException(status_code=400, detail="Job description is required.")

    try:
        pdf_bytes = await resume.read()
        document = fitz.open(stream=pdf_bytes, filetype="pdf")
    except Exception as exc:
        raise HTTPException(status_code=400, detail="Unable to read the PDF file.") from exc

    resume_text = ""
    for page in document:
        page_text = page.get_text()
        resume_text += page_text if page_text else ""

    if not resume_text.strip():
        raise HTTPException(status_code=400, detail="No text could be extracted from the uploaded PDF.")

    analysis = analyze_resume(resume_text, job_description)
    return analysis