import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
