import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Article extends React.Component {
    render(){
        return (
            <div className={'col-md-6'}>
                <div className={'row'}>
                    <div className={'col-md-8'}>
                        <div className={"row"}>
                            <p>props.category :</p>
                        </div>
                        <div className={"row"}>
                            <h3>props.title</h3>
                        </div>
                        <div className={"row"}>
                            <p>props.contents :</p>
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <img source={props.url}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <p>props.author</p>
                    </div>
                    <div className={'col-md-4'}>
                        <p>props.date</p>
                    </div>
                </div>
            </div>
        )
    }
}


class ArticleList extends React.Component{

}