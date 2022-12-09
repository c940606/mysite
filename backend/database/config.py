import os


TORTOISE_ORM = {
    "connections": {"default": "mysql://sql_fastapi:WBar8Ei6jAaW5S8k@101.43.104.15:3306/sql_fastapi"},
    "apps": {
        "models": {
            "models": [
                "database.models"
            ],
            "default_connection": "default"
        }
    }
}
