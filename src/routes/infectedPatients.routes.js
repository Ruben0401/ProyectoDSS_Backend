const {Router} = require ('express')
const 
{    
    getAllInfectedPatients,
    getInfectedPatient,
    createInfectedPatient,
    deleteInfectedPatient,
    updateInfectedPatient
} = require('../controllers/infectedPatients.controller')


const router= Router();

router.get('/infectados', getAllInfectedPatients)

router.get('/infectados/:id',getInfectedPatient)

router.post('/infectados',createInfectedPatient)

router.delete('/infectados/:id',deleteInfectedPatient)

router.put('/infectados/:id',updateInfectedPatient)

module.exports = router;