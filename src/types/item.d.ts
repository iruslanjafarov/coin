/**
 * Interface representing a single item (currency).
 *
 * @interface IItem
 * @property {number} id - The unique identifier for the item.
 * @property {string} thumbnail - The URL of the item's thumbnail image.
 * @property {string} name - The name of the item.
 * @property {string} price - The price of the item as a string.
 */

export interface IItem {
	id: number;
	thumbnail: string;
	name: string;
	price: string;
}
