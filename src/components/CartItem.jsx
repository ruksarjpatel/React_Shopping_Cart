import React from 'react'
import { useCart } from '../context/CartContext'
import { Trash2 } from 'lucide-react' // Added for a clean remove button

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const decreaseQ = () => removeFromCart(item.id);
  const removeAll = () => removeFromCart(item.id, true); // Fully purges the item line

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 transition duration-300 hover:border-orange-600/50 gap-4'>
      
      {/* Product Image & Information Details */}
      <div className='flex items-center space-x-4 w-full sm:w-auto grow'>
        <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded-lg border-2 border-gray-700 split-shrink-0' />
        <div className='grow'>
          <h3 className='text-xl font-bold text-white line-clamp-1'>{item.name}</h3>
          <p className='text-lg text-orange-400 font-semibold mt-1'>₹{item.price.toFixed(2)}</p>
        </div>
      </div>
      
      {/* Controls Container: Controls are fixed inline via flex properties */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6">
        
        {/* Quantity Toggles Aligned In One Perfect Row */}
        <div className="flex items-center bg-gray-800/50 border border-gray-700 rounded-full p-1 shadow-inner">
          <button 
            onClick={decreaseQ} 
            className='w-8 h-8 flex items-center justify-center text-gray-400 font-bold rounded-full transition duration-150 hover:bg-gray-700 hover:text-white'
          >
            -
          </button>
          
          <span className='px-4 font-bold text-white text-base'>{item.quantity}</span>
          
          <button 
            onClick={increaseQ} // Fixed: Pointed to increaseQ instead of decreaseQ
            className='w-8 h-8 flex items-center justify-center text-gray-400 font-bold rounded-full transition duration-150 hover:bg-gray-700 hover:text-white'
          >
            +
          </button>
        </div>

        {/* Dynamic Line Total & Absolute Delete */}
        <div className='flex items-center space-x-4'>
          <p className='text-xl font-extrabold text-white min-w-[80px] text-right'>
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>
          <button 
            onClick={removeAll}
            className='text-gray-500 hover:text-red-400 transition duration-150 p-1'
            title="Remove item"
          >
            <Trash2 className='w-5 h-5' />
          </button>
        </div>

      </div>
    </div>
  )
}

export default CartItem;
