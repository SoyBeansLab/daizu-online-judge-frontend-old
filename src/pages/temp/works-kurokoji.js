import React from "react";
import CodeBlock from "../../atoms/app-code-block";

require("codemirror/theme/material.css");
const Works = () => (
  // サンプル示すときはlanguage='bash'とかにすべき
  <div>
    <h2>CodeBlock</h2>
    <CodeBlock language="cpp">
      {`
      #include <iostream>

      int main() {
        std::cout << "Hello" << std::endl;
      }
    `}
    </CodeBlock>
  </div>
);

export default Works;
