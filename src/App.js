// // import library etc.
// import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// // import components
// import rishi from "./pages/temp/works-rishi";
// import syrc from "./pages/temp/works-syrc";
// //styles
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

// function App() {
//   const classes = useStyles;

//   return (
//     <div className={classes.root}>
//       <div className="App">
//         <BrowserRouter>
//           <header className="App-header">
//             <ul>
//               <li>
//                 <Link to="/rishi">rishi works</Link>
//               </li>
//               <li>
//                 <Link to="/syrc">syrc works</Link>
//               </li>
//             </ul>
//             <Route exact path="/rishi" component={rishi} />
//             <Route exact path="/syrc" component={syrc} />
//           </header>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

// export default App;

// import library etc.
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import components
import rishi from "./pages/temp/works-rishi";
import syrc from "./pages/temp/works-syrc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/rishi">rishi works</Link>
            </li>
            <li>
              <Link to="/syrc">syrc works</Link>
            </li>
          </ul>
          <Route exact path="/rishi" component={rishi} />
          <Route exact path="/syrc" component={syrc} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
