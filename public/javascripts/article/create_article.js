import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import categories from './categories'

class CreateArticleForm extends React.Component {
    constructor(props){
        super(props);
        this.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }
    render(){
        let category_choices = [];

        for(const [index, value] of categories.entries()){
            category_choices.push(<option key={index} value={value}>{value}</option>)
        }
        return (
            <form action={"create_article"} id={'create_article_form'} method={"POST"} encType="multipart/form-data">
                <div className={'col-md-6'} id={'errors'}> </div>
                <input type={'hidden'} name={"_csrf"} required value={this.csrfToken}/>
                <input name='author' type='hidden' required value={this.props.author}/>
                <div className={'formgroup col-md-6'}>
                    <label className={'small mb-1 mt-3'}> Title </label>
                    <input placeholder={'Enter article title'} required name='title' type='text'
                           className={'form-control'} defaultValue={formData.title}/>
                </div>
                <div className={'formgroup col-md-3'}>
                    <label className={'small mb-1 mt-3'}>Category</label>
                    <br />
                    <select name={"category"} defaultValue={formData.category}>
                        {category_choices}
                    </select>
                </div>
                <br/>

                <!--<div className={'custom-file col-md-12'}>
                        <label htmlFor={'image'}> Upload an Image </label>
                        <input placeholder={'Upload Image'} id='image' name='image' type='file'
                               className={'form-control-file'}/>
                    </div>
                    <div className={'formgroup col-md-12'}>
                        <label className={'small mb-1 mt-3'}> Image Caption </label>
                        <input placeholder={'Enter Image Caption'} name='image_caption' type='text'
                               className={'form-control'} defaultValue={formData.image_caption}/>
                    </div>
                ! -->
                <div className={'formgroup col-md-12'}>
                    <label className={'small mb-1 mt-3'}> Article Contents </label>
                    <textarea placeholder={'Enter Article Contents'} required name='contents' type='text' rows={15}
                           className={'form-control'} defaultValue={formData.contents}/>
                </div>
                <br/>
                <input className={'btn btn-primary'} type={"submit"}/>
            </form>
        )
        }
}


class LoggedOutDisplay extends React.Component{
    render(){
        return(
            <div>
                You must be signed in with Facebook in order to create an article.
            </div>
        )
    }
}


function renderContent() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            FB.api('/me', {accessToken: response.authResponse.accesssToken}, function (response) {
                ReactDOM.render(<CreateArticleForm author={response.name}/>, document.getElementById('create_article_form'));
            });
        }
        else {
            ReactDOM.render(<LoggedOutDisplay/>, document.getElementById('create_article_form'))
        }
    });
}

document.addEventListener('facebookLoaded', function (e) {renderContent()});
