const UrlPattern = require("url-pattern");

exports.responses = [
  [
    "GET",
    new UrlPattern("/languages"),
    200,
    {
      language: [
        {
          language: "python",
          version: "3.6.2",
          base_image: "python",
          compile_command: "",
          execute_command: "python -b Main.py",
        },
        {
          language: "C++",
          version: "9.1.0",
          base_image: "gcc",
          compile_command: "gcc -std=gnu11 -O2 -o Main.out Main.c -lm",
          execute_command: "./Main.out",
        },
      ],
    },
  ],

  [
    "GET",
    new UrlPattern("/contests"),
    200,
    {
      contests: [
        {
          contest_name: "Welcome Contest",
          contest_id: "hogehoge",
          contest_date: "2019/04/04",
          contest_time: 120,
          writer: "hoge",
          contest_description: "This is Welcome Contest",
          problem_numbler: 4,
        },
        {
          contest_name: "New Welcome Contest",
          contest_id: "hogepoyo",
          contest_date: "2019/04/04",
          contest_time: 120,
          writer: "poyo",
          contest_description: "This is New Welcome Contest",
          problem_numbler: 5,
        },
      ],
    },
  ],

  [
    "GET",
    new UrlPattern("/contests/:contest_name"),
    200,
    {
      contest_detail: {
        contest_id: "hogehoge",
        contest_name: "Welcome Contest",
        contest_date: "2019-04-04",
        contest_time: 120,
        writer: "hoge",
        description: "This is contest's content.",
      },
    },
  ],

  [
    "GET",
    new UrlPattern("/contests/:contest_name/problems"),
    200,
    {
      problems: [
        {
          problem_id: "A",
          problem_name: "Hellor World",
          time_limit: 2,
          memory_limit: 512,
          problem_score: 100,
        },
        {
          problem_id: "B",
          problem_name: "is uruu?",
          time_limit: 2,
          memory_limit: 512,
          problem_score: 200,
        },
        {
          problem_id: "C",
          problem_name: "power word",
          time_limit: 2,
          memory_limit: 512,
          problem_score: 300,
        },
        {
          problem_id: "D",
          problem_name: "Neo Hello World",
          time_limit: 2,
          memory_limit: 512,
          problem_score: 400,
        },
      ],
    },
  ],

  [
    "GET",
    new UrlPattern("/contests/:contest_name/problems/:problem_id"),
    200,
    {
      problem_detail: {
        problem_id: "hogehoge",
        problem_name: "Hello World",
        time_limit: 2,
        memory_limit: 512,
        score: 100,
        writer: "hoge",
        problem_detail: "# Hello, World<\n>## 問題<br>---<br>HelloWorldと1行に表示しなさい",
      },
    },
  ],
];
