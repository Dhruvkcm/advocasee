export type Case = {
    id: string;
    owner_id: string;
    client_id: string;
  
    case_number: string;
    court_name: string;
    case_type: string;
  
    filing_date: string | null;
    next_hearing: string | null;
  
    status: string;
  
    description: string | null;
  
    created_at: string;
    updated_at: string;
  };
