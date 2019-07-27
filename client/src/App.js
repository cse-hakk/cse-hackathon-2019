import React from 'react';
import { Layout } from 'antd';

import SummaryCard from 'components';
import logo from './logo.svg';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>

        </Content>
      </Layout>
    </div>
  );
}

export default App;
