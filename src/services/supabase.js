
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zaadcjpsjimzthpmnqjl.supabase.co'
const supabaseKey = "sb_publishable_RTOroVJ4csiyIWPp1-IGgA_4GzcsG_N"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;