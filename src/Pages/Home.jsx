import React from 'react';
import StatusButt from '../Components/StatusButt';
import { Link, Redirect } from 'react-router-dom';
import { statusMessages } from '../Data/Data';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputChange: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ inputChange: value });
  }

  render() {
    const { inputChange } = this.state
    return (
      <div className='everyHome'>
        <h1 className='headHome'>Academia de Lógica - Parte 2</h1>
        <div className='inputHome'>
          <label 
          htmlFor='input-home'
          >
            Digite aqui
            <input
              id='input-home'
              value={ inputChange }
              type='text'
              onChange={ this.handleChange }
              placeholder='Pesquise status HTTP aqui'
            />
          </label>
        </div>
        { statusMessages.map((value) => (
          <Link
            to={ `/details/${ value.status }` }
          >
            <StatusButt
              key={ value.status }
              status={ value.label }
              statusNumber={ value.status }
            />
          </Link>
        )) }

      </div>
    );
  }
}

export default Home;