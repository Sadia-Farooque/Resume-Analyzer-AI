from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile, File, Form


app = FastAPI()

app.add_middleware(
    CORSMiddleware , 

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Backend Running"
    }

@app.get("/hello")
def hello():
    return {
        "message": "Hello from FastAPI!"
    }

@app.post("/analyze")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    return {
        "filename": resume.filename,
        "job_description": job_description
    }