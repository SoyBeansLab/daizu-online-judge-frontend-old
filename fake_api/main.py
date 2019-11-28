from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/contests/<contest_id>", methods=["GET"])
def contest_info(contest_id):
    result = {
        "contest_top_content": "# Hello World!  ## Welcome!",
        "problem_list": [
            {
                "problem_id": "Hello_World",
                "problem_order": "A",
                "problem_name": "Hello World!",
                "time_limit": 2,
                "memory_limit": 256,
                "problem_score": 100,
            },
            {
                "problem_id": "uruu",
                "problem_order": "B",
                "problem_name": "is uruu?",
                "time_limit": 2,
                "memory_limit": 256,
                "problem_score": 100,
            },
            {
                "problem_id": "New_Hello_World",
                "problem_order": "C",
                "problem_name": "New Hello World!",
                "time_limit": 2,
                "memory_limit": 256,
                "problem_score": 1000,
            },
        ],
    }
    return jsonify(result)


@app.route("/contests", methods=["GET"])
def contests():
    result = {
        "upcoming": [
            {
                "contest_id": "mitohato",
                "contest_name": "mito_contest",
                "contest_date": "2019-08-17 12:00:00",
                "contest_time": 120,
                "writer": "mitohato",
                "contest_description": "Welcome!",
                "problem_number": 2,
            },
            {
                "contest_id": "nemusou",
                "contest_name": "nemusou_contest",
                "contest_date": "2019-08-17 12:00:00",
                "contest_time": 120,
                "writer": "mitohato",
                "contest_description": "Hello World!",
                "problem_number": 2,
            },
        ],
        "current": [
            {
                "contest_id": "kurokoji",
                "contest_name": "kurokoji_contest",
                "contest_date": "2019-08-17 12:00:00",
                "contest_time": 120,
                "writer": "mitohato",
                "contest_description": "Hello World!",
                "problem_number": 2,
            }
        ],
        "recent": [
            {
                "contest_id": "10riridk0",
                "contest_name": "10riridk0_contest",
                "contest_date": "2019-08-17 12:00:00",
                "contest_time": 120,
                "writer": "mitohato",
                "contest_description": "Hello World!",
                "problem_number": 2,
            }
        ],
    }
    return jsonify(result)


if __name__ == "__main__":
    app.run()
