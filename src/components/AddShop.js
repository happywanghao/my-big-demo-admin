import React from 'react';
import axios from 'axios'
class AddShop extends React.Component{
  addShopName(e){
    e.preventDefault()
    if(this.input.value){
      let data={name:this.input.value}
      axios.post('http://petapi.haoduoshipin.com/shop/new',data)
      .then(
        res=>{console.log(res.data.msg);}
      )
      .catch(res=>console.log('保存失败'))

      this.form.reset()
    }
  }
  render(){
    return (
      <div>
        <form ref={it=>this.form=it} onSubmit={this.addShopName.bind(this)}>
          店面名称:<input ref={it=>this.input=it} placeholder='请输入店面名' type='text'/>
          <button type='submit'>提交店铺</button>
        </form>
      </div>
    )
  }
}
export default AddShop
