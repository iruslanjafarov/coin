/**
 * Interface representing a single item (currency).
 *
 * @interface IItem
 * @property id - The unique identifier for the item.
 * @property thumbnail - The URL of the item's thumbnail image.
 * @property name - The name of the item.
 * @property price - The price of the item as a string.
 */

export interface IItem {
	id: number;
	thumbnail: string;
	name: string;
	price: string;
}
