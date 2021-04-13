import {FcLike} from 'react-icons/fc';
import {useGlobalContext} from '../context';
import { Link } from 'react-router-dom';

const BlogShort = (props) => {

    const { topic, data } = props;
    const {Like}=useGlobalContext();


    if (data.length === 0) {

        return (
            <div className="Bloshort-not-found">
                <h1>{topic}</h1>
                <marquee className="alert" behavior="scroll" direction="right">There is no blog found on this topic</marquee>

            </div>
        )
    }


    return(
        <>
    <h1>{topic}</h1>
    <div className="BlogShort">

    {
        data.map((BlogInformation)=>{
            const {id,title,img,url,like}=BlogInformation;
            return (
                
                
                <div className="BlogInformation" key={id}>
                    <h2>{title}</h2>
                    <Link to={url} className="blog-a">
                    <img src={img}  alt='BlogShort Img'/> 
                    <Like like={like} isBlogShort={true}></Like>
                    {/* <h2 style={{textAlign:'center'}}><FcLike /> {like}</h2> */}
                    <button className="btn">Read more
                    </button>
                   
                    </Link>
                </div>

            )
        })
    }

    </div>
    </>
    )
}

export default BlogShort;