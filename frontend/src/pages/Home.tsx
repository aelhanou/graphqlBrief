import { useUsersQuery } from '../generated'

function Home() {
  const {data} = useUsersQuery({endpoint:"http://localhost:4000/"})
    return (
      <>
        {data && console.log(data)
        }
      </>
    )
  }
  
  export default Home;