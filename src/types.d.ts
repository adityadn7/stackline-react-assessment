export interface Product {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    tags: string[];
    sales: Sale[];
}

export interface Sale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export type SortKey = keyof Sale;
