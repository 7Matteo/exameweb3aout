import React from 'react';
import { Context as jokeContext } from 'contexts/jokeContext';
import { useContext } from 'react';
import Joke from './Joke';
import { Layout, Menu } from 'antd'
import Jokes from './Jokes';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import FullJoke from './FullJoke';

const { Header } = Layout



const App = () => {
  const { jokes } = useContext(jokeContext);
  console.log(jokes);

  if(!jokes){
    return <p>loading...</p>
  }
  return (
    <Layout className="layout">
      
      <Header>
      <Router>
        <div>
          <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
            <Link to="/"><Menu.Item>Jokes</Menu.Item></Link>
            <Link to="/about"><Menu.Item>About</Menu.Item></Link>
            
            
            
          </Menu>
        </div>

        <Routes>
          <Route path="/" element={<Jokes jokes={jokes}/>} />
          <Route path="/about" element={<h1>ABOUT</h1>} />
          <Route path="/jokes/:id" element={<FullJoke jokes={jokes}/>} />
        </Routes>
      </Router>  
        
      </Header>
        
    </Layout>
  )
}

export default App
