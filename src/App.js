import { lazy, Suspense, useEffect, useState } from "react"; //hado dial performence
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Loading from "./components/Loading";
import firebase from "./firebase";
import AboutPage from "./pages/about";
import Delivery from "./pages/Delivery";
import { setCurrentUser } from "./redux/user/userActions";

const Home = lazy(() => import("./pages/Home"));
const Catalogue = lazy(() => import("./pages/Catalogue"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrderPage"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App({ location, setCurrentUser, currentUser }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(
      location.pathname.includes("login") ||
        location.pathname.includes("register")
    );
  }, [location.pathname]);

  useEffect(() => {
    const userSubscribe = firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => userSubscribe();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      {!auth && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalogue} />
        <Route path="/place-order" component={PlaceOrder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about" component={AboutPage} />
        <Route path="/delivery" component={Delivery} />

        {currentUser ? (
          <Route>
            <Redirect to="/" />
          </Route>
        ) : (
          <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        )}
      </Switch>

      {!auth && <Footer />}
    </Suspense>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};
export default withRouter(connect(mapStateToProps, { setCurrentUser })(App));
