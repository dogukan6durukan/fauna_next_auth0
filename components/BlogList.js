import Link from "next/link";
import { Message } from "./Message";

export const BlogList = (props) => {
  return (
    <div className="md:flex md:justify-around p-5 my-5">
      {props.blogs.length < 1 ? (
        <Message message="There is no data yet!" type="warning" />
      ) : (
        props.blogs.map((blog) => (
          <div key={blog.ts} className="md:w-2/5 border p-3 my-3 shadow-sm">
            <img src={blog.data.imageURL} />
            <p className="my-3">Blog Title : {blog.data.title}</p>
            <Link href={blog.ref["@ref"].id} className="p-2 bg-black inline-block text-white rounded-sm">See More</Link>
          </div>
        ))

      )}
  </div>
)};
