import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import GuestList from './components/GuestList'
import TableList from './components/TableList'
import NewTable from './components/NewTable'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guests" element={<GuestList />} />
          <Route path="/tables" element={<TableList />} />
          <Route path="/tables/new" element={<NewTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

