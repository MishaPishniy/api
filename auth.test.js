const axios = require('axios')

test('auth can get token', async ()=>{

    const authResponse = await axios.post('https://demoqa.com/Account/v1/GenerateToken', {
        "userName": "SumMP",
        "password": "Qwerty123!"
      })
      expect(authResponse.status).toBe(200)
      expect(authResponse.data).toHaveProperty('token')
})


test('auth can get user info', async ()=>{

    const authResponse = await axios.post('https://demoqa.com/Account/v1/GenerateToken', {
        "userName": "SumMP",
        "password": "Qwerty123!"
      })

      const token = authResponse.data.token
      const userInfoResponse = await axios.post('https://demoqa.com/Account/v1/User',{
        "userName": "SumMP",
        "password": "Qwerty123!"
      },
      {
        ValidityState:(statuse)=> true,
        Headers:
        {
        Authorization: `Bearer ${token}`
     }
    })
     console.log('BEAFORE')
      expect(userInfoResponse.data.massage).toBe('User exists!')
      expect(userInfoResponse.status).toBe(200)
      console.log('AFTER')
    })