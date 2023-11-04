import ForgotPasswordPage from "./ForgotPasswordPage";
import "./App.css";
import PasswordResetForm from "./PasseordResetForm";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ForgotPasswordPage></ForgotPasswordPage>
        </Route>
        <Route path="/resetPassword">
          <PasswordResetForm></PasswordResetForm>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
