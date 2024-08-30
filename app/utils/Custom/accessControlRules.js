export const accessControlRules = {
  overview: {
    path: '/overview',
    accessLevel: [
      'admin',
      'minimal-access',
      'leader',
      'technicien-technique',
      'technicien','jklfds',
    ],
  },
  addStock: {
  path: '/add-stock',
  accessLevel: [
    'admin',
    'minimal-access',
    'leader',
    'technicien-technique',
    'technicien','jklfds',
    'bbouaziz',
    ],
  }, 
  addDemande: {
    path: '/add-demande',
    accessLevel: [
      'admin',
      'minimal-access',
      'leader',
      'technicien-technique',
      'technicien','jklfds',
      'bbouaziz',
    ],
  }, 
};
