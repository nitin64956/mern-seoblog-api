const express = require('express')
const router = express.Router()
const {create,list,read,remove} =  require('../controllers/tag')

const {runValidation} = require('../validators/index')

const {createTagValidator} = require('../validators/tag')

const { requireSignin,adminMiddleware } = require('../controllers/auth')


router.post('/tag',runValidation,requireSignin,adminMiddleware,createTagValidator, create)
router.get('/tags',list)
router.get('/tag/:slug',read)
router.delete('/tag/:slug',requireSignin,adminMiddleware,remove)

module.exports = router