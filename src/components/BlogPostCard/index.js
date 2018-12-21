import React from 'react';
import { Image, Text, DateField, RichText } from '@sitecore-jss/sitecore-jss-react';

const BlogPostCard = (props) => {
  const { category, title, postDate, abstractText, postImageSmall } = props.fields;

  return (

    <div class="blog-post-card card col-lg-4 col-md-6">
    <Image media={postImageSmall} />
    <div class="card-body bg-light">
        <strong class="d-inline-block mb-2 text-success"><Text field={category}/></strong>
        <h3 class="card-title"><Text field={title} /></h3>
        <div class="mb-1 text-muted"><DateField field={postDate} render={(date) => date.toUTCString()} /></div>
        <p><RichText field={abstractText} /></p>
        <a href="#" class="btn btn-warning btn-block">Read on 34567</a>
    </div>
</div>
  );
};

export default BlogPostCard;
