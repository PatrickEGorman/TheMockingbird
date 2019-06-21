import React from 'react'
import ReactDOM from 'react-dom'

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
            <form action={"create_article"} method={"POST"}>
                <input type={'hidden'} name={"_csrf"} value={this.csrfToken}/>
                <div className={'formgroup col-md-6'}>
                    <label className={'small mb-1 mt-3'}> Title </label>
                    <input placeholder={'Enter article title'} required name='title' type='text'
                           className={'form-control'}/>
                </div>
                <div className={'formgroup col-md-6'}>
                    <label className={'small mb-1 mt-3'}> Title </label>
                    <input placeholder={'Enter article author'} name='author' type='text'
                           className={'form-control'}/>
                </div>
                <div className={'formgroup col-md-3'}>
                    <label className={'small mb-1 mt-3'}>Category</label>
                    <br />
                    <select name={"category"}>
                        {category_choices}
                    </select>
                </div>
                <div className={'formgroup col-md-6'}>
                    <label className={'small mb-1 mt-3'}> Image Url </label>
                    <input placeholder={'Enter Image Url'} name='image_url' type='url'
                           className={'form-control'}/>
                </div>
                <div className={'formgroup col-md-6'}>
                    <label className={'small mb-1 mt-3'}> Image Caption </label>
                    <input placeholder={'Enter Image Caption'} name='image_caption' type='text'
                           className={'form-control'}/>
                </div>
                <div className={'formgroup col-md-12'}>
                    <label className={'small mb-1 mt-3'}> Article Contents </label>
                    <textarea placeholder={'Enter Article Contents'} required name='contents' type='text' rows={15}
                           className={'form-control'}/>
                </div>
                <br/>
                <input className={'btn btn-primary'} type={"submit"}/>
            </form>
        )
        }
}

ReactDOM.render(<CreateArticleForm />, document.getElementById('create_article_form'));
