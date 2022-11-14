import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import GuestList from './components/GuestList'
import GuestDetails from './components/GuestDetails'
import NewGuest from './components/NewGuest'
import TableList from './components/TableList'
import NewTable from './components/NewTable'
import TableDetails from './components/TableDetails'
import EditTable from './components/EditTable'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<TableList />} />
          <Route path="/tables/new" element={<NewTable />} />
          <Route path="/tables/:id/edit" element={<EditTable />} />
          <Route path="/tables/:id" element={<TableDetails />} />
          <Route path="/guests" element={<GuestList />} />
          <Route path="tables/:tableId/guests/new" element={<NewGuest />} />
          <Route path="/guests/:id" element={<GuestDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

