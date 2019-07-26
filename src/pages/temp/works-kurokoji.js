import React from "react";
import CodeBlock from "../../atoms/app-code-block";
import CheckBox from "../../atoms/app-checkbox";
import ProblemInfo from "../../molecules/ProblemInfo";
import CodeSubmit from "../../molecules/CodeSubmit";

const code = `
#include <iostream>

int main() {
  std::cout << "Hello" << std::endl;
}
`;

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
    <h2>CodeBlock</h2>
    <CodeBlock language="">{code}</CodeBlock>
    <h2>CheckBox</h2>
    <CheckBox checkBoxText="CheckBox" />

    <ProblemInfo
      problemID="A"
      problemName="ほげそいや"
      timeLimit={2}
      memoryLimit={256}
      score={100}
      problemText={problemText}
    />
    <CodeSubmit
      languageLists={["C", "C++17", "Python"]}
      languageDictionary={{ C: "text/x-csrc", "C++": "text/x-c++src", Python: "text/x-python" }}
    />
  </div>
);

export default Works;
