import React from 'react'
import ReactDOM from 'react-dom'

let categories = ['World', 'U.S.', 'Politics', 'Science', 'Technology', 'Sports', 'Entertainment', 'Local', 'Health'];

export default categories;

class CategoryList extends React.Component {
    render() {
    let categoryList = [];
    for(const [index, value] of categories.entries()){
        categoryList.push(<li key={index} className={'nav_item'}>
            <a className={'nav-link'} href={'/articles/category/'+value}>{value}</a>
        </li> )
    }
    return (
        <ul className={'navbar-nav mr-auto'}>
            {categoryList}
        </ul>
    )
    }
}

ReactDOM.render(<CategoryList />, document.getElementById('category_list'));