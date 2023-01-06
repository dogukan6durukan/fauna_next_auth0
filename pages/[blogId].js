import { Wrapper } from "../components/Wrapper";
import { Blog } from "../components/Blog";


export default function singleBlog({ result }) {
    
    console.log(result);

    return(
        <Wrapper>
            <Blog blogs={result}/>
        </Wrapper>
    )
}

export async function getStaticProps({ params }) {

    const res = await fetch(`${process.env.BASE_URL}/api/posts/${params.blogId}`);
    const result = await res.json();

    return {
        props : {
            result,
        }
    }


}

export async function getStaticPaths() {
  
    const res = await fetch(`${process.env.BASE_URL}/api/posts/`);
    const result = await res.json();
  
    return {
      paths : result.data.map(b => {
          return {
              params : {
                  blogId : b.ref['@ref'].id
              }
          }
      }),
  
      fallback : false,
  
  }
  
  }