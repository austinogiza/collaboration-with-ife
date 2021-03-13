import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './container/Layout';
import Home from './pages/Home';
import ScrollTop from './components/ScrollTop'

function App() {
  return (
   <>
<Router>

<Layout>
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
