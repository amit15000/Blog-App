import { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // <div className="flex flex-col items-center gap-y-7">
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
