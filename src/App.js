import { lazy, Suspense } from "react"; //hado dial performence 
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

const Home = lazy(()=>import("./pages/Home"))
const Catalogue = lazy(()=>import("./pages/Catalogue"))
const PlaceOrder = lazy(()=>import("./pages/PlaceOrderPage"))
const Checkout = lazy(()=>import("./pages/Checkout"))

function App() {

  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Catalogue} />
          <Route path="/delivery" component={PlaceOrder} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
