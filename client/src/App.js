import React from 'react';
import { Layout } from 'antd';

import ReviewCard from './components/ReviewCard';
import RatingCard from './components/RatingCard';
import SummaryCard from './components/SummaryCard';
import logo from './images/logo.svg';
import './css/App.css';

const { Header, Content, Footer } = Layout;

function App() {
  var number = 4
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>
          <SummaryCard/>
          <ReviewCard/>
        </Content>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
