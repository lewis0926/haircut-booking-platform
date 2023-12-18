from flask import Blueprint

from backend.client import services

client_bp = Blueprint('client', __name__)


@client_bp.route('/clients')
def get_clients():
    return services.get_clients()

# @client_bp.route('/clients/<int:client_id>')
# def view_client(client_id):
#     # Add logic to fetch and display details of a specific client
#     return render_template('client/view_client.html', client_id=client_id)
