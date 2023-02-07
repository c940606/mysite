import SECRET as SECRET
from fastapi import HTTPException, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from passlib.context import CryptContext
from tortoise.exceptions import DoesNotExist

from .models import Users
from .serializes import UserDatabaseSchema
from fastapi_login.exceptions import InvalidCredentialsException
from fastapi_login import LoginManager
from core.config import settings

manager = LoginManager(settings.SECRET, token_url='/auth/token', algorithm=settings.ALGORITHM)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


async def get_user(username: str):
    return await UserDatabaseSchema.from_queryset_single(Users.get(username=username))


async def validate_user(user: OAuth2PasswordRequestForm = Depends()):
    try:
        db_user = await get_user(user.username)
    except DoesNotExist:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )

    if not verify_password(user.password, db_user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )

    return db_user
