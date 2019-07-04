import React from "react";
import CodeBlock from "../../atoms/app-code-block";
import CheckBox from "../../atoms/app-checkbox";

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
    <h2>CheckBox</h2>
    <CheckBox checkBoxText="CheckBox" />
  </div>
);

export default Works;
