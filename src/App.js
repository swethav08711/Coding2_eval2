import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./container/Header"
import ProductDetail from "./container/ProductDetail"
import ProductList from "./container/ProductList"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
