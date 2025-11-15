import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routes/product.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv:Cluster0")
  .then(() => console.log("Connected to MongoDB database"))
  .catch((error) => console.error("Error connecting to MongoDB:", error))

app.use('/api/products', productRouter)

app.get('/', (req, res) => {
  res.send('Hello, this is from the API Server')
})

app.listen(3000, () => console.log("Server running on port 3000"))
