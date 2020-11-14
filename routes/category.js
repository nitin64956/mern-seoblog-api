const express = require('express')
const router = express.Router()
const {create,list,read,remove} =  require('../controllers/category')

const {runValidation} = require('../validators/index')

const {categoryCreateValidator} = require('../validators/category')

const { requireSignin,adminMiddleware } = require('../controllers/auth')


router.post('/category',runValidation,requireSignin,adminMiddleware,categoryCreateValidator, create)
router.get('/categories',list)
router.get('/category/:slug',read)
router.delete('/category/:slug',requireSignin,adminMiddleware,remove)

module.exports = router