import { useState } from "react"

const WhyUs = () => {
  const [enquiry, setEnquiry] = useState({
    submitted: false,
    type: "select",
    firstname: "",
    lastname: "",
    email: "",
    location: "",
    property: ""
  })
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    setEnquiry({ ...enquiry, submitted: true })
    messager()
  }

  const handleChange = (e) => {
    const fieldName = e.target.name
    setEnquiry({
      ...enquiry,
      [fieldName]: e.target.value
    })
    console.log({ [fieldName]: e.target.value })
  }

  const { submitted, type, firstname, location, property } = enquiry
  const messager = () => {
    const validType = type === "select"
    const validName = firstname.length < 1
    const validLoc = location.length < 1
    const validProp = property.length < 1
    const allValid = !validType && !validName && !validLoc && !validProp
    validProp && setMessage("Please select a PROPERTY TYPE")
    validLoc && setMessage("Please choose an enquiry LOCATION")
    validName && setMessage("Please enter your FIRST NAME")
    validType && setMessage("Please select an INQUIRY TYPE")
    allValid &&
      setMessage(`
      Hi ${firstname}, your enquiry to ${type}
      ${property === "Apartment" ? `an ${property}` : `a ${property}`} in
      ${location} was not sent.
      Alternatively you can reach us via email: ArinzeCyril123@gmail.com
    `)
  }

  return (
    <div id='contact' className='why-us'>
      <div className='why-brwn'>
        <div className='why-texts'>
          <div className='why-text why-t1'>
            <h1>Why Housemaster?</h1>
            <hr />
          </div>
          <div className='why-text why-t2'>
            <p>01</p>
            <p>Trusted by Thousands</p>
            <p>since 2010</p>
            <hr />
          </div>
          <div className='why-text why-t3'>
            <p>02</p>
            <p>Verified Properties</p>
            <p>with detailed insights</p>
            <hr />
          </div>
        </div>
        <div
          className='why-form'
          onClick={() => {
            setEnquiry({ ...enquiry, submitted: false })
          }}
        >
          <h2>Housemaster Inquiry Form</h2>
          <form className='why-inpt'>
            <div className='why-inqry'>
              <label htmlFor='inquiry-type'>Inquiry Type</label>
              <select
                onChange={handleChange}
                className='why-pd'
                id='inquiry-type'
                name='type'
              >
                <option value='Select' key='select' selected>
                  Select
                </option>
                <option value='Rent' key='rent'>
                  Rent
                </option>
                <option value='Buy' key='buy'>
                  Buy
                </option>
              </select>
            </div>
            <div className='why-fn'>
              <label htmlFor='first-name'>First Name</label>
              <input
                className='why-pd'
                type='text'
                required
                placeholder='Enter First Name'
                id='first-name'
                name='firstname'
                onChange={handleChange}
              />
            </div>
            <div className='why-ln'>
              <label htmlFor='last-name'>Last Name</label>
              <input
                className='why-pd'
                type='text'
                required
                placeholder='Enter Last Name'
                id='last-name'
                name='lastname'
                onChange={handleChange}
              />
            </div>
            <div className='why-eml'>
              <label htmlFor='email'>Email</label>
              <input
                className='why-pd'
                type='email'
                required
                placeholder='abcdef@ghi.jk'
                id='email'
                name='email'
                onChange={handleChange}
              />
            </div>
            <div className='why-lctn'>
              <label htmlFor='location'>Location</label>
              <select
                onChange={handleChange}
                className='why-pd'
                name='location'
                id='location'
              >
                <option value='select' selected>
                  Choose Location
                </option>
                <option value='canada'>Canada</option>
                <option value='france'>France</option>
                <option value='ghana'>Ghana</option>
                <option value='nigeria'>Nigeria</option>
                <option value='uk'>UK</option>
                <option value='usa'>USA</option>
              </select>
            </div>
            <div className='why-pty'>
              <label htmlFor='property-type'>Property Type</label>
              <select
                className='why-pd'
                name='property'
                id='property-type'
                onChange={handleChange}
              >
                <option value='select' selected>
                  Select Property
                </option>
                <option value='Apartment'>Apartment</option>
                <option value='Duplex'>Duplex</option>
                <option value='Semi Detached Duplex'>Semi Detached Duplex</option>
                <option value='Show Room'>Show Room</option>
                <option value='Retail Store'>Retail Store</option>
                <option value='Hall'>Hall</option>
              </select>
            </div>
            <div className='why-msg'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='why-pd'
                name='message'
                id='message'
              ></textarea>
            </div>
            <input
              id='submit'
              type='button'
              value='Submit'
              onClick={(e) => {
                e.stopPropagation()
                handleSubmit()
              }}
            />
          </form>
          <span className={submitted ? "show red" : "hide"}>
            {message}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WhyUs