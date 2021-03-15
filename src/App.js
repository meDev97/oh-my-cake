import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
