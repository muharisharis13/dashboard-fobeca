import React, { useState, useCallback } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import mapstyles from '../Mapstyle'

import gerobak from '../../../images/gerobak.png'


const libraries = ["places"];
const mapContainerStyles = {
  widht: "100vw",
  height: "50vh"
}

const center = {
  lat: 3.595196,
  lng: 98.672226
}

const options = {
  styles: mapstyles,
  disableDefaultUI: true,
  zoomControl: true
}

export const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_KEY_MAP,
    libraries
  })
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)


  // const onMapClick = useCallback((event) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng(),
  //       time: new Date()
  //     }
  //   ])
  // }

  // )
  const onMapClick = (e) => {
    setMarkers([{
      ...markers,

      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date()
    }
    ])
  }

  const mapRef = React.useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])






  if (loadError) return "Error Loading Maps"
  if (!isLoaded) return "Loading Maps"





  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyles}
        zoom={12}
        center={center}
        options={options}
        onClick={(e) => onMapClick(e)}
        onLoad={onMapLoad}
      >
        {
          markers.map((marker) => (
            <Marker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: `${gerobak}`,
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
              }}
              onClick={() => {
                setSelected(marker)
              }}
            />
          ))
        }
        {
          selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <>
                <h10>Stop Point Fobeca</h10> <br />
                <p>
                  lat : {selected.lat} <br />
                lng : {selected.lng}
                </p>
              </>
            </InfoWindow>
          ) : null
        }

      </GoogleMap>
    </div>
  )
}
