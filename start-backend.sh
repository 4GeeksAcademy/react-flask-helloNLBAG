#!/bin/bash

echo "🐍 Iniciando backend Flask..."

# Crear entorno virtual si no existe
if [ ! -d "venv" ]; then
  echo "📦 Creando entorno virtual en ./venv"
  python3 -m venv venv
fi

echo "✅ Activando entorno virtual"
source venv/bin/activate

# Instalar dependencias si requirements.txt existe
if [ -f "requirements.txt" ]; then
  echo "📥 Instalando dependencias del backend"
  pip install -r requirements.txt
else
  echo "❌ No se encontró requirements.txt"
  exit 1
fi

# Cargar variables del entorno si existe .env
if [ -f ".env" ]; then
  echo "🌱 Cargando variables del .env"
  export $(grep -v '^#' .env | xargs)
else
  echo "⚠️ No se encontró archivo .env"
fi

# Ejecutar Flask desde src/
cd src
export FLASK_APP=app.py
export FLASK_ENV=development
export FLASK_RUN_PORT=5000
export FLASK_RUN_HOST=0.0.0.0

echo "🚀 Ejecutando Flask en http://localhost:5000"
flask run
