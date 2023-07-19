import React, { useEffect, useState } from "react";
import PostComponent from "./components/post";

PostListComponent.propTypes = {
};

PostListComponent.defaultProps = {
};

function PostListComponent({ title }) {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://64ad8b8cb470006a5ec61acc.mockapi.io/api/todoList/BlogApp"
      );
      const responseJSON = await response.json();
      setDataList(responseJSON);
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="mt-[10px] mb-[50px] mx-3">
        <h4 className="text-[20px] text-black pb-1 border-b-4 border-[#394867] uppercase mb-[10px] inline-block font-bold">
          {title}
        </h4>
        <div className="post-list grid grid-cols-1 gap-5">
          {dataList.map((post) => (
            <PostComponent
              key={post.id}
              authorName={post.author}
              authorAvatar={post.avatarAuthor}
              title={post.title}
              content={post.content}
              createAt={post.createAt}
              tags={post.tag}
              id={post.id}
              imgUrl={post.imgURL}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default PostListComponent;
