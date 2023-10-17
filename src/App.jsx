import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HalamanAktif from './pages/HalamanAktif';

function App() {
  return (
    <>
    <header>
      <h1>Daftar Catatan</h1>
      
    </header>
    <main>
      <Routes>
       
        <Route path="/halaman-aktif" element={<HalamanAktif />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
