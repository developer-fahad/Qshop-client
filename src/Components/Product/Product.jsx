import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const Product = () => {
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [sort, setSort] = useState('')
  const [sort_newest, setSortNewest] = useState('')
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([]);

  // unique categories and brand name filter
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/products`
        );
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
        // Extract unique categories
        const uniqueBrand = [...new Set(data.map(product => product.brand))];
        setBrands(uniqueBrand);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    getData();
  }, []);

  // Product fetch
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL
        }/all-products?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}&brand=${brand}&price=${price}&sort_newest=${sort_newest}`
      )
      setProducts(data)
    }
    getData()
  }, [currentPage, filter, itemsPerPage, search, sort, brand, price, sort_newest])

  // page count api fetch
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL
        }/products-count?filter=${filter}&search=${search}&brand=${brand}&price=${price}`
      )

      setCount(data.count)
    }
    getCount()
  }, [filter, search, brand, price])

  console.log(count)
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

  //  handle pagination button
  const handlePaginationButton = value => {
    console.log(value)
    setCurrentPage(value)
  }

  // handle reset button
  const handleReset = () => {
    setFilter('')
    setBrand('')
    setSort('')
    setPrice('')
    setSortNewest('')
    setSearch('')
    setSearchText('')
  }

  // Handle search button
  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }

  return (
    <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <div>
        <div className='flex overflow-x-auto xl:justify-center items-center gap-5 '>

          {/* Filter */}
          <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
                setCurrentPage(1)
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              {
                categories?.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))
              }
            </select>
          </div>

          <div>
            <select
              onChange={e => {
                setBrand(e.target.value)
                setCurrentPage(1)
              }}
              value={brand}
              name='brand_name'
              id='brand_name'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Brand</option>
              {
                brands?.map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))
              }

            </select>
          </div>

          <div>
            <select
              onChange={e => {
                setPrice(e.target.value)
                setCurrentPage(1)
              }}
              value={price}
              name='price'
              id='price'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Price Range</option>
              <option value='0-100'>0-100</option>
              <option value='101-1000'>101-1000</option>
              <option value='1001-5000'>1001-5000</option>
            </select>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-300 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Search products'
                aria-label='Search products'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-500 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>

          {/* Sort */}
          <div>
            <select
              onChange={e => {
                setSortNewest(e.target.value)
                setCurrentPage(1)
              }}
              value={sort_newest}
              name='sort_newest'
              id='sort_newest'
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Date</option>
              <option value='dsc'>Newest Product</option>
            </select>
          </div>

          <div>
            <select
              onChange={e => {
                setSort(e.target.value)
                setCurrentPage(1)
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Price</option>
              <option value='dsc'>Price High to Low </option>
              <option value='asc'>Price Low to High</option>
            </select>
          </div>

          <button onClick={handleReset} className='btn'>
            Reset
          </button>
        </div>
        <div className='grid justify-center grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4 mt-8 xl:mt-8'>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className='flex justify-center mt-12'>
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#51AA1B]  hover:text-white'
        >
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map(btnNum => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${currentPage === btnNum ? 'bg-[#51AA1B] text-white' : ''
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-[#51AA1B]  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#51AA1B] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
        >
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Product;