from fastapi import APIRouter

router = APIRouter()


@router.get("/games")
async def read_games():
    return [{"name": "Game One"}, {"name": "Game Two"}]
