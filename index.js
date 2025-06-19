// console.log('Hi Everyone');
// console.log('Hi Faith');
const express = require('express');
const app = express()
const port = 5500
const htmlPage = '/html'

const allStudents = [
    { name: 'Ayanfe', age: 20, course: 'Computer science' },
    { name: 'Ayo', age: 27, course: 'Political science' },
    { name: 'Faith', age: 23, course: 'Food science' },
    { name: 'Anu', age: 30, course: 'Yoruba' },
    { name: 'Favour', age: 70, course: 'English' }
]

app.get('/api', (req, res) => {
    try {
        res.status(201).json({ message: allStudents })

    } catch (error) {
        res.status(503).json({ message: error })
    }
})







app.get("/", (request, response) => {
    response.send("Welcome to Node")
})
app.get('/dasboard', (request, response) => {
    response.send('Welome to dashboard')
})
app.get(htmlPage, (request, response) => {
    console.log('This route is working fine');
    response.sendFile(__dirname + '/index.html')
})



app.listen(port, () => {
    console.log('App is running on port 5500');
})