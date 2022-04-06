import React, { useEffect, useState } from 'react';
import { useUsersQuery } from './generated'

import './App.css';

function App() {
  const [value, setValue] = useState([])

  const { data, isLoading }: any = useUsersQuery({})
  useEffect(() => {
    if (isLoading == false) {
      console.log(data.users);
    }
  }, [isLoading])
  return (
    <>
      {(isLoading == false) && data?.users?.map((e: any, i: any) => {
        return (

          <div key={i}>
            <div  >bro:{e.id}</div>
            <div  >bro:{e.fullName}</div>
            <div  >bro:{e.email}</div>
          </div>

        )

      })}
    </>
  )
}

export default App;
