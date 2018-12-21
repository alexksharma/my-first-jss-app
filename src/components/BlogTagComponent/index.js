import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const BlogTagComponent = (props) => {
  const { heading, tagContentList } = props.fields;

  return (

    <div class="container tags-topics">
    <div id="accordion">
        <div class="card bg-dark">
            {/* If showing a filtered result, add a class of "active" to this button */}
            <button class="btn btn-info btn-lg btn-block active" data-toggle="collapse" data-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                <Text field={heading} />
            </button>
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
    
            {/* If showing a filtered result, add a class of "active" to the tag or month that is appropriate 
             If showing a filtered result, add a class of "show" to this div */}
            <div id="collapseOne" class="collapse tag-buttons" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                
                      {tagContentList && tagContentList.map((listItem, index) => (
                      
                          <a class="btn btn-info" id={`tagBlogListItem-${index}`} href="#" role="button">
                            <Text field={listItem.fields.KeyValue} />
                          </a>
                     
            ))}
    
                    {/* <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Long Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Long Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Super Extra Long Tag</a>
                    <a class="btn btn-info" href="#" role="button">Extra Long Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Extra Long Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a>
                    <a class="btn btn-info" href="#" role="button">Tag</a> */}
                </div>
    
                <div class="card-body">
                    <div class="archive-year">
                        <div class="archive-year-label">2019</div>
                        <a class="btn btn-info" href="#" role="button">Jan</a>
                        <a class="btn btn-info" href="#" role="button">Feb</a>
                    </div>
                    <div class="archive-year">
                        <div class="archive-year-label">2018</div>
                        <a class="btn btn-info" href="#" role="button">Jan</a>
                        <a class="btn btn-info" href="#" role="button">Feb</a>
                        <a class="btn btn-info" href="#" role="button">Mar</a>
                        <a class="btn btn-info" href="#" role="button">Apr</a>
                        <a class="btn btn-info" href="#" role="button">May</a>
                        <a class="btn btn-info" href="#" role="button">Jun</a>
                        <a class="btn btn-info" href="#" role="button">Jul</a>
                        <a class="btn btn-info" href="#" role="button">Aug</a>
                        <a class="btn btn-info" href="#" role="button">Sep</a>
                        <a class="btn btn-info" href="#" role="button">Oct</a>
                        <a class="btn btn-info" href="#" role="button">Nov</a>
                        <a class="btn btn-info" href="#" role="button">Dec</a>
                    </div>
                    <div class="archive-year">
                        <div class="archive-year-label">2017</div>
                        <a class="btn btn-info" href="#" role="button">Jan</a>
                        <a class="btn btn-info" href="#" role="button">Feb</a>
                        <a class="btn btn-info" href="#" role="button">Mar</a>
                        <a class="btn btn-info" href="#" role="button">Apr</a>
                        <a class="btn btn-info" href="#" role="button">May</a>
                        <a class="btn btn-info" href="#" role="button">Jun</a>
                        <a class="btn btn-info" href="#" role="button">Jul</a>
                        <a class="btn btn-info" href="#" role="button">Aug</a>
                        <a class="btn btn-info" href="#" role="button">Sep</a>
                        <a class="btn btn-info" href="#" role="button">Oct</a>
                        <a class="btn btn-info" href="#" role="button">Nov</a>
                        <a class="btn btn-info" href="#" role="button">Dec</a>
                    </div>
                    <div class="archive-year">
                        <div class="archive-year-label">2016</div>
                        <a class="btn btn-info" href="#" role="button">Jan</a>
                        <a class="btn btn-info" href="#" role="button">Feb</a>
                        <a class="btn btn-info" href="#" role="button">Mar</a>
                        <a class="btn btn-info" href="#" role="button">Apr</a>
                        <a class="btn btn-info" href="#" role="button">May</a>
                        <a class="btn btn-info" href="#" role="button">Jun</a>
                        <a class="btn btn-info" href="#" role="button">Jul</a>
                        <a class="btn btn-info" href="#" role="button">Aug</a>
                        <a class="btn btn-info" href="#" role="button">Sep</a>
                        <a class="btn btn-info" href="#" role="button">Oct</a>
                        <a class="btn btn-info" href="#" role="button">Nov</a>
                        <a class="btn btn-info" href="#" role="button">Dec</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};




export default BlogTagComponent;
