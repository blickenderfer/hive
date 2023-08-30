export const getSavedGameIds = () => {
    const savedGameIds = localStorage.getItem('games')
      ? JSON.parse(localStorage.getItem('games'))
      : [];
  
    return savedGameIds;
  };
  
  export const saveGameIds = (gameIds) => {
    if (gameIds.length) {
      localStorage.setItem('saved_games', JSON.stringify(gameIds));
    } else {
      localStorage.removeItem('saved_games');
    }
  };
  
  export const removeGameId = (gameIds) => {
    const savedGameId = localStorage.getItem('saved_games')
      ? JSON.parse(localStorage.getItem('saved_games'))
      : null;
  
    if (!savedGameId) {
      return false;
    }
  
    const updatedSavedGameIds = savedGameId?.filter((savedGameId) => savedGameId !== gameIds);
    localStorage.setItem('saved_games', JSON.stringify(updatedSavedGameIds));
  
    return true;
  };