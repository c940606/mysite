from pydantic import BaseSettings, AnyHttpUrl


class Settings(BaseSettings):
    API_PREFIX: str = "/api"  # 接口前缀

    SECRET = 'b4bef3ef74182a3cd634b669fefff292e7670761901b029b'
    ALGORITHM = "HS256"  # 加密算法


settings = Settings()
