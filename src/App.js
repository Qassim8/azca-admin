import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Events from "./pages/Events.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import News from "./pages/News.jsx";
import AddNews from "./pages/AddNews.jsx";
import Users from "./pages/Users.jsx";
import AddUser from "./pages/AddUser.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/events" element={<Events />} />
          <Route path="/dashboard/addevent" element={<AddEvent />} />
          <Route path="/dashboard/news" element={<News />} />
          <Route path="/dashboard/addnews" element={<AddNews />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/adduser" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
