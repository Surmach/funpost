import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components'
import { Row, Col, Button } from 'antd';
import ArticleList from './components/Article/ArticleList';
import Widget from './components/Widget/AuthInWidget';
import TopKomentWidget from './components/Widget/TopKoments';




function App() {
  return (
    <MyApp className="App">
      
        <Header/>     {/*  HEADER  */}
         
        <Row>         {/*  MAIN ROW  */}
          <Col span='17'>        {/*  ARTICLE COL  */}
            <ArticleList/>
          </Col>
          <Col span='7'>       {/*  WIDGET COL  */}
            <Widget/>
            <Button style={{width: '94%', margin: "0 6%"}} type="primary" icon="plus">ДОБАВИТЬ ПОСТ</Button>
            <TopKomentWidget/>
          </Col>
        </Row>
      
      
    
    </MyApp>
  );
}

export default App;

const MyApp = styled.div`
  padding: 0;
  margin: 0 auto;
  height: 100%;
  width: 80%;
  background: none !important !important;
  
`
