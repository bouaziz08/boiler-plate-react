/**
 *
 * Asynchronously loads the component for AddStock
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
