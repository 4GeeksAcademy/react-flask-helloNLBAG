#!/bin/bash

echo "🚀 Iniciando entorno completo en GitHub Codespaces..."

# === BACKEND ===
echo "📁 Backend: Activando entorno virtual y lanzando Flask..."

cd "$(dirname "$0")" || exit 1

if [ ! -d "venv" ]; then
    echo "📦 Creando entorno virtual..."
    python3 -m venv venv
fi

source venv/bin/activate

echo "📄 Instalando dependencias del backend (si es necesario)..."
pip install -r requirements.txt

# Cargar variables del .env si tienes python-dotenv
if [ -f .env ]; then
    echo "🌍 Cargando variables de entorno desde .env"
    export $(grep -v '^#' .env | xargs)
fi

# Lanzar Flask en background
FLASK_APP=src/app.py FLASK_RUN_HOST=0.0.0.0 FLASK_RUN_PORT=5000 flask run &
BACKEND_PID=$!
sleep 2

# === FRONTEND ===
echo "🌐 Frontend: Entrando a src/front y lanzando Vite..."

cd src/front || { echo "❌ No se encontró src/front"; exit 1; }

echo "📦 Instalando dependencias del frontend (si es necesario)..."
npm install

# Lanzar Vite expuesto en el puerto 5173 (recomendado por GitHub Codespaces)
npm run dev -- --host 0.0.0.0 --port=5173

# Al salir, matamos Flask
kill $BACKEND_PID
