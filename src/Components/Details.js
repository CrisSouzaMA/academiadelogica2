import React from 'react';

class Details extends React.Component{
  constructor(){
    super();
    this.state = {
      imageApi: '',
    }
  }

componentDidMount(){
  this.getImg();
}

  getImg = () => {
    const { match: { params: {id} } } = this.props
    const url = `https://http.cat/${id}.jpg`
    this.setState({imageApi: url});
  }

  render(){
    console.log(this.props);
    const { imageApi } = this.state;
    return(
      <div className='bodyDetails'>
        <h2 className='headDetails'>Imagem do status</h2>
        <img className='imgDetails' src={imageApi} alt='status_code' />
      </div>
    );
  }
}

export default Details;