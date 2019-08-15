import React from "react";
import Problem from "../../templates/Problem";

const problemText = `
Math, like $C_{d}^{\\prime} = \\frac{\\alpha}{}$, is pretty cool.

$C_{d}^{\\prime} = \\frac{\\alpha}{}$

$\\sin{x}$

$$
\\cos{x}
$$

# hoge

- a
- bc

\`1 2 3 4\`

\`\`\`
lsdjlas
12er3
\`\`\`

<pre>
hogehoge
</pre>
`;

const Works = () => (
  // サンプル示すときはlanguage='bash'とかにすべき
  <div>
    <Problem
      problemID="A"
      problemName="ほげそいや"
      timeLimit={2}
      memoryLimit={256}
      score={100}
      problemText={problemText}
      languageLists={["C", "C++17", "Python"]}
      languageDictionary={{ C: "text/x-csrc", "C++": "text/x-c++src", Python: "text/x-python" }}
    />
  </div>
);

export default Works;
