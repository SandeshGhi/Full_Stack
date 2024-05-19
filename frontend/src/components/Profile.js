// // frontend/src/components/Profile.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/auth/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(response.data);
//       } catch (error) {
//         console.error('Fetching profile error', error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-2xl mb-4">Profile</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// frontend/src/components/Profile.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [updatedUser, setUpdatedUser] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/auth/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(response.data);
//       } catch (error) {
//         console.error('Fetching profile error', error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleUpdate = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.put('http://localhost:5000/api/auth/profile', updatedUser, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUser(response.data);
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Updating profile error', error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete('http://localhost:5000/api/auth/delete', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       // Optionally, you may want to redirect the user to a different page after deletion
//     } catch (error) {
//       console.error('Deleting account error', error);
//     }
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-2xl mb-4">Profile</h2>
//         {isEditing ? (
//           <div>
//             <input
//               type="text"
//               value={updatedUser.name || user.name}
//               onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
//               placeholder="Name"
//               className="mb-2"
//             />
//             <input
//               type="email"
//               value={updatedUser.email || user.email}
//               onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
//               placeholder="Email"
//               className="mb-2"
//             />
//             <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
//               Save
//             </button>
//             <button onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <div>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
//               Edit
//             </button>
//             <button onClick={() => setIsDeleting(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//               Delete Account
//             </button>
//             {isDeleting && (
//               <div>
//                 <p>Are you sure you want to delete your account?</p>
//                 <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
//                   Yes
//                 </button>
//                 <button onClick={() => setIsDeleting(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
//                   No
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Fetching profile error', error);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:5000/api/auth/profile', updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Profile updated successfully:', response.data);

      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Updating profile error', error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:5000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(null);
    } catch (error) {
      console.error('Deleting account error', error);
    }
  };

  if (!user) {
    return <div className='ml-4 mt-4'>Loading...   Deleted Something? <Link to='/login'><h2 className='text-red-600'> Back to login</h2></Link></div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Profile</h2>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={updatedUser.name || user.name}
              onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
              placeholder="Name"
              className="mb-2"
            />
            <input
              type="email"
              value={updatedUser.email || user.email}
              onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
              placeholder="Email"
              className="mb-2"
            />
            <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button onClick={() => setIsDeleting(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete Account
            </button>
            {isDeleting && (
              <div>
                <p>Are you sure you want to delete your account?</p>
                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Yes
                </button>
                <button onClick={() => setIsDeleting(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  No
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;



