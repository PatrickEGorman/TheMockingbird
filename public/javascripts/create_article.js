import React from 'react'
import ReactDOM from 'react-dom'

class CreateArticleForm extends React.Component {
    render(){
        return (
            <form action={"create_article"} method={"POST"}>
                <div className={'formgroup col-md-6'}>
                    <label className={'small mb-1 mt-3'}> Title </label>
                    <input placeholder={'Enter article title'} required name='title' type='text'
                           className={'form-control'}/>
                </div>
                <div className={'formgroup col-md-6'}>
                    <label className={'small mb-1 mt-3'}> Image Url </label>
                    <input placeholder={'Enter Image Url'} name='image_url' type='url'
                           className={'form-control'}/>
                </div>
                <div className={'formgroup col-md-12'}>
                    <label className={'small mb-1 mt-3'}> Article Contents </label>
                    <textarea placeholder={'Enter Article Contents'} required name='contents' type='text' rows={15}
                           className={'form-control'}/>
                </div>
                <input type={"submit"}/>
            </form>
        );
        }
}

ReactDOM.render(<CreateArticleForm />, document.getElementById('create_article_form'));
