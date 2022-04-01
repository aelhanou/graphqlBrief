import React, { useEffect } from 'react';
import { useUsersQuery } from './generated'

import './App.css';

function App() {

  const { data } = useUsersQuery({
    endpoint: "http://localhost:4000", fetchParams: {
      headers: {
        "Content-Type": "application/json"
      }
    }
  })
  useEffect(() => {
    console.log(data?.users);

  }, [data?.users])
  return (
    <>
      hhh
    </>
  )
}

export default App;
