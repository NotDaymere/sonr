import './Blog.scss'

import Title from './elements/Title/Title';
import Posts from './elements/Posts/Posts';

function Blog () {
    return (
        <div className="Blog">
            <Title />
            <Posts />

        </div>
    )
}

export default Blog;