import React from 'react'
import { inmuebles, useFetch } from '../../../services/inmueble'
import Property from '../Property/Property'
import "./propertylist.css"

const PropertyList = () => {
  //const {status, data} = useFetch();
  return (
       <div className="listPropertys">
       {inmuebles.map(inmueble=>
          <Property inmueble={inmueble} key={inmueble.description} />
        )}
       </div>
  )
}

export default PropertyList
