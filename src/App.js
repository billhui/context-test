import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Users from './Users';
import Home from './Home';
import styles from './App.module.scss';

import { Layout, Menu, Button, Divider, Typography } from 'antd';
const { Header, Footer, Content } = Layout;
const { Paragraph } = Typography;

export const AppContext = React.createContext();

function App() {
  const ref = React.createRef();
  
  const [homeValue, setHomeValue] = React.useState("Click 'Grab From Home'");

  const onClick = () => {
    console.log(ref);
    if (ref.current) {
      console.log(ref.current.data);
      setHomeValue(ref.current.data.text);
    } else {
      setHomeValue("Use the nav bar to navigate to Home first");
    }
  };

  return (
    <AppContext.Provider value={{ value: 2, ref: ref }}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['3']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"> <Link to="/users">Users</Link></Menu.Item>
              <Menu.Item key="3"> <Link to="/about">About</Link></Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div className={styles.App}>
              <div>
                <Button onClick={onClick}>Grab From Home</Button>
                <Divider>Locale State from Home component:</Divider>
                <Paragraph>{homeValue}</Paragraph>
              </div>
              <Divider>Routes Below This Line</Divider>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
