// // console.log('Hi Everyone');
// // console.log('Hi Faith');
// require('ejs')
// const express = require('express');
// const app = express()
// const port = 5500
// const htmlPage = '/html'

// const name = {
//     oruko: "Faith",
//     age: 56
// }

// app.set('view engine', 'ejs')

// app.get('/signup', (req, res) => {
//     res.render('sign.ejs')
// })
// app.get('/signin', (req, res) => {
//     res.render('signin.ejs')
// })
// app.get('/dashboard', (req, res) => {
//     res.render('dashboard.ejs', {name, info: allStudents, score: -10})
// })
// app.get('/signin', (req, res) => {

// })
// app.get('/dashboard', (req, res) => {

// })
// const faithData = [
//     { name: "Kolade Faith" },
//     { gender: "Female" },
//     { age: 34 },
//     { school: "Lautech" },

// ]
// app.get('/faithData', (request, response) => {
//     try {
//         response.status(201).json({ message: faithData })
//     }
//     catch (err) {
//         response.status(503).json({ message: err })
//     }
// })
// const allStudents = [
//     { name: 'Ayanfe', age: 20, course: 'Computer science' },
//     { name: 'Ayo', age: 27, course: 'Political science' },
//     { name: 'Faith', age: 23, course: 'Food science' },
//     { name: 'Anu', age: 30, course: 'Yoruba' },
//     { name: 'Favour', age: 70, course: 'English' }
// ]

// app.get('/api', (req, res) => {
//     try {
//         res.status(201).json({ message: allStudents })

//     } catch (error) {
//         res.status(503).json({ message: error })
//     }
// })







// app.get("/", (request, response) => {
//     response.send("Welcome to Node")
// })
// app.get('/dasboard', (request, response) => {
//     response.send('Welome to dashboard')
// })
// app.get(htmlPage, (request, response) => {
//     console.log('This route is working fine');
//     response.sendFile(__dirname + '/index.html')
// })



// app.listen(port, () => {
//     console.log('App is running on port 5500');
// })



const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
const express = require('express');
const port = 5505
const app = express()
const uri = "mongodb+srv://koladefaith1000:wW36SMKbAljlJCAX@cluster0.xxzirgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(port, () => {
    console.log('app is working');

})
const connection = mongoose.connect(uri)
connection.then(() => {
    console.log('Connected to mongodb');

})
    .catch((err) => {
        console.log("error connecting to mongodb");

    })