import { Unit } from './Unit';
import { Landlord } from './Landlord';
import { Lease } from './Lease';

export interface Property {
  propertyId: string;
  name: string;
  leaseId: string;
  address: string;
  city: string;
  status: boolean;
  isDeleted: boolean;
  Zzipcode: number;
  numOfUnits: number;
  price: number;
  units: Unit;
  landLord: Landlord;
  landLordId: string;
  image: string;
  lease: Lease;
}
