import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import TechPage from "./components/TechPage";
import BlogPage from "./components/BlogPage";
import JavascriptPage from "./components/JavascriptPage";
import ReactPage from "./components/ReactPage";
function App() {
  // route url
  // tech url
  // blog url

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"tech"} element={<TechPage />}>
          <Route path="javascript" element={<JavascriptPage />} />
          <Route path="react" element={<ReactPage />} />
        </Route>
        <Route path={"blog"} element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
