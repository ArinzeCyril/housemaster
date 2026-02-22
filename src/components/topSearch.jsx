import React, { useState } from 'react'

export default function TopSearch({ onSearch }) {
  const [activeTab, setActiveTab] = useState('rent') // 'buy' or 'rent'
  const [filters, setFilters] = useState({
    location: '',
    type: 'type',
    budget: ''
  })
  const [showSubmitMsg, setShowSubmitMsg] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch({ ...filters, transaction: activeTab })
    setShowSubmitMsg(true)
    setTimeout(() => setShowSubmitMsg(false), 3000)
  }

  return (
    <div className='top-search' onClick={() => setShowSubmitMsg(false)}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setActiveTab('rent')
        }}
        className={activeTab === 'rent' ? "pointer top-btn active" : "pointer top-btn"}
      >
        Rent
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setActiveTab('buy')
        }}
        className={activeTab === 'buy' ? "pointer top-btn active" : "pointer top-btn"}
      >
        Buy
      </div>
      <div className='top-input'>
        <div>
          <input
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            placeholder='Location'
            type='text'
          />
          <span className='icon1 fa-regular fa-location-dot'></span>
        </div>
        <select
          name='type'
          id='top-type'
          value={filters.type}
          onChange={handleInputChange}
        >
          <option value='type'>Type</option>
          <option value='duplex'>Duplex</option>
          <option value='bungalow'>Bungalow</option>
          <option value='apartment'>Apartment</option>
          <option value='house'>House</option>
        </select>
        <div>
          <input
            name="budget"
            value={filters.budget}
            onChange={handleInputChange}
            placeholder='Max Budget'
            type='text'
          />
          <span className='icon2'>$</span>
        </div>
        <button className='pointer'
          onClick={handleSearch}
          id='top-search'
        >
          Search
        </button>

        {showSubmitMsg && (
          <span className="show-info-onsubmit">
            {filters.location.length === 0
              ? "Please Enter a Location"
              : `Searching for ${activeTab}als in ${filters.location}...`}
          </span>
        )}
      </div>
    </div>
  )
}
