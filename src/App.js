import { BrowserRouter, Switch , Route} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
