/*
 * SideBar Messages
 *
 * This contains all the text for the SideBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SideBar';

export default defineMessages({
  overview: {
    id: `${scope}.overview`,
    defaultMessage: '-Overview',
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: '-Not found',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: '-Log in',
  },
  addStock: {
    id: `${scope}.addStock`,
    defaultMessage: '-Ajouter stock'
  },
  addDemande: {
    id: `${scope}.addDemande`,
    defaultMessage: '-Ajouter demande'
  },
  unauthorized: {
    id: `${scope}.unauthorized`,
    defaultMessage: '-Unauthorized',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: '-Log out',
  },
});
