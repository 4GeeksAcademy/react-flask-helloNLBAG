from flask import Flask
from flask_jwt_extended import JWTManager
from .models import db
from .routes import api

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
    app.config['JWT_SECRET_KEY'] = 'your-secret-key'

    db.init_app(app)
    JWTManager(app)

    app.register_blueprint(api, url_prefix="/api")

    with app.app_context():
        db.create_all()

    return app
