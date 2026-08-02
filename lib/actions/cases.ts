"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { Case } from "@/types/case";

export async function getCases() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cases")
    .select(`
      *,
      clients (
        full_name
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}


export async function addCase(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const client_id = formData.get("client_id")?.toString() ?? "";
  const case_number = formData.get("case_number")?.toString().trim() ?? "";
  const court_name = formData.get("court_name")?.toString().trim() ?? "";
  const case_type = formData.get("case_type")?.toString().trim() ?? "";
  const filing_date = formData.get("filing_date")?.toString() || null;
  const next_hearing = formData.get("next_hearing")?.toString() || null;
  const status = formData.get("status")?.toString().trim() ?? "";
  const description =
    formData.get("description")?.toString().trim() ?? "";

  const { error } = await supabase.from("cases").insert({
    owner_id: user.id,
    client_id,
    case_number,
    court_name,
    case_type,
    filing_date,
    next_hearing,
    status,
    description,
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/cases");
  redirect("/cases");
}

export async function getCaseById(id: string): Promise<Case | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cases")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    return null;
  }

  return data as Case;
}

export async function updateCase(
  id: string,
  formData: FormData
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const client_id = formData.get("client_id")?.toString() ?? "";
  const case_number = formData.get("case_number")?.toString().trim() ?? "";
  const court_name = formData.get("court_name")?.toString().trim() ?? "";
  const case_type = formData.get("case_type")?.toString().trim() ?? "";
  const filing_date = formData.get("filing_date")?.toString() || null;
  const next_hearing = formData.get("next_hearing")?.toString() || null;
  const status = formData.get("status")?.toString().trim() ?? "";
  const description =
    formData.get("description")?.toString().trim() ?? "";

  const { error } = await supabase
    .from("cases")
    .update({
      client_id,
      case_number,
      court_name,
      case_type,
      filing_date,
      next_hearing,
      status,
      description,
    })
    .eq("id", id)
    .eq("owner_id", user.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/cases");
  redirect("/cases");
}

export async function deleteCase(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const { error } = await supabase
    .from("cases")
    .delete()
    .eq("id", id)
    .eq("owner_id", user.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/cases");
}

export async function getCasesByClientId(clientId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cases")
    .select("*")
    .eq("client_id", clientId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}

export async function getCaseDetails(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cases")
    .select(`
      *,
      clients (
        full_name,
        mobile,
        email
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    return null;
  }

  return data;
}