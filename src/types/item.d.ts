/**
 * Интерфейс, описывающий один элемент списка (например, криптовалюту).
 *
 * @interface IItem
 *
 * @property id – уникальный числовой идентификатор элемента
 * @property thumbnail – URL-строка с иконкой/миниатюрой криптовалюты
 * @property name – название криптовалюты (например, "Bitcoin")
 * @property price – текущая цена актива
 * @property prevPrice – (опционально) предыдущая цена, используется для отображения динамики
 *
 * @property metrics – (опционально) объект с основными метриками актива
 * @property metrics.marketCap – (опционально) рыночная капитализация (Market Cap), в долларах США (USD)
 * @property metrics.volume24h – (опционально) торговый объём за последние 24 часа, в долларах США (USD)
 * @property metrics.circulatingSupply – (опционально) количество монет в обращении
 * @property metrics.maxSupply – (опционально) максимальное количество монет (если ограничено, иначе null)
 *
 * @property technical – (опционально) объект с технической информацией о криптовалюте
 * @property technical.network – (опционально) сеть (блокчейн)
 * @property technical.algorithm – (опционально) алгоритм консенсуса или шифрования
 */

export interface IItem {
	id: number;
	thumbnail: string;
	name: string;
	price: number;
	prevPrice?: number;
	metrics?: {
		marketCap?: number;
		volume24h?: number;
		circulatingSupply?: number;
		maxSupply?: number | null;
	};
	technical?: {
		network?: string;
		algorithm?: string;
	};
}
