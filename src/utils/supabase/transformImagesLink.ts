/**
 * Базовый публичный URL для хранения иконок в Supabase Storage.
 */

const STORAGE_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets`;

/**
 * Трансформирует имя файла иконки в полный URL для отображения в UI.
 */

export const transformImagesLink = (icon: string) => `${STORAGE_URL}/${icon}`;
