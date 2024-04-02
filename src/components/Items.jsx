import React from 'react'

import { ProductContext } from '../App'

function Items() {

  return (
    <div>
        
        <ProductContext.Consumer>
           {
            (data) => <p> {data} </p>
           }
        </ProductContext.Consumer>
    </div>
  )
}

// Consumer: means to use it the data

export default Items