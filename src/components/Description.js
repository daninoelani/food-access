import React, { useState, useEffect } from 'react'

export const Description = () => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`api will go here`)
      .then(res => res.json())
      .then(res => setDetails(res))
  }, [details]);

  return (
    <>
      <h1>{details.name}</h1>
      <h3>{details["physical address"]}</h3>
      <p>{details.description}</p>

    </>
  );
}
