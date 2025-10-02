import { useState } from 'react';

// Using string paths for assets in the public folder to ensure proper runtime loading
const vector1Path = "/assets/Vector1.svg";
const vector2Path = "/assets/Vector2.svg";

const productFilters = [
  'ALL', 
  'Health Supreme', 
  'CRM 365', 
  'QSDA', 
  'Marketplace E-Commerce Platform', 
  'Sports Training App', 
  'Fitness'
];

const productData = [
  { id: 1, title: 'Health Supreme Dashboard', filter: 'Health Supreme', src: '/assets/product1.svg', description: 'Web/Dashboard View' },
  { id: 2, title: 'E-Commerce Marketplace', filter: 'Marketplace E-Commerce Platform', src: '/assets/product2.svg', description: 'Tablet/Web View' },
  { id: 3, title: 'Mobile App Wireframes', filter: 'Sports Training App', src: '/assets/product3.svg', description: 'Mobile App View' },
  { id: 4, title: 'Best Trainings Web', filter: 'Fitness', src: '/assets/product1.svg', description: 'Web/Landing Page View' },
  { id: 5, title: 'Health Supreme Mobile', filter: 'Health Supreme', src: '/assets/product3.svg', description: 'Mobile App View' },
  { id: 6, title: 'Fitness Tracker Dashboard', filter: 'Fitness', src: '/assets/product2.svg', description: 'Dashboard/Web View' },
];

const Product = () => {
  const [activeFilter, setActiveFilter] = useState('ALL'); 
  const filteredProducts = productData.filter(product => 
    activeFilter === 'ALL' || product.filter === activeFilter
  );

  return (
    <section className="relative overflow-hidden pt-16 pb-24 bg-[#e01923]">
      
      <div className="absolute inset-0 bg-red-600"></div>
  
      <div 
        className="absolute top-0 left-0 w-full h-1/4"
        style={{ background: `url(${vector1Path}) no-repeat center top/cover` }} 
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <h2 className="text-5xl font-extrabold text-white text-center mb-12">
          Products
        </h2> 
        
        {/* Filters Container: Uses overflow-x-auto for horizontal scrolling on small screens */}
       <div className="flex flex-row gap-4 text-white text-lg font-medium mb-16 overflow-x-auto whitespace pb-2">
  {productFilters.map((filter, index) => (
    <button
      key={index}
      onClick={() => setActiveFilter(filter)}
      className={`px-4 py-2 rounded-full transition duration-300
        ${activeFilter === filter
          ? 'bg-white text-red-600 shadow-md font-normal'
          : 'text-white hover:bg-red-500/50 hover:text-white'
        }
        text-base md:text-lg lg:text-xl
        flex-shrink-0
      `}
    >
      {filter}
    </button>
  ))}
</div>
 

        {/* Product Cards Container: Mobile Carousel, Desktop Grid */}
        <div 
            className={`
                flex gap-8 overflow-x-scroll overflow-y-hidden flex-nowrap 
                snap-x snap-mandatory pb-4 px-2 -mx-2 
                md:grid md:grid-cols-2 lg:grid-cols-3 
                md:flex-wrap md:overflow-x-visible md:snap-none 
                md:p-0 md:m-0
            `}
        > 
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className={`
                group relative bg-white rounded-xl shadow-2xl overflow-hidden 
                transform transition duration-300 hover:shadow-red-800/50 cursor-pointer
                
                /* Scale on hover is mobile-only; disabled on MD+ to prevent scrollbar */
                hover:scale-[1.02] md:hover:scale-100
                
                flex-shrink-0 w-80 snap-center 
                md:w-auto md:flex-shrink
              `}
            >
              <img 
                src={product.src} 
                alt={product.title} 
                className="w-full h-auto object-cover" 
              /> 
              
              {/* Product Info */}
              <div 
                className={`
                  p-4 transition duration-300 
                  group-hover:opacity-0
                `}
              >
                  <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                  <p className="text-red-600 font-semibold">{product.description}</p>
              </div>

              {/* Hover Detail Overlay */}
              <div
                className={`
                  absolute inset-0 bg-black/90 text-white p-6 z-10 
                  flex flex-col items-start justify-end space-y-2
                  opacity-0 invisible transition duration-300 
                  group-hover:opacity-100 group-hover:visible
                `}
              >
                <p className="text-xl font-bold border-b-2 border-white pb-1 mb-2 w-full">
                    {product.title}
                </p>
                <p className="text-lg font-medium text-red-300">
                    {product.filter}
                </p>
                <p className="text-sm">
                    View Type: {product.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div> 
      <div 
        className="absolute bottom-0 left-0 w-full h-1/4"
        style={{ background: `url(${vector2Path}) no-repeat center bottom` }} 
      ></div>
    </section>
  );
}

export default Product;
