import { z } from 'zod';

/**
 * Схема валидации данных для формы логина/регистрации.
 *
 * @constant loginSchema
 * @property {string} name - Имя пользователя. Может быть использовано при регистрации.
 * @property {string} email - Адрес электронной почты. Должен быть корректным email.
 * @property {string} password - Пароль в виде строки. Можно дополнительно указать ограничения (например, минимальную длину).
 */

export const loginSchema = z.object({
	name: z
		.string()
    .nonempty({ error: "Поле 'Имя' обязательно для заполнения!" }),
	email: z.email({ error: 'Данная запись не является почтовым адресом!' }),
	password: z
		.string()
		.nonempty({ error: "Поле 'Пароль' обязательно для заполнения!" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
