#!/bin/bash

# Ir al directorio raíz del proyecto
cd "$(dirname "$0")"/../..

echo "🔁 Cambiado al directorio raíz del proyecto: $(pwd)"

# Activar entorno virtual
if [ -d "venv" ]; then
    echo "📦 Activando entorno virtual..."
    source venv/bin/activate
else
    echo "❌ No se encontró el entorno virtual (venv/)."
    echo "💡 Puedes crearlo con: python3 -m venv venv"
    exit 1
fi

# Cargar variables del .env si python-dotenv está disponible
if ! command -v dotenv &> /dev/null; then
    echo "⚠️  El módulo 'python-dotenv' no está instalado. Recomendado para cargar .env automáticamente."
    echo "   Puedes instalarlo con: pip install python-dotenv"
fi

# Exportar manualmente las necesarias si no usas python-dotenv
export FLASK_APP=src/app.py
export FLASK_ENV=development
export FLASK_RUN_PORT=5000
export FLASK_RUN_HOST=0.0.0.0

# Iniciar Flask
echo "🚀 Iniciando backend Flask..."
flask run
