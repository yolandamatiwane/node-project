import express from 'express'
import { fetchUsers, fetchUser , fetchRecentUser, addUser, removeUser, updateUser} from '../controller/usersController.js'

const router = express.Router()

router.get('/',fetchUsers)
router.get('/:id',fetchUser)
router.get('/recent',fetchRecentUser)
router.post('/addUser',addUser)
router.delete('/removeUser/:id',removeUser)
router.put('/updateUser/:id',updateUser)


export default router 