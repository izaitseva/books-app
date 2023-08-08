import { Route, Routes } from "react-router";
import "./App.css";
import { paths } from "./paths";
import Main from "./pages/Main";
import { NotFound } from "./pages/NotFound";
import { Statistics } from "./pages/Statistics";
import { Library } from "./pages/Library";
import { StartTraining } from "./pages/StartTraining";
import SharedLayout from "./pages/SharedLayout";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

function App() {
  return (
    <Routes>
      <Route path={paths.main} element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.register} element={<Registration />} />
        <Route path={paths.library} element={<Library />} />
        <Route path={paths.startTraining} element={<StartTraining />} />
        <Route path={paths.statistics} element={<Statistics />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
