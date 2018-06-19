import React, { Component } from 'react';

class Category extends Component {
  render() {
    return(
      <div>
        {console.log(this.props.match.params.id)}
        Pagina de categoria
      </div>
    );
  }
}

// const Category = ({match}) => {
//   return (
//     <div>
//       Pagina de categoria
//     </div>
//   );
// }

export default Category;
