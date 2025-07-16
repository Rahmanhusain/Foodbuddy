import { useEffect, useState } from 'react';

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(stored);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">No items added to your order.</p>
      ) : (
        <ul className="space-y-2">
          {orders.map((item, index) => (
            <li key={index} className="border-b pb-2 text-lg text-gray-700">
              🍴 {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Order;
