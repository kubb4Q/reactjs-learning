import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group col-md-4'>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  // Whatever is returned here will show up as props
  // inside of BookList
  return {
    books: state.books
  }
}
// Anything returned from this function will end up  as props
// on the BookList container
const mapsDispatchToProps = dispatch => {
  // Whenever seleckBook is calle, the result should be passed
  // to all of our reducers
  return bindActionCreators({
    selectBook
  }, dispatch)
}

// Promote BookList from a component to a container -it needs to know
// about this new dispatch method selectBook . Make it available
export default connect(mapStateToProps, mapsDispatchToProps)(BookList)
