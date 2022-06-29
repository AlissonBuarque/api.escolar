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
router.post('/pessoa', insertPessoa);
router.put('/pessoan', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;