import React from 'react';
import { Text, RichText, DateField, Image } from '@sitecore-jss/sitecore-jss-react';

const BlogArticle = (props) => {
  const { postImage, category, title, postDate, description, blogtagContentList, blogArticleList } = props.fields;

  return (
    <main role="main" class="container blog-post-detail">
      <div class="row">

            {blogArticleList && blogArticleList.map((listItem, index) => 
      //{
        //if (blogId == null || (blogId != null && index == blogId))
          // return index == 2 ?
          
          // return (

            <div class="blog-post-detail-card card col-lg-12">
            {/* <img class="card-img-top" src="http://placeimg.com/1110/751/tech" alt="Card image cap"/> */}
            <Image media={listItem.fields.postImage} />
            <div class="card-body bg-light">
              <strong class="d-inline-block mb-2 text-success"><Text field={listItem.fields.category} /></strong>
              <h3 class="card-title"><Text field={listItem.fields.title} /></h3>
              <div class="mb-1 text-muted"><DateField field={listItem.fields.postDate} render={(date) => date.toUTCString()} /></div>
              <RichText field={listItem.fields.description} />
              <p></p>
              <div class="blog-detail-tag-list"><span class="read-more-heading">Read more: </span>
  
                {listItem.fields.blogtagContentList && listItem.fields.blogtagContentList.map((listItem1, index1) => (
  
                  <a class="btn btn-info" id={`blogtagListItem-${index1}`} href="#" role="button">
                    <Text field={listItem1.fields.KeyValue} />
                  </a>
  
                ))}
                {/* <a class="btn btn-info" href="#" role="button">Tag</a>
                        <a class="btn btn-info" href="#" role="button">Super Extra Long Tag</a>
                        <a class="btn btn-info" href="#" role="button">Extra Long Tag</a> */}
              </div>
            </div>
</div>
      )}


      
      </div>
    </main>

  );
};

export default BlogArticle;
