import './Article.scss'

//Elements
import Title from './elements/Title/Title';
import Community from './elements/Community/Community';
import MoreArticle from './elements/MoreArticle/MoreArticle';

function Article () {
    return (
        <div className="Article">
            <Title />
            <Community />
            <MoreArticle />
        </div>
    )
}

export default Article;