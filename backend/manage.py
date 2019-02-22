from flask_script import Server, Manager
from app.webapp import app

manager = Manager(app)
manager.add_command("runserver", Server())

if __name__ == "__main__":
    manager.run()
