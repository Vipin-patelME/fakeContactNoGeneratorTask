import React from 'react'

export default function Carrier() {

  //const[contactNo, setContactNo] = useState([])

  // useEffect(()=>{
  //   const getRndInteger =(min, max) =>{
  //     return Math.floor(Math.random() * (max - min + 1) ) + min;
  //   }
  //   //console.log(getRndInteger(6000000000, 9000000000))
  //   const data = getRndInteger(6000000000, 9000000000)
  //   setContactNo(prevContactNo => ([...prevContactNo, data]))
  // },[])
  const bearerToken = "78e2a746f750bff43a7b2bd8c9e8b7ed2dc22c02ee24e19671794f42380920584579a803982b7323dea03017e932980bd1d7424f2a28822911f72bd7d34db61b0e6641ba99fa5366896852354c40c0056f0befa3439b87b89faf97e1f832fbd081066a66bca587241fec18267149c98c0ecfb7b0da0bd1223f7bf041d04131b0"
  for (let i = 0; i< 201; i++ ){
    const getRndInteger =(min, max) =>{
          return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
        //console.log(getRndInteger(6000000000, 9000000000))
    const data = getRndInteger(6000000000, 9000000000)
        //numberArray.push(data)
    const payload = {
                      "data": {
                        "customer_mobile": data.toString(),
                        "is_fake": "yes"
                      }
                    }
    const options = {
      method:"POST",
      headers:{
        "Content-type":"application/json",
        "Authorization":`Bearer ${bearerToken}`
      },
      body:JSON.stringify(payload)
    }
    
    fetch("http://38.242.236.173:1337/api/delivery-phones", options)
    .then((res)=>{
      console.log(res.json())
    })
    .then()
    .catch()

  }
  //console.log(numberArray)



  return (
    <h1>Carrier</h1>
  )
}
