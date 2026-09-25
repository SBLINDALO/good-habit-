import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isSupabaseConfigured = Boolean(url && key && !url.includes('your-project'))
export const supabase: SupabaseClient | null = isSupabaseConfigured ? createClient(url!, key!) : null

export type DbRow = Record<string, unknown>

export async function readTable(table: string): Promise<{ data: DbRow[]; error?: string }> {
  if (!supabase) return { data: [] }
  const { data, error } = await supabase.from(table).select('*')
  return { data: (data ?? []) as DbRow[], error: error?.message }
}
