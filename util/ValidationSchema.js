const zod = require('zod')

const cartvalidationSchema = zod.object({
    body: zod.object({
        dishName: zod.string(),
        price: zod.number().int().positive()
    })
})

const caterarvalidationSchema = zod.object({
    body: zod.object({
        caterarName: zod.string(),
        address: zod.string(),
        phoneNumber: zod.number().int().positive(),
        openingTime: zod.date(),
        closingTime: zod.date()
    })
})

const deliveryvalidationSchema = zod.object({
    body: zod.object({
        pickupLocation: zod.string(),
        destination: zod.string(),
        status: zod.boolean(false)
    })
})

const deliveryStaffvalidationSchema = zod.object({
    body: zod.object({
        commission: zod.string(),
        salary: zod.int().Number().positive()
    })
})

const dishvalidationSchema = zod.object({
    body: zod.object({
        commission: zod.int().number().positive().min(0).max(100) ,
        salary: zod.int().number().positive()
    })
})

const ordervalidationSchema = zod.object({
    body: zod.object({
        orderdate: zod.date(),
        orderstatus: zod.boolean(),
        amount: zod.int().number().positive()
    })
})

const paymentvalidationSchema = zod.object({
    body: zod.object({
        paymentDate: zod.date(),
        amountPaid: zod.int().number().positive(),
        confirmationMsg: zod.string()
    })
})

const reviewvalidationSchema = zod.object({
    body: zod.object({
        rating: zod.number().int().positive().min(0).max(5),
        reviewText: zod.string(),
        reviewDate: zod.date()
    })
})

const rolevalidationSchema = zod.object({
    body: zod.object({
        roleName: zod.string()
    })
})

const uservalidationSchema = zod.object({
    body: zod.object({
        userName: zod.string(),
        email: zod.string().email(),
        password: zod.string().password(),
        phoneNumber: zod.int().number().positive().min(1000000000).max(9999999999),
        address: zod.string()
    })
})