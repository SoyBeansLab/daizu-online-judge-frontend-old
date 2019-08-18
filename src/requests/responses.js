exports.responses = [
  [
    "GET",
    "/languages",
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
    "/contests",
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
];
