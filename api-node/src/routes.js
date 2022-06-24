import { Router } from "express";
import { createTable, insertPessoa, updatePessoa, selectPessoa, selectPessoas, deletePessoa } from './controler/pessoa.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoas', insertPessoa);
router.put('/pessoas', updatePessoa);
router.delete('/pessoas', deletePessoa);

export default router;