
    
import React, { Component } from 'react';



class Person extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    person: {
      fullName: `Brendan Eich`,
      imgSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4LzBnzjUbrtZL8dwOw4pLgHaEK%26pid%3DApi&f=1`,
      profession: `Computer Programmer`,
      bio: `Brendan Eich (born July 4, 1961) is an American computer programmer and technology executive. He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation. He served as the Mozilla Corporation's chief technical officer before he was appointed chief executive officer, but resigned shortly after his appointment due to controversy over his opposition to same-sex marriage. He subsequently became the CEO of Brave Software.`,
    },
    show: false,
    timer: 0,
  };
  handleChange() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div className='container'>
        {this.state.show && (
          <div className='col md-8'>
            <div className='row justify-content-center'>
              <h1 className='text-center'>{this.state.person.fullName}</h1>
            </div>
            <div className='row justify-content-center'>
              <h5 className='text-center'>{this.state.person.profession}</h5>
            </div>
            <div className='row'> 
              <img
                className='rounded mx-auto d-block'
                src={this.state.person.imgSrc}
                alt='profile'
              />
            </div>
            <div className='row'>
              <p>{this.state.person.bio}</p>
            </div>
          </div>
        )}
        <div className='row justify-content-center'>
          <h1>Life time</h1>
        </div>
        <div className='row justify-content-center'>
          <p>{this.state.timer}</p>
        </div>
        <div className='row justify-content-center'>
          <button
            className='btn'
            onClick={() => this.setState({ show: !this.state.show })}
          >
            ClickMe
          
          </button>
        </div>
      </div>
    );
  }
}

 
export default Person;