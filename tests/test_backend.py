import pytest
from fastapi.testclient import TestClient
from backend.server import app


def test_root_endpoint():
    """Testa a rota GET /api/"""
    client = TestClient(app)
    response = client.get("/api/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}


def test_app_startup():
    """Testa se a aplicação inicia sem erros"""
    client = TestClient(app)
    assert client is not None
