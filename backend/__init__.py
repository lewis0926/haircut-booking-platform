from flask import Flask


def create_app():
    app = Flask(__name__)

    # Load configuration from config.py
    app.config.from_pyfile('config.py')

    # Register blueprints
    from backend.client.routes import client_bp

    app.register_blueprint(client_bp)

    return app
