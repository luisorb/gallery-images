import './App.css'
import React, { lazy, Suspense } from 'react';


const Galeria = lazy(() => import('./components/Gallery'));

function App() {

  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Galeria />
      </Suspense>
    </>
  )
}

export default App
