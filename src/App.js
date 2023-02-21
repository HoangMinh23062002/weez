import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Fragment } from "react";
import { Default } from "./components/layouts";

import "./App.css";
import { publicRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          {
            /* let Layout = Default;

                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }  */
          }

          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                // <Layout>
                <Page />
                // </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
