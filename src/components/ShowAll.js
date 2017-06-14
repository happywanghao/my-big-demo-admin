import React from 'react';
import axios from 'axios';
class ShowAll extends React.Component{
  state={
    shops:[]
  }
  componentDidMount(){
    axios.get('http://petapi.haoduoshipin.com/shops')
    .then(res=>this.setState({shops:res.data.shops}))
  }
  render(){
    return (
      <div>
        {this.state.shops.map(item=>(
          <div style={{width:"100px",height:'100px',background:"#ccc",float:'left',margin:'10px',}} key={item._id}>
            <p style={{textAlign:'center'}}>{item.name}</p>
          </div>
        ))}
      </div>
    )
  }
}
export default ShowAll
