import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items";
import NotFound from "./Components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import SortedItems from "./SortedItems";


/**
 * This sets up react router used for navigating and gives call to Items.js, Header.js, NotFound.js
 * 
 * @calls Items
 * @calls Header
 * @calls NotFound
 * @calls SortedItems
 */

const App = () => {
    return (
        <Router>
            <div className="App-Container">
                <Header />
                <Switch>
                    <Route exact path="/new">
                        <Items type="newstories" title="New" />
                    </Route>
                    <Route exact path="/best">
                        <Items type="beststories" title="Best" />
                    </Route>
                    <Route exact path="/ask">
                        <Items type="askstories" title="Ask" />
                    </Route>
                    <Route exact path="/show">
                        <Items type="showstories" title="Show" />
                    </Route>
                    <Route exact path="/jobs">
                        <Items type="jobstories" title="Jobs" />
                    </Route>
                    <Route exact path="/sorted-stories">
                        <SortedItems type="newstories" title="Sorted" />
                    </Route>
                    <Route exact path="/">
                        <Items type="topstories" title="Top" />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
