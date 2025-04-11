import express from 'express'
import authenticateToken  from '../middlewares/auth.js'

const router = express.Router()


//Exemplo de rota privada
router.get('/listar-gatos', authenticateToken, async (req, res) => {
    try {
        const [rows] = await req.db.query('SELECT * FROM cats')
        res.status(200).json(rows)
    } catch (error) {
        console.error('Error fetching cats:', error)
        res.status(500).json({ error: 'Error fetching cats' })
    }
})

export default router