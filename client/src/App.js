import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    color: {
      primary: "#FF8F00",
      secondary: "#DFDFDF",
      tetiary: "rgba(0,0,0,0.7)",

      bigTextColor: "rgba(255,255,255,0.8)",
      mediumTextColor: "#FF8F00",
      smallTextColor: "rgba(255,255,255,0.6)",
    },
    size: {
      smallTextDesktop: "13px",
      mediumTextDesktop: "17px",
      largeTextDesktop: "22px",

      samllTextTablet: "17px",
      mediumTextTablet: "17px",
      LargeTextMobile: "17px",

      smallTextMobile: "22px",
      mediumTextMobile: "22px",
      largeTextMobile: "22px",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Route>
    )
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
