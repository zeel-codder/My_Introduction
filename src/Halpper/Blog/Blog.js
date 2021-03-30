/* eslint-disable jsx-a11y/no-distracting-elements */
import {useGlobalContext} from '../context'
import {useEffect,useState} from "react"
import Prism from "prismjs"
// import Code from '../prisumh'
// import marked from 'marked';
// import file from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';
// import plugins from '../'
// import img1 from '../../img/home/1.jpg'

const Blog=()=>{

    
    const {BlogInfo,BlogMainImg,BlogShort}=useGlobalContext();
    const [data,setdata]=useState("");

    // console.log(BlogData)
    // let dic=BlogData.find((data)=>data.id===1) 

    useEffect(() => {
       setdata(BlogInfo);
      }, [data])

    return (
        <article className="blog-container">
          <marquee className="alert" behavior="scroll" direction="right">This page is still in production</marquee>
          <h1>Zeel Prajapati's Blog</h1>

          <img className="img" src={BlogMainImg} alt="blog img"></img>
          <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae enim dolor aut reprehenderit rerum. Inventore eaque iste ab ut in placeat quasi et voluptates. Exercitationem voluptate repellat similique? Libero.lo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, est quae repellendus vel placeat odio voluptatum itaque quia sequi ipsa eius quod? Perferendis veniam deserunt fugit earum at consequuntur voluptatum!
          </p>

          <div className="ListOfBlogs">
            {

              BlogInfo.map((page)=>{

                return (<BlogShort {...page} />)
                 
              })

            }
          </div>


        </article>
    )
}

export default Blog;