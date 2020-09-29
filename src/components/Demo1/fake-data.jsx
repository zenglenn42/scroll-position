import React from 'react'

const fakeData = Array.from({ length: 20 }, (x, i) => (
  <p key={i}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis maiores assumenda voluptatum commodi dignissimos, saepe ab enim officia ipsa quibusdam mollitia impedit laborum deserunt debitis necessitatibus nemo optio distinctio.
  </p>
))

export default () => fakeData
