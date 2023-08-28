// import { useState } from 'react'
// import Login from './components/login'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
// import './App.css'

// function App() {
//   const [currentPage, setCurrentPage] = useState('Login');

//   const renderPage = () => {
//     if (currentPage === 'Login') {
//       return <Login />;
//     }
//     if (currentPage === 'Dashboard') {
//       return <Dashboard />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <>
//       <Header handlePageChange={handlePageChange}></Header>
//       <main>
//         {renderPage()}
//       </main>
//     </>
//   )
// }

// export default App
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;