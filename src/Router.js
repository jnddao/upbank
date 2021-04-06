// import react router
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// landing page/login form
import {LoginForm, Header} from './components/Up.js';

// The general theme of the app
import {UpTheme} from './style/UpStyle.js';

/**
 * A router to navigate through react app
 * @returns A navbar Router
 */
export function Navigation() {
    return (
    <>
        <Router>
            <Switch>
                <Route path="/about">
                    <h1>This is the about page</h1>
                </Route>
                <Route path ="/accounts">
                    <UpTheme><Header /><h1>This is the accounts page</h1></UpTheme>
                </Route>
                <Route path="/">
                    <UpTheme>
                        <Header />
                        <LoginForm/>
                    </UpTheme>
                </Route>
            </Switch>
        </Router>
    </>
    );
}
  