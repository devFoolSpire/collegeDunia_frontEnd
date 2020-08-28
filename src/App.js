import React, { Component } from 'react'
import Colleges from './components/Colleges'
import colleges from './data/colleges.json'
import './App.css'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      colleges_list :[],
      items: 10,
      isLoading : false
    };
  }

  componentDidMount(){
    // console.log("mounted successfully");
    let C = [];
    for(let i=0;i<this.state.items;i++) {
      C.push(colleges[i]);
      // console.log(colleges[i]);
    }

    this.setState({
      colleges_list : C,
    });

    window.addEventListener('scroll', this.onScroll, false);
   }

   componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
  
  loadMoreItems() {
    this.setState({ loadingState: true });

    let C=[];
    let items;
    if(this.state.items>50) items=50;
    else items = this.state.items + 10;

    for(let i=0;i<this.state.items;i++) C.push(colleges[i]);
    this.setState({
      colleges_list: C
    })

    // setTimeout(() => {
    //   this.setState({ 
    //     items: items, 
    //     loadingState: false });
    // }, 1000);

    this.setState({ 
      items: items, 
      loadingState: false });

  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) 
      && 
      (this.state.items < 55)
    ) {
      // console.log("load more");
      this.loadMoreItems();
    }
  }


  render() {
    return (
      <div className="App">
        {
          this.state.isLoading ? <div className="loading">Loading Colleges...</div> :
          this.state.colleges_list.map((college,key) => {
            return (
              <div key={key}>
                {/* {key} */}
                <div><Colleges college={college}/></div>
              </div>
            )
          })
        }
      </div>
    )
  }

}
