// @flow
import { push } from 'react-router-redux';

/**
 * @const	changePage
 * @description Pushes new route onto the history.
 * @param path
 */
export const changePage = (path: string) => push(path);
