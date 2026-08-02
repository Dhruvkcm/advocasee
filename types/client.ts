export interface Client {
    id: string;
    full_name: string;
    mobile: string;
    email: string | null;
    address: string | null;
    district: string | null;
    notes: string | null;
    created_at: string;
  }