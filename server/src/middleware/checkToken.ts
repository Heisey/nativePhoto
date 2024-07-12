
import * as Services from '../services'
import * as Utils from '../utilities'

export const checkToken = Utils.catchAsync(async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1]

    if (!token) return res.status(401).json({ message: 'Unauthorized' })
    
    const decoded = await Services.firebase.auth.verifyIdToken(token)

    if (!decoded) return res.status(401).json({ message: 'Unauthorized'})

    next()
  } catch(err) {
    console.log(err)
    res.status(401).json({ message: 'Unauthorized'})
  }
})