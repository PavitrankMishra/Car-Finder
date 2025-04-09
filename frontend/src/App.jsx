import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import EditUser from "./components/EditUser";
// import DeleteUser from "./components/DeleteUser";
// import AddUsers from "./components/AddUsers";

function App() {
  const [cars, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://car-finder-uuwc.onrender.com/");
        if (!response.ok) {
          throw new console.error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data.cars);
        console.log(data.cars);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage cars={cars} />} />
        {/* <Route
          path="/addusers"
          element={<AddUsers users={users} setUsers={setUsers} />}
        />
        <Route
          path="/editusers"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
        <Route
          path="/deleteusers"
          element={<DeleteUser users={users} setUsers={setUsers} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
