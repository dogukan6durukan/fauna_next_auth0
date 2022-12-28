import React from "react";
import { Wrapper } from "../components/Wrapper";
import { BlogList } from "../components/BlogList";
import { Form } from "../components/Form";


export default function Home({ result }) {


  return(
    <Wrapper>
      <Form />
      <BlogList blogs={result.data}/>
    </Wrapper>
  )
}


export async function getStaticProps() {

  const res = await fetch(`${process.env.BASE_URL}/api/posts/`);
  const result = await res.json();

  return {
    props : { result }
  }

}
