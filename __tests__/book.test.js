const axios = require('axios')

const axiosInstanse = axios.create({
    baseURL: 'https://demoqa.com/',
    timeout: 1000,
    validateStatus: () => true,
})

test('GET /BookStore/v1/Books status code is 200', async () => {
    const response = await axiosInstanse.get('BookStore/v1/Books')
    expect(response.status).toBe(200)
})

test('GET /BookStore/v1/Books response have property books', async () => {
    const response = await axiosInstanse.get('BookStore/v1/Books')
    expect(response.data).toHaveProperty('books')
})

test('GET /BookStore/v1/Books response have 8 book items', async () => {
    const response = await axiosInstanse.get('BookStore/v1/Books')
    expect(response.data.books).toHaveLength(8)
    expect(response.data.books.length).toBeLessThanOrEqual(8)
})

test('GET /BookStore/v1/Books with correct ID has status code 200', async () => {
    const response = await axiosInstanse.get('BookStore/v1/Book', {
        params: { ISBN: 9781593275846 },
    })
    expect(response.status).toBe(200)
})

test('GET /BookStore/v1/Books with nonexistant ID has status code 404', async () => {
    const response = await axiosInstanse.get('BookStore/v1/Book', {
        params: { ISBN: 123456 },
    })
    expect(response.status).toBe(400)
})


