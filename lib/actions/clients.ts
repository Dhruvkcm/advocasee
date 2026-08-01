"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { Client } from "@/types/client";

export async function getClients(): Promise<Client[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching clients:", error.message);
    return [];
  }

  return data as Client[];
}

export async function addClient(formData: FormData) {
  const supabase = await createClient();

  // Get the currently logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const full_name = formData.get("full_name")?.toString().trim() ?? "";
  const mobile = formData.get("mobile")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const address = formData.get("address")?.toString().trim() ?? "";
  const city = formData.get("city")?.toString().trim() ?? "";
  const notes = formData.get("notes")?.toString().trim() ?? "";

  const { error } = await supabase.from("clients").insert({
    owner_id: user.id,
    full_name,
    mobile,
    email,
    address,
    city,
    notes,
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/clients");
  redirect("/clients");
}

export async function getClientById(id: string): Promise<Client | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    return null;
  }

  return data as Client;
}

export async function updateClient(
  id: string,
  formData: FormData,
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const full_name = formData.get("full_name")?.toString().trim() ?? "";
  const mobile = formData.get("mobile")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const address = formData.get("address")?.toString().trim() ?? "";
  const city = formData.get("city")?.toString().trim() ?? "";
  const notes = formData.get("notes")?.toString().trim() ?? "";

  const { error } = await supabase
    .from("clients")
    .update({
      full_name,
      mobile,
      email,
      address,
      city,
      notes,
    })
    .eq("id", id)
    .eq("owner_id", user.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/clients");
  redirect("/clients");
}