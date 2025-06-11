#!/bin/bash

echo "🚀 Iniciando frontend..."

# 1. Buscar procesos viejos que usen los puertos típicos
echo "🔍 Buscando procesos Vite en puertos comunes..."
for port in 3000 5173 5174 5175 5180; do
  pid=$(lsof -ti tcp:$port)
  if [ ! -z "$pid" ]; then
    echo "🛑 Cerrando proceso en puerto $port (PID: $pid)"
    kill -9 $pid
  fi
done

# 2. Ir al directorio del frontend
cd src/front || { echo "❌ No se encontró src/front"; exit 1; }

# 3. Instalar dependencias si faltan
echo "📦 Instalando dependencias..."
npm install

# 4. Iniciar Vite en puerto 3000 con host público
echo "🌍 Iniciando Vite en puerto 3000 con host expuesto..."
npm run dev -- --host --port=3000
