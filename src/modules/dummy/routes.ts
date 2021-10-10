import {Router} from 'express';

import DummyController from './dummyController';

const router: Router = Router();
const controller: DummyController = new DummyController();

router.get('/', controller.getDummies);

export default router;