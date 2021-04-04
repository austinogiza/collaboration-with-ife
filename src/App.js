import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './container/Layout';
import Home from './pages/Home';
import ScrollTop from './components/ScrollTop';
import { GlobalStyled } from './styles/GlobalStyles';

function App() {
  return (
   <>
<Router>

<Layout>
<GlobalStyled/>
<ScrollTop />
<Switch>

<Route path="/" exact component={Home}/>

</Switch>

</Layout>

</Router>
   </>
  );
}

export default App;
