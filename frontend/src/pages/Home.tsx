import { useUsersQuery } from '../generated'

function Home() {
  const {data} = useUsersQuery({})
    return (
      <>
        {data && console.log(data)
        }
      </>
    )
  }
  
  export default Home;