import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "components/organism/Navbar";
import "react-toastify/dist/ReactToastify.css";
import CustomToastContainer from "components/molecule/CustomToastContainer";
import BlockUI from "components/molecule/BlockUI";
import { useSelector } from "react-redux";
import { ReduxState } from "modules/redux/reducer";
const HomePage = React.lazy(() => import("components/pages/HomePage"));
const LoginPage = React.lazy(() => import("components/pages/LoginPage"));


const App: React.FC = () => {
    const isLoading = useSelector((state: ReduxState) => state.isLoading);

    return (
        <React.Fragment>
            <BlockUI blocking={isLoading}>
                <Router>
                    <Navbar />
                    <main>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route path="/login">
                                    <LoginPage />
                                </Route>
                                <Route path="/">
                                    <HomePage />
                                </Route>
                            </Switch>
                        </Suspense>
                    </main>
                    <CustomToastContainer />
                </Router>
            </BlockUI>
        </React.Fragment>
    );
};

export default App;
