# CC Backend

Backend inicial de CC construido con FastAPI.

## Requisitos

- Python 3.11+

## Instalacion

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Ejecucion local

```powershell
uvicorn app.main:app --reload
```

## Endpoint inicial

- `GET /health`
