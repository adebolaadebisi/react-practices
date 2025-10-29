// import { useState, useEffect } from 'react';

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         setUsers(data);
//         setLoading(false); // Done loading
//       } catch (error) {
//         console.error('Error:', error);
//         setLoading(false);
//       }
//     }
    
//     fetchUsers();
//   }, []);
  
//   if (loading) {
//     return <p>Loading users...</p>;
//   }
  
//   return (
//     <div>
//       <h2>Users</h2>
//       {users.map(user => (
//         <p key={user.id}>{user.name} {user.address.city}</p>
//       ))}
//     </div>
//   );
// }

// export default UserList;
