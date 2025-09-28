import add from './js/helper';
import { logger, user as helperUser } from './js/helper';

// import add, { logger, user } from './js/helper';

console.log('add:', add);
console.log(add(4, 2));

logger('Petya');

const user = 'Yura';

console.log('user:', user);
console.log('helperUser:', helperUser);

// import * as helper from './js/helper'
// console.log(helper.user);//Alice
// helperUser.logger('Petya')
