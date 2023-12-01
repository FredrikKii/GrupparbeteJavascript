

function loadUserInfoFromLocalStorage() {
    // Hämta användarobjektet från localStorage
    let userData = localStorage.getItem('userData');
    
   
    return userData ? JSON.parse(userData) : [];
}
function saveUserToLocalStorage(userObj) {
    
    let existingData = loadUserInfoFromLocalStorage();

  
    existingData.push(userObj);

    
    localStorage.setItem('userData', JSON.stringify(existingData));
}


export  {loadUserInfoFromLocalStorage, saveUserToLocalStorage}