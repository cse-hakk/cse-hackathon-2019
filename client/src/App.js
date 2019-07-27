import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Typography, Divider } from 'antd';

import ReviewCard from './components/ReviewCard';
import RatingCard from './components/RatingCard';
import SummaryCard from './components/SummaryCard';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;


function App() {
  var number = 4
  return (
    <div className="App">
      <Layout>
      <Header className="App-header">
      <Menu
      backgroundColor="747474"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}>
        <Avatar size={60} style={{ backgroundColor: '#90EE90' }} src="https://cdn3.iconfinder.com/data/icons/global-earth-navigation-location-1/100/51-512.png" />
        <Text strong>EcoTrip</Text>
        <Menu.Item key="1">View Itinerary</Menu.Item>

      </Menu>
    </Header>
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
