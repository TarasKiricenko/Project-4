import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddPost from './components/AddPost'
import Home from './components/Home'
import Login from './components/Login'
import Posts from './components/Posts'
import Register from './components/Register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/addpost' component={AddPost}/>
      </Switch>
    </Router>
  )
}

export default App