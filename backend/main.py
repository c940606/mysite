from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import uvicorn

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
origins = [
    "*",
    # "http://localhost:3000",
    # "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/hello")
async def root():
    return {"message": "Hello World 111"}


if __name__ == '__main__':
    uvicorn.run('main:app', reload=True)
