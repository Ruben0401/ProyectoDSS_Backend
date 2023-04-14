const {Router} = require ('express')
const 
{    
    getAllPatients,
    getAllPatientsD,
    getPatient,
    registerPatient,
    deletePatient,
    updatePatient,
    updateDoctorXPatient
} = require('../controllers/patients.controller')


const router= Router();

router.get('/pacientes', getAllPatients)

router.get('/pacientesD/:dni',getAllPatientsD)

router.get('/pacientes/:dni',getPatient)

router.post('/pacientes',registerPatient)

router.delete('/pacientes/:dni',deletePatient)

router.put('/pacientes/:dni',updatePatient)

router.put('/pacientes/:dni/asigna',updateDoctorXPatient)

module.exports = router;