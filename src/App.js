/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Header from './Header';
import Layout from './Layout';
import Post from './Post';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Layout />} />
      <Route index element={
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      } />
      <Route path={'/login'} element= {
        <main>
          <Header></Header>
          <div>Login page</div>
        </main>
      } />
    </Routes>
    
  );
}

export default App;
