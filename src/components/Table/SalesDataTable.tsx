import React, { useEffect, useState } from 'react';
import { Product, Sale, SortKey } from "../../types";

const SalesDataTable: React.FC<{ product: Product | null }> = ({ product }) => {
    const [sales, setSales] = useState<Sale[]>([]);
    const [sortKey, setSortKey] = useState<SortKey>('weekEnding');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        if (product) {
            setSales(product.sales);
        }
    }, [product]);

    const handleSort = (key: SortKey) => {
        if (key === sortKey) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    const sortedSales = [...sales].sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (sortOrder === 'asc') {
            return aValue < bValue ? -1 : 1;
        } else {
            return aValue > bValue ? -1 : 1;
        }
    });

    return (
        <div className="sales-container">
            <div className="sales-table-container">
                <table className="sales-table">
                    <thead>
                    <tr>
                        <th onClick={() => handleSort('weekEnding')}>
                            WEEK ENDING {sortKey === 'weekEnding' && <SortArrow order={sortOrder} />}
                        </th>
                        <th onClick={() => handleSort('retailSales')}>
                            RETAIL SALES {sortKey === 'retailSales' && <SortArrow order={sortOrder} />}
                        </th>
                        <th onClick={() => handleSort('wholesaleSales')}>
                            WHOLESALE SALES {sortKey === 'wholesaleSales' && <SortArrow order={sortOrder} />}
                        </th>
                        <th onClick={() => handleSort('unitsSold')}>
                            UNITS SOLD {sortKey === 'unitsSold' && <SortArrow order={sortOrder} />}
                        </th>
                        <th onClick={() => handleSort('retailerMargin')}>
                            RETAILER MARGIN {sortKey === 'retailerMargin' && <SortArrow order={sortOrder} />}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedSales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.weekEnding}</td>
                            <td className="dollar">{sale.retailSales}</td>
                            <td className="dollar">{sale.wholesaleSales}</td>
                            <td>{sale.unitsSold}</td>
                            <td className="dollar">{sale.retailerMargin}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const SortArrow: React.FC<{ order: 'asc' | 'desc' }> = ({ order }) => (
  <span className={`sort-arrow ${order}`}>
    {order === 'asc' ? '↑' : '↓'}
  </span>
);

export default SalesDataTable;
