import React from 'react'
import useFetch from './useFetch';

function Fetch() {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No users found</p>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}


export default Fetch;