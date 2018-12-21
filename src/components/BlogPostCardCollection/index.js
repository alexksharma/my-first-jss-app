import { DateField, Image, RichText, Text, Link } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';
// import querySearch from "stringquery";

// const {blogId} = this.props.location.query.blogid;

// var blogId = GetBlogId();

const BlogPostCardCollection = (props) => (
  <aside role="aside" class="container blog-post-read-more">
    <div class="row">
      <div class="col-sm-12 related-posts-title-holder">
              <span class="related-posts-title text-muted"><RichText field={props.fields.heading} /></span>
            </div>

      {props.fields.blogArticleList && props.fields.blogArticleList.map((listItem, index) => 
      //{
        //if (blogId == null || (blogId != null && index == blogId))
          // return index == 2 ?
          
          // return (
          <div class="blog-post-card card col-lg-4 col-md-6" id={`blogPostListItem-${index}`}>
            <Image media={listItem.fields.postImageSmall} />
            <div class="card-body bg-light">
            <p>{listItem.id}</p>
             <strong class="d-inline-block mb-2 text-success"><Text field={listItem.fields.category} /></strong>
              <h3 class="card-title"><Text field={listItem.fields.title} /></h3>
              <div class="mb-1 text-muted"><DateField field={listItem.fields.postDate} /></div>
              <p><RichText field={listItem.fields.abstractText} /></p>
              <Link field={listItem.fields.blogpostInternalLink} className="btn btn-warning btn-block">Read on</Link>
              {/* <a href={`./blogdetailsmodule?blogid=${index}`} class="btn btn-warning btn-block">Read on</a> */}
            </div>
          </div>
          // )
        // :
        // null;
        //return (null);
      //}
      )}
    </div>
  </aside>
);


export default BlogPostCardCollection;

// function GetBlogId() {
//   var q = querySearch(window.location.search).blogid;
//   return q;
// }
