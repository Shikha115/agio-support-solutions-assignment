import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./layout/Header";

function App() {

  
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <div className="min-h-screen bg-gray-900 p-6">
          <div className="max-w-7xl mx-auto">
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </div>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
