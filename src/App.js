import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import './App.css';
// import img from './img/fotopro.jpeg'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className='home-wrapper'>
            <h1 className='home'>Home</h1>
          </div>
        </Route>
        <Route path='/nombre'>
          <div className='nombre-wrapper'>
            <h1 className='nombre'>Uriel_González</h1>
          </div>
        </Route>
        <Route path='/UTD'>
          <div className='utd-wrapper'>
            <h1 className='utd'>UTD</h1>
          </div>
        </Route>
        <Route path='/carrera'>
          <div className='carrera-wrapper'>
            <h1 className='carrera'>Desarrollo de Software Multiplataforma</h1>
          </div>
        </Route>
        <Route path='/logo'>
          <div className='logo'></div>
        </Route>
        <Route path='/foto'>
          <h2>Hola, busco empleo</h2>
          {/* <img src={img}></img> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
