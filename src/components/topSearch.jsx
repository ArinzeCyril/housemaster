import React, { useState } from 'react'

export default function TopSearch() {
  const[active, setActive] = useState({
    buy: false,
    rent: false,
    showSubmit: false
  })
  const [location, setLocation] = useState('')
  let message
  const handleSubmit = () => {
      setActive({
        ...active,
        showSubmit: !active.showSubmit,
      })
  }
  const handleLocChange = e => setLocation(e.target.value)
  const handleTransaction = (action) => {
    action === "buy" &&
      setActive({
        ...active,
        buy: true,
        rent: false,
      })
    action === "rent" &&
      setActive({
        ...active,
        rent: true,
        buy: false,
      })
    action === "submit" && handleSubmit()
    console.log(message);
    console.log(location.length);
    console.log(`${action} was clicked ${active.showSubmit}`)
  }
  const handleShowSubmit = (show) => {
    setActive({
      ...active,
      showSubmit: false,
    })
    console.log(`${show} was clicked ${active.showSubmit}`);
  }

  return (
    <div
      onClick={() => {
        handleShowSubmit()
      }}
      className='top-search'
    >
      <div
        onClick={(e) => {
          !active.showSubmit && e.stopPropagation()
          handleTransaction("rent")
        }}
        className={active.rent ? "pointer top-btn active" : "pointer top-btn"}
      >
        Rent
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
          handleTransaction("buy")
        }}
        className={active.buy ? "pointer top-btn active" : "pointer top-btn"}
      >
        Buy
      </div>
      <div className='top-input'>
        <div>
          <input
            onChange={handleLocChange}
            placeholder='Location'
            type='text'
          />
          <span className='icon1 fa-regular fa-location-dot'></span>
        </div>
        <select name='type' id='top-type'>
          <option value='type' selected>
            Type
          </option>
          <option value='duplex'>Duplex</option>
          <option value='bungalow'>Bungalow</option>
          <option value='apartment'>Apartment</option>
        </select>
        <div>
          <input placeholder='Budget' type='text' />
          <span className='icon2'>$</span>
        </div>
        <button className='pointer'
          onClick={(e) => {
            e.stopPropagation()
            handleTransaction("submit")
          }}
          id='top-search'
        >
          Search
        </button>
        <span
          className={
            active.showSubmit ? "show-info-onsubmit" : "hide-info-onsubmit"
          }
        >
          {location.length === 0
            ? "Please Enter a Location"
            : active.buy
            ? `No property is available for sale in the selected location`
            : active.rent
            ? `No rental property is available in selected location`
            : "Click either buy or rent to perform a search"}
        </span>
      </div>
    </div>
  )
}
