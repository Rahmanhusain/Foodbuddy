import { useParams } from 'react-router-dom';

const mockItems = {
  Pizza: ['Margherita', 'Farmhouse', 'Peppy Paneer'],
  Biryani: ['Hyderabadi Biryani', 'Lucknowi Biryani'],
  Burger: ['Veg Burger', 'Chicken Burger'],
  Desserts: ['Ice Cream', 'Brownie'],
  Snacks: ['Samosa', 'Pav Bhaji'],
  'South Indian': ['Dosa', 'Idli'],
  'North Indian': ['Chole Bhature', 'Rajma Rice'],
  Chinese: ['Fried Rice', 'Chow Mein'],
  Drinks: ['Mango Shake', 'Cold Coffee'],
  'Street Food': ['Pani Puri', 'Chaat'],
};

function CategoryPage() {
  const { name } = useParams();
  const items = mockItems[name] || [];

  const addToOrder = (item) => {
    const existing = JSON.parse(localStorage.getItem('orders')) || [];
    const updated = [...existing, item];
    localStorage.setItem('orders', JSON.stringify(updated));
    alert(`${item} added to your order!`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-orange-500 mb-6">{name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item} className="border rounded shadow p-4 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-gray-800">{item}</h3>
            <button
              onClick={() => addToOrder(item)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
