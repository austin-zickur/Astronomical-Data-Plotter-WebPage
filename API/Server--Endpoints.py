from flask import Flask, request, jsonify
from DataReader import FileSof

app = Flask(__name__)

# UPLOAD ENDPOINT
@app.route('/upload', methods=['POST'])
def upload_file():
    my_files = request.files.getlist("files")
    saved = FileSof(my_files)
    return jsonify(saved), 200

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)