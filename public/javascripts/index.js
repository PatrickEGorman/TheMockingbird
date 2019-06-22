import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import DateDisplay from './util/dateDisplay'

class Article extends React.Component {
    renderImageContents(){
        let dotDotDot = '';
        if(this.props.contents.length>150){
            dotDotDot = '...';
        }
        if(this.props.image_url) {
            return (
                <div className={"row"}>
                    <div className={'col-md-8'}>
                        <p>{this.props.contents.substring(0, 150)}
                            {dotDotDot}
                        </p>
                    </div>
                    <div className={'col-md-4'}>
                        <img alt={this.props.image_caption} className={'article_list_image'}
                             src={this.props.image_url}/>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={"row"}>
                    <div className={'col'}>
                        <p>{this.props.contents.substring(0, 150)}
                            {dotDotDot}
                        </p>
                    </div>
                </div>
            )
        }
    }
    render(){
        let dotDotDot = '';
        if(this.props.contents.length>150){
            dotDotDot = '...';
        }
        return (
            <div className={'col-md-6'}>
                <div className={"row"}>
                    <div className={'col'}>
                        <p>{this.props.category} :</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={'col'}>
                        <h3><a className={'text-info'} href={'/articles/view_article/'+this.props.id}>{this.props.title}</a></h3>
                    </div>
                </div>
                {this.renderImageContents()}
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <p>{this.props.author}</p>
                    </div>
                    <div className={'col-md-4'}>
                        <DateDisplay date={this.props.date}/>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

class ArticleList extends React.Component{
    render(){
        return(
            <div className="row">
                { this.props.articles.map((article, index) => (
                    <Article title={article.title} author={article.author} category={article.category}
                             image_url={article.image_url} date={article.date} contents={article.contents}
                             id={article._id} image_caption={article.image_caption} key={index}/>
                ))}
            </div>
        )
    }
}


$.get('/articles/article_list/10',
    (data)=>{
        ReactDOM.render(<ArticleList articles={data}/>,document.getElementById('articleContainer'))
    }, 'json'
);