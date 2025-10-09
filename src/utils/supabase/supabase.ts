import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client для работы с базой данных и Storage.
 *
 * Значения URL и ANON KEY берутся из переменных окружения:
 * - `NEXT_PUBLIC_SUPABASE_URL` — URL проекта Supabase
 * - `NEXT_PUBLIC_SUPABASE_ANON_KEY` — публичный ключ аутентификации
 */

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL as string,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);
