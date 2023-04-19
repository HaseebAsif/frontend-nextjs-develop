/**
 * Collect shared messages within this file. Enums from backend is great to
 * translate here.
 */

import { defineMessages } from 'react-intl';

// enum UserRole
const userRole = defineMessages({
  admin: {
    id: 'userRole.admin',
    description: 'Admin',
    defaultMessage: 'Superadmin'
  },
  company_admin: {
    id: 'userRole.company_admin',
    description: 'Company admin',
    defaultMessage: 'Admin'
  },
  company_user: {
    id: 'userRole.company_user',
    description: 'Company user',
    defaultMessage: 'Bokare'
  },
  user: {
    id: 'userRole.user',
    description: 'User',
    defaultMessage: 'Användare'
  }
});

export const shared = {
  userRole
};
