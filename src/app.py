import os
import time
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

# Simulación de base de datos en memoria (usa una real en producción)
users = {}

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Configuraciones seguras
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "fallback-key")

    # Inicializar JWT
    jwt = JWTManager(app)

    # Ruta de registro
    @app.route("/api/signup", methods=["POST"])
    def signup():
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"msg": "Faltan datos"}), 400
        if email in users:
            return jsonify({"msg": "Ya existe"}), 409

        hashed_password = generate_password_hash(password)
        users[email] = {"password": hashed_password, "created_at": time.time()}
        return jsonify({"msg": "Usuario creado"}), 201

    # Ruta de login
    @app.route("/api/login", methods=["POST"])
    def login():
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        user = users.get(email)
        if not user or not check_password_hash(user["password"], password):
            return jsonify({"msg": "Credenciales inválidas"}), 401

        token = create_access_token(identity=email)
        return jsonify(token=token), 200

    # Ruta protegida
    @app.route("/api/private", methods=["GET"])
    @jwt_required()
    def private():
        user = get_jwt_identity()
        return jsonify(logged_in_as=user), 200

    return app

# Ejecutar directamente (solo para desarrollo)
if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000, debug=True)
