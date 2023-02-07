from typing import Optional

from tortoise.contrib.pydantic import pydantic_model_creator

from .models import Users
from pydantic import BaseModel

UserInSchema = pydantic_model_creator(
    Users, name="UserIn", exclude_readonly=True
)
UserOutSchema = pydantic_model_creator(
    Users, name="UserOut", exclude=["password", "created_at", "modified_at"]
)
UserDatabaseSchema = pydantic_model_creator(
    Users, name="User", exclude=["created_at", "modified_at"]
)

class Status(BaseModel):
    message: str

class TokenData(BaseModel):
    username: Optional[str] = None