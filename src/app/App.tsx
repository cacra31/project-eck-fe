import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import AppShell from "../shared/components/layout/AppShell";
import NotFoundPage from "../pages/NotFoundPage";

function HomePage() {
  return <Text></Text>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
