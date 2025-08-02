


import { Link } from 'react-router-dom';

const foodCategories = [
  { name: 'Pizza', image: '/images/pizza.jpeg' },
  { name: 'Biryani', image: '/images/biryani.jpeg' },
  { name: 'Burger', image: '/images/burger.jpeg' },
  { name: 'Desserts', image: '/images/dessert.jpeg' },
  { name: 'Snacks', image: '/images/snacks.jpeg' },
  { name: 'South Indian', image: '/images/south-indian.jpeg' },
  { name: 'North Indian', image: '/images/north-indian.jpeg' },
  { name: 'Chinese', image: '/images/chinese.jpeg' },
  { name: 'Drinks', image: '/images/drinks.jpeg' },
  { name: 'Street Food', image: '/images/street-food.jpeg' },
];

function Home() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-500">Welcome to Chirag bsdka 🍽️</h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover your cravings. Order with ease. Enjoy every bite.
        </p>
        <Link
          to="/orders"
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow"
        >
          View Your Orders
        </Link>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Explore by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {foodCategories.map((category) => (
            <Link to={`/category/${category.name}`} key={category.name}>
              <div className="rounded overflow-hidden shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover"
                />
                <div className="text-center py-2 bg-white text-gray-700 font-medium">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
