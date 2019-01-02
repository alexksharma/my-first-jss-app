import { DateField, Image, RichText, Text, Link } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';
import querySearch from "stringquery";

//var blogCategory = GetBlogCategory();


const GraphQLSearch = (props) => {
  // Query results in integrated GraphQL replace the normal `fields` data
  //const { sample1, sample2 } = props.fields;
  const { search, contextItem } = props.fields.data;
  //const blogCategory1 = props.location.query.blogCategory;

  return (
    <aside role="aside" class="container blog-post-read-more">
      {search && (
        <div class="row">
          <div class="col-sm-12 related-posts-title-holder">
            {/* <div> My blog category {blogCategory}  </div> */}
            <span class="related-posts-title text-muted"><RichText field={props.fields.heading} /></span>
          </div>

          {search.results && search.results.items && search.results.items.map((child, index) => (

            <div class="blog-post-card card col-lg-4 col-md-6" id={`blogPostListItems-${index}`}>
              {/* <Image media={child.item.postImageSmall} /> */}

              <img class="card-img-top" src={child.item.postImageSmall.src} alt={child.item.postImageSmall.alt}></img>

              <div class="card-body bg-light">
                <p>{child.item.id}</p>
                <strong class="d-inline-block mb-2 text-success"><Text field={child.item.category} /></strong>
                <h3 class="card-title"><Text field={child.item.title} /></h3>

                <div class="mb-1 text-muted">
                  {child.item.postDate.formattedDateValue}
                  {/* and 
                  <DateField field={child.item.postDate.formattedDateValue} render={(date) => date.toDateString()}/> */}
                </div>
                <p><RichText field={child.item.abstractText} /></p>
                {/* <Link field={child.item.blogpostInternalLink} className="btn btn-warning btn-block">Read on</Link> */}
                {/* <a href={`./blogdetailsmodule?blogid=${index}`} class="btn btn-warning btn-block">Read on</a> */}
                <a href={child.item.blogpostInternalLink.url} class="btn btn-warning btn-block">{child.item.blogpostInternalLink.text}</a>
              </div>
            </div>
          )

          )}
        </div>

      )}
    </aside>
  );
};

// GraphQLSearch.propTypes = {
//   results: PropTypes.array.isRequired
// };

// GraphQLSearch.propTypes = {
//   results: PropTypes.array.isRequired
// };

export default GraphQLSearch;

// function GetBlogCategory() {
//   console.log("output is " + window.location.search);
//   var q = querySearch(window.location.search).blogCategory;
//   return q;
// }

