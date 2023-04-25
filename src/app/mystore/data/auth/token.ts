import {
  AuthToken,
  adminToken,
  landlordToken,
  managerToken,
  tenantToken,
} from './authToken';

export const authToken: AuthToken = {
  tenantAuthToken: tenantToken,
  landlordAuthToken: landlordToken,
  adminAuthToken: adminToken,
  mangerAuthToken: managerToken,
};
