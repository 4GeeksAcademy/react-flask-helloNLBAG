#!/bin/bash

# Ir al directorio del frontend
cd "$(dirname "$0")"/src/front || {
  echo "❌ No se encontró src/front"
  exit 1
}

echo "📁 Cambiado a $(pwd)"

# Instalar dependencias si es necesario
echo "📦 Instalando dependencias (si no están)..."
npm install

# Iniciar Vite en puerto 5180 con host expuesto
echo "🚀 Iniciando Vite en http://localhost:5180"
npm run dev -- --host --port=5180
