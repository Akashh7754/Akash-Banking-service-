module.exports = {
  // User Roles
  ROLES: {
    SUPER_ADMIN: 'super_admin',
    ADMIN: 'admin',
    AGENT: 'agent',
    RETAILER: 'retailer',
  },

  // Transaction Status
  TRANSACTION_STATUS: {
    PENDING: 'pending',
    SUCCESS: 'success',
    FAILED: 'failed',
    CANCELLED: 'cancelled',
  },

  // Transaction Types
  TRANSACTION_TYPE: {
    AEPS: 'aeps',
    DMT: 'dmt', // Money Transfer
    BBPS: 'bbps', // Bill Payment
    RECHARGE: 'recharge',
  },

  // Service Types
  SERVICE_TYPE: {
    AEPS_WITHDRAWAL: 'aeps_withdrawal',
    AEPS_BALANCE: 'aeps_balance',
    DMT_TRANSFER: 'dmt_transfer',
    BBPS_PAYMENT: 'bbps_payment',
    MOBILE_RECHARGE: 'mobile_recharge',
    DTH_RECHARGE: 'dth_recharge',
  },

  // Error Codes
  ERROR_CODES: {
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',
    INSUFFICIENT_BALANCE: 'INSUFFICIENT_BALANCE',
    INVALID_REQUEST: 'INVALID_REQUEST',
    UNAUTHORIZED: 'UNAUTHORIZED',
    SERVER_ERROR: 'SERVER_ERROR',
  },
};
