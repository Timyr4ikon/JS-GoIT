'use strict';

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  
  const logger = updatedUsers => console.table(updatedUsers);

  const toggleUserStates = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
    );

    const promise = new Promise((resolved,rejected) =>{
        
        resolved(updatedUsers);
    });
    return promise;
  };
  
  toggleUserStates(users, 'Mango').then(logger);
  toggleUserStates(users, 'Lux').then(logger);