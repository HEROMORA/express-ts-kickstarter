import { Request, Response, NextFunction } from 'express';

import { getDummies } from './services';

class DummyController {
  getDummies(req: Request, res: Response, next: NextFunction) {
    const data = getDummies({ id: 3 });

    res.status(200).json(data);
  }
}

export default DummyController;
