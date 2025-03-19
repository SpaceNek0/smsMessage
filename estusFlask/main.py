from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore

import msgSender

app = Flask(__name__)
CORS(app)


@app.route('/msgForm', methods = ['POST'])
def msgReceiver():
    data = request.json

    print(f"estus: data recieved: {data}")
    msgSender.sender(data)
    return jsonify({"message": "form received", "data": 200}), 200

if __name__ == "__main__":
    app.run(debug=True)
