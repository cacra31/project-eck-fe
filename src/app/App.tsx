import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import AppShell from "../shared/components/layout/AppShell";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
