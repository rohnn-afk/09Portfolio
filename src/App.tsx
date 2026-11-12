import { Route, Routes } from "react-router-dom";
import { Portfolio, CaseStudy } from "./components/Editorial";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/experience/ezyr" element={<CaseStudy />} />
      <Route
        path="*"
        element={
          <main className="container section">
            <h1>Page not found.</h1>
            <a href={import.meta.env.BASE_URL}>Back to portfolio</a>
          </main>
        }
      />
    </Routes>
  );
}
