import Dummy from '../../../models/dummy';

import GetDummiesRequest from '../requests/getDummiesRequest';
import GetDummiesResponse from '../responses/getDummiesResponse';

const getDummies = (request: GetDummiesRequest): GetDummiesResponse => {
  const dummy1: Dummy = new Dummy('omar', 21);
  const dummy2: Dummy = new Dummy('ahmed', 18);

  const dummies: Dummy[] = [dummy1, dummy2];

  return {
    dummies,
  };
};

export default getDummies;
