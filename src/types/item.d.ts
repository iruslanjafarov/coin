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
 * @property metrics – объект с основными метриками актива
 * @property metrics.marketCap – рыночная капитализация (Market Cap), общая стоимость всех монет в обращении, в долларах США (USD)
 * @property metrics.volume24h – торговый объём за последние 24 часа, в долларах США (USD)
 * @property metrics.circulatingSupply – количество монет, находящихся в обращении
 * @property metrics.maxSupply – максимальное количество монет (если ограничено, иначе null)
 *
 * @property technical – объект с технической информацией о криптовалюте
 * @property technical.network – сеть (блокчейн), на которой работает криптовалюта
 * @property technical.algorithm – алгоритм консенсуса или шифрования, используемый в сети
 */

export interface IItem {
	id: number;
	thumbnail: string;
	name: string;
	price: number;
	prevPrice?: number;
	metrics: {
		marketCap: number;
		volume24h: number;
		circulatingSupply: number;
		maxSupply: number | null;
	};
	technical: {
		network: string;
		algorithm: string;
	};
}
