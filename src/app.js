import express from 'express'
import cartaRoutes from './routes/carta.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

//app.get('/ping', (re, res) => res.send('pong'));

app.use(indexRoutes)
app.use('/api', cartaRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message:'ruta no encontrada'
    })
})
export default app;