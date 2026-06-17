import { Show, useAuth, useClerk } from '@clerk/react';
import React from 'react';
import {Navigate, Routes} from "react-router-dom";
const App = () => {
  const {isLoaded} = useAuth();
  if(!isLoaded) return null;
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/result" element={
        <>
        <Show when="signed-in">
          <MyResultPage />
        </Show>

        <Show when="signed-out">
          <Navigate to="/" />
        </Show>
        </>
      } />
    </Routes>
  )
}

export default App;