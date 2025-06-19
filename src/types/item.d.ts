/**
 * Интерфейс, описывающий один элемент (например, криптовалюту).
 *
 * @interface IItem
 * @property id - Уникальный числовой идентификатор элемента.
 * @property thumbnail - URL-строка с миниатюрой изображения элемента.
 * @property name - Название элемента (например, название токена).
 * @property price - Текущая числовая цена элемента.
 * @property prevPrice - (Опционально) Предыдущая цена элемента, используется для определения изменений цены.
 */

export interface IItem {
	id: number;
	thumbnail: string;
	name: string;
	price: number;
	prevPrice?: number;
}
