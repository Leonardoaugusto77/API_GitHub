import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";

export default function Routes() {
  return (
    <Router>
      <Route>
        <App />
      </Route>
    </Router>
  );
}
