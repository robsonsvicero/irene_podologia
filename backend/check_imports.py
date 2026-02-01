try:
    from fastapi import FastAPI
    from dotenv import load_dotenv
    from starlette.middleware.cors import CORSMiddleware
    from motor.motor_asyncio import AsyncIOMotorClient
    from pydantic import BaseModel
    print('imports_ok')
except Exception as e:
    print('import_error:', e)
