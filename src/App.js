import "assets/css/style.css";

import { Router, Route, Switch } from "react-router-dom";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

function App() {
  return (
    <div className=" container mx-auto">
      <h1 className=" text-6xl">Hello world!</h1>
    </div>
  );
}

export default App;
