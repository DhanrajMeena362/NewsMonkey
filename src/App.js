import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes, //instead of "Switch"
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  // apiKey = '6bd3085ebecb412db14cbf3a778037c0';
  apiKey = 'c5d8a5f73ad1499fb47e883baff546a2'
  
  state = {
    progress: 0
  }
  setProgress =(progress)=>{
    this.setState({progress: progress})
  }
    render() {
    return (
      <div style={{backgroundColor: '#c2d4df85'}}>
        <Router>
          <NavBar/>
          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
          <div className="container my-3" >
              <Routes>
                <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} country="in" category="general" />} />
                <Route exact path="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={20} country="in" category="business" />} />
                <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={20} country="in" category="entertainment" />} />
                <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} country="in" category="general" />} />
                <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={20} country="in" category="health" />} />
                <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={20} country="in" category="science" />} />
                <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={20} country="in" category="sports" />} />
                <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={20} country="in" category="technology" />} />
              </Routes>
            </div>
        </Router>
       {/* <NavBar/>
       <News setProgress={this.setProgress} apiKey={this.apiKey}/> */}
      </div>
    )
  }
}

export default App
