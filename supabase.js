
import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl =
  "https://pvjmblxzixjoxnolhyvw.supabase.co";

const supabaseKey =
  "sb_publishable_ld8ea_DAiA1_NbY3Azm0Hg_rkSabeRB";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
