import { Router, Request, Response } from 'express';
import businessController from '../controllers/business.controller';

const router: Router = Router();


// Ruta para buscar negocios según sector y palabra clave
router.get('/search', (req: Request, res: Response) => {
    businessController.search(req, res);
});




// Ruta para obtener la lista completa de negocios
router.get('/business', (req: Request, res: Response) => {
    businessController.list(req, res);
    
});




// Ruta para obtener negocios con paginación
router.get('/page', (req: Request, res: Response) => {
    businessController.listPagination(req, res);
});




// Ruta para obtener un negocio específico por su ID
router.get('/business/:id', (req: Request, res: Response) => {
    businessController.show(req, res);
});




// Ruta para contar el número total de negocios registrados
router.get('/count', (req: Request, res: Response) => {
    businessController.count(req, res);
});




// Ruta para buscar negocios por la wallet del dueño
router.get('/walletSearch/:wallet', (req: Request, res: Response) => {
    businessController.walletSearch(req, res);
});




// Ruta para agregar un nuevo negocio
router.post('/addBusiness', (req: Request, res: Response) => {
    businessController.create(req, res);
});




// Ruta para editar un negocio existente
router.post('/editBusiness/:id', (req: Request, res: Response) => {
    businessController.edit(req, res);
});




// Ruta para eliminar un negocio por su ID
router.delete('/deleteBusiness/:id', (req: Request, res: Response) => {
    businessController.remove(req, res);
});

export default router;


