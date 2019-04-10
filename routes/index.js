import express from 'express';
import Party from '../controllers/partyController';


const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to API v1!'));
router.get('/parties', Party.getParties);
router.get('/parties/:id', Party.getOneParty);
router.post('/parties', Party.createParty);
router.patch('/parties/:id', Party.editParty);
router.delete('/parties/:id', Party.deleteParty);
router.use('*', (req, res) => res.json('Route does not exist'));


export default router;
