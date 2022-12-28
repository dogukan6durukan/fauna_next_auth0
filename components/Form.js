import { useUser } from "@auth0/nextjs-auth0/client";
import { useRef } from "react";
import { Message } from "./Message";
import { useState } from "react";

export const Form = () => {
  const { user, isLoading } = useUser();
  const [message, setMessage] = useState();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageURL = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      titleRef.current.value !== "" &&
      descriptionRef.current.value !== "" &&
      imageURL.current.value !== ""
    ) {
      try {
        const results = {
          id: user.sub,
          imageURL : imageURL.current.value,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        };

        const request = await fetch("/api/posts/admin", {
          method: "POST",
          body: JSON.stringify(results),
          headers: {
            "Content-Type": "application/json",
          },
        });

        imageURL.current.value = "";
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        if(request.ok) {
          setMessage("Blog added successfully!");
        } else {
          setMessage('Something went wrong!');
        }

      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : user ? (
        <form
          className="w-fit p-12 border my-3 m-auto"
          onSubmit={submitHandler}
        >
          <h2 className="text-2xl text-center my-2">Add Post</h2>

          <div>
            <label>Image URL</label>
            <input
              type="text"
              ref={imageURL}
              className="border border-slate-400 rounded-sm block p-2 my-2"
            />
          </div>

          <div>
            <label>Post Title</label>
            <input
              type="text"
              ref={titleRef}
              className="border border-slate-400 rounded-sm block p-2 my-2"
            />
          </div>

          <div className="my-4">
            <label>Post Description</label>
            <textarea
              type="text"
              ref={descriptionRef}
              className="border border-slate-400 rounded-sm block w-full h-[120px] p-2 my-2"
            />
          </div>

          <button className="p-1 bg-zinc-800 text-gray-200 rounded-lg w-[100px] hover:scale-90 duration-100">
            Add
          </button>

          {message && <p className="mt-3">{message}</p>}
        </form>
      ) : (
        <Message message="Please login before adding blog" type="inform" />
      )}
    </>
  );
};
