from fastapi import FastAPI
from .routers import games

app = FastAPI()

app.include_router(games.router)

# Plus any additional setup like middleware
