const express = require('express')
const app = express()
const PORT = 3001
app.use(express.json())
app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})


const dbconnection = require('./util/db')
dbconnection()

const cartRoute = require('./routes/cartRoutes')
const catererRoute = require('./routes/caterarRoute')
const deliveryRoute = require('./routes/deliveryRoute')
const deliveryStaffRoute = require('./routes/deliveryStaffModelRoute')
const dishRoute = require('./routes/dishRoute')
const orderRoute = require('./routes/orderRoute')
const paymentRoute = require('./routes/paymentRoute')
const reviewRoute = require('./routes/reviewRoute')
const roleRoute = require('./routes/roleRoute')
const userRoute = require('./routes/userRoute')

app.use("/cart",cartRoute)
app.use("/caterar",catererRoute)
app.use("/delivery",deliveryRoute)
app.use("/deliverystaff",deliveryStaffRoute)
app.use("/dish",dishRoute)
app.use("/order",orderRoute)
app.use("/payment",paymentRoute)
app.use("/review",reviewRoute)
app.use("/role",roleRoute)