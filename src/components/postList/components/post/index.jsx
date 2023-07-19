import React from "react";
import PropTypes from "prop-types";

PostComponent.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  tags: PropTypes.array,
};

PostComponent.DefaultProps = {
  imgUrl: "",
  tags: [],
};

function PostComponent(props) {
  const {
    imgUrl,
    title,
    content,
    createAt,
    id,
    authorAvatar,
    authorName,
    tags,
  } = props;

  let tagsFormat = "";
  tags.map((tag, index) => {
    if (index < tags.length - 1) {
      return (tagsFormat += tag + " / ");
    } else {
      return (tagsFormat += tag);
    }
  });

  console.log(tagsFormat);
  return (
    <div className="post">
      <img src={imgUrl} alt="" className="w-[100%] object-cover" />
      <span className="font-bold uppercase inline-block py-1 text-[#AAA] text-[14px]">{tagsFormat}</span>
      <h4 className="text-[18px] font-bold text-black font-r">{title}</h4>
      <div className="author flex justify-between items-center">
        <div className="author-info flex items-center gap-2">
          <img src={authorAvatar} alt={authorName} className="author-avatar w-[30px] mt-1 object-cover rounded-[50%]" />
          <span className="text-[14px] font-medium">{authorName}</span>
          <i className="fa-solid fa-circle-check text-[#11468F]"></i>
        </div>

        <span>{createAt}</span>
      </div>
    </div>
  );
}

export default PostComponent;
