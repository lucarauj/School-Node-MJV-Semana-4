import { Request, Response, Router } from 'express';
import StudentsService from '../services/students.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const students = StudentsService.getAll();
    res.send(students);
});

router.get('/:document', (req: Request, res: Response) => {
    const student = StudentsService.getByDocument(req.params.document);
    if(!student) {
        return res.status(400).send({message: 'Estudante não encontrado!'})
    }
    res.status(200).send(student);
});

router.post('/', (req: Request, res: Response) => {
    const student = StudentsService.getByDocument(req.body.document);
    if(student) {
        return res.status(400).send({message: 'CPF já cadastrado!'})
    }
    StudentsService.create(req.body);
    res.status(201).send({message: 'Estudante cadastrado com sucesso!'});
});

router.delete('/remove/:document', (req: Request, res: Response) => {
    try{
        StudentsService.remove(req.params.document);
        res.status(200).send({message: 'Estudante removido com sucesso!'});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    }
});

router.put('/:document', (req: Request, res: Response) => {
    try{
        StudentsService.update(req.params.document, req.body);
        res.status(200).send({message: 'Estudante atualizado com sucesso!'});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    }
});

export default router;