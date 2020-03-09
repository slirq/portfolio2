import React from 'react';
import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';
import './App.css';
import Main from './components/main';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link,HashRouter} from 'react-router-dom';
function App() {
  return (
    <div style={{height:'720px', position: 'relative'}}>
    <Layout style={{background: 'url(http://getwallpapers.com/wallpaper/full/d/a/6/5615.jpg) center / cover'}}>
        <Header className = "header-color" transparent title="Portfolio" style={{color: 'white'}}>
            <Navigation>
                <Link to="/">home</Link>
                <Link to="/skills">skills</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">home</Link>
                <Link to="/skills">skills</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className = "page-content"/>
            <Main>

            </Main>
        </Content>
    </Layout>
</div>
  );
}

export default App;
