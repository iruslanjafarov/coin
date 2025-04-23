/**
 * Interface representing a single item (e.g. a cryptocurrency).
 *
 * @interface IItem
 * @property id - The unique numeric identifier for the item.
 * @property thumbnail - The URL string of the item's thumbnail image.
 * @property name - The name of the item (e.g. token name).
 * @property price - The current numeric price of the item.
 * @property prevPrice - (Optional) The previous price of the item, used to determine price changes.
 */

export interface IItem {
	id: number;
	thumbnail: string;
	name: string;
	price: number;
	prevPrice?: number;
}
