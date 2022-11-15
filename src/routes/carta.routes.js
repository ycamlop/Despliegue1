import { Router } from 'express'
import { getCarta, createCarta, updateCarta, deletePlato, getCartas } from '../controllers/carta.controller.js'

const router = Router()

router.get('/carta', getCarta)

router.get('/carta/:id', getCartas)

router.post('/carta',createCarta)

router.patch('/carta/:id', updateCarta)

router.delete('/carta/:id', deletePlato)

export default router 