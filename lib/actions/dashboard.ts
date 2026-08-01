import { createClient } from "@/lib/supabase/server";

export async function getDashboardData() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { count: clientCount } = await supabase
  .from("clients")
  .select("*", { count: "exact", head: true })
  .eq("owner_id", user?.id);

const { count: caseCount } = await supabase
  .from("cases")
  .select("*", { count: "exact", head: true })
  .eq("owner_id", user?.id);
  
  return {
    user,
    totalClients: clientCount ?? 0,
    totalCases: caseCount ?? 0,
  };
}