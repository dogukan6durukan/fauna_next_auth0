export const Blog = (props) => {

    return(
        <div className="p-3 md:w-1/2 m-auto">
            <img src={props.blogs.data.imageURL} />
            <h1 className="my-3">{props.blogs.data.title}</h1>
            <p>{props.blogs.data.description}</p>
        </div>
    )

}