import { Request, Response, Router } from 'express';
import ProductsService from '../services/products.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const products = ProductsService.getAll();
    res.send(products);
});

router.get('/:id', (req: Request, res: Response) => {
    try{
        const product = ProductsService.getById(parseInt(req.params.id));
        res.send(product);
    } catch(error: any) {
        return res.status(400).send({message: error.message})
    }
});

router.post('/', (req: Request, res: Response) => {
    try{
        ProductsService.create(req.body, req.body.id);
        res.status(201).send({message: 'Produto cadastrado com sucesso!'});
    } catch(error: any) {
        return res.status(400).send({message: error.message})
    }
    
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    try{
        ProductsService.remove(parseInt(req.params.id));
        res.status(200).send({message: 'Produto removido com sucesso!'});
    } catch(error: any) {
        return res.status(400).send({message: error.message})
    }    
});

router.put('/:id', (req: Request, res: Response) => {
    try{
        ProductsService.update(parseInt(req.params.id), req.body);
        res.status(200).send({message: 'Produto atualizado com sucesso!'});
    } catch(error: any) {
        res.status(400).send({message: error.message})
    }    
});

export default router;