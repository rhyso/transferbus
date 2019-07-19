import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'

const App = () => (
    <Router>
        <h1 className="header"> Healys Wheelies </h1>
        <div className="App">
            <div className="wrapper">
                <div>
                    <img src="https://www.dropbox.com/s/1xl3fnmcgg9e7gf/bus.png?raw=1" alt="" className="bus"/>
                </div>
                <div className="wrapper-2">
                    <img src="https://www.dropbox.com/s/qczcjewss1v7vk6/road.png?raw=1" alt="" className="road"/>
                </div>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/book/">Book</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/book/" component={Book} />
        </div>
    </Router>
)

export default App

