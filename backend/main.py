from fastapi import FastAPI
from script import summarize_transcript
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/items/{video_id}")
def read_item(video_id: str)-> str:
    texts = summarize_transcript(video_id)
    return texts