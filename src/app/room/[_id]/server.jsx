export  const getRoom=async(id)=>{
      try {
        const res = await fetch(`/api/room/${id}`,{
            method:"GET"
        })
        const data = await res.json()
        return data
        
      } catch (error) {
        console.error(error)
      }
  }