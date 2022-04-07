import React, { useEffect, useState } from 'react';
import { useLoginMutation } from './generated'

import './App.css';

function App() {
  const [value, setValue] = useState({})

  const { data } = useLoginMutation({ variables: { loginInput: { email: "elhanouniazeddine00@gmail.com", password: "123" } } }) || {}
  // const { data, isLoading }: any = useUsersQuery({})
  // useEffect(() => {
  //   if (isLoading == false) {
  //     console.log(data.users);
  //   }
  // }, [isLoading])

  useEffect(() => {
    if (data) {
      console.log(data?.login?.user);
      setValue(data?.login?.user)
    }
  }, [data])

  return (
    <>
      {/* {(isLoading == false) && data?.users?.map((e: any, i: any) => {
        return (

          <div key={i}>
            <div  >bro:{e.id}</div>
            <div  >bro:{e.fullName}</div>
            <div  >bro:{e.email}</div>
          </div>

        )

      })} */}

      <div>
        <div>
          {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */}

        </div>
        <button>add</button>
      </div>



    </>
  )
}

export default App;
