import axios from "axios";

const res = await axios.get('https://demoqa.com/BookStore/v1/Books')
console.log(res.data)