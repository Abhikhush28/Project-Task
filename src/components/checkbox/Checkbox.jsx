import React from 'react'

const Checkbox = () => {
  return (
    <div className=''>

                <div className="form-check ms-2" key={index}>
                    <input className="form-check-input" type="checkbox" value={elm} id="flexCheckDefault" onChange={(e) => filterProducts(e.target.value)}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                       south Indian
                    </label>
                </div>
      
    </div>
  )
}

export default Checkbox;
