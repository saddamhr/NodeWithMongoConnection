const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// let Schema = mongoose.Schema
// let testSchema = new Schema({
//     name: String
// })

// let Test = mongoose.model('Test', testSchema)

app.use('/contacts', router)

app.get('/', (req, res) => {
    // let test = new Test({
    //     name: 'Saddam Hossain'
    // })
    // test.save()
    //     .then(t => {
    //         res.json(t)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.status(500).json({
    //             error: 'Error Occurred'
    //         })

    //     })

})

const PORT = process.env.PORT || 8080
mongoose.connect(`mongodb+srv://DiveIntoNodeJS:DiveIntoNodeJS@cluster0.axmnr.mongodb.net/DiveIntoNodeJS?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER RUNNING ON PORT ${PORT}`)
        })
    })
    .catch(e => {
        console.log(e)
    })
