import React from 'react';
import { Layout } from 'antd';

import SummaryCard from './components/SummaryCard';
import logo from './images/logo.svg';
import './css/App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>
          <SummaryCard/>
        </Content>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
