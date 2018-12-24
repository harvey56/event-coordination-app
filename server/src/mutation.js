const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

// signup

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    // ! write function to create user in the DB
    const user = await context.prisma.createUser({ ...args, password })
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    return {
      token,
      user,
    }
}

// login
  
async function login(parent, args, context, info) {
    
    // ! write function to retrieve the user from DB
    const user = await context.prisma.user({ email: args.email })
    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}
  
module.exports = {
    signup,
    login,
    post,
}
  