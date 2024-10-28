import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets, products } from '../assets/assets'
import Title from '../components/Title.jsx'
import { useEffect } from 'react'
import ProductItem from '../components/ProductItem.jsx'

const Collection = () => {
    const {products} = useContext(ShopContext)
    const [showfilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [sortType, setSortType] = useState('relevant')

    const toggleCategory = (e) => {
      if(category.includes(e.target.value)){
        setCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else{
        setCategory([...category, e.target.value])
      }
    }

    const toggleSubCategory = (e) => {
      if(subcategory.includes(e.target.value)){
        setSubcategory(prev => prev.filter(item => item !== e.target.value))
      }
      else{
        setSubcategory([...subcategory, e.target.value])
      }
    }

    const applyFilter = () => {
      let productsCopy = products.slice()
      if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category))
      }
      if (subcategory.length > 0) {
        productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory) );
        console.log(productsCopy);
        
      }
      setFilterProducts(productsCopy)
    }

    useEffect(() =>{
      applyFilter()
      
    }, [category, subcategory])

    const sortProduct = () => {
      let fpCopy = filterProducts.slice()
      switch (sortType) {
        case 'low-high':
          setFilterProducts(fpCopy.sort((a,b) => a.price - b.price))
          break;
        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b) => b.price - a.price))
          break;  
      
        default:
          applyFilter()
          break;
      }
    }

    useEffect(() => {
      sortProduct()
    }, [sortType])


    

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'> 
        {/* filter options */}
        <div className="min-w-60">
            <p onClick={() => setShowFilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
              <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} alt="" />

            </p>
            {/* category filter */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <p className='flex gap-3'>
                  <input  onChange={toggleCategory}  type="checkbox" value={'Men'} className="w-3" />Men
                </p>
                <p className='flex gap-3'>
                  <input onChange={toggleCategory} type="checkbox" value={'Women'} className="w-3" />Women
                </p>
                <p className='flex gap-3'>
                  <input onChange={toggleCategory} type="checkbox" value={'Kids'} className="w-3" />Kids
                </p>
            </div>

            {/* filter subcategory */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
              <p className='mb-3 text-sm font-medium'>TYPE</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className='flex gap-3'>
                  <input onChange={toggleSubCategory} type="checkbox" value={'Topwear'} className="w-3" />Topwear
                </p>
                <p className='flex gap-3'>
                  <input onChange={toggleSubCategory} type="checkbox" value={'Winterwear'} className="w-3" />Winterwear
                </p>
                <p className='flex gap-3'>
                  <input onChange={toggleSubCategory} type="checkbox" value={'Bottomwear'} className="w-3" />Bottomwear
                </p>
              </div>
              
            </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
           
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/* Product Sort */}
            <select onChange={(e) => setSortType(e.target.value)} name="" className='border-2 border-gray-300 text-sm px-2' id="">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Product */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
                filterProducts.map((item, index) => 
                  <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                )
              }
          </div>

        </div>
    </div>
  )
}

export default Collection