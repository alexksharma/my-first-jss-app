import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const BlogHeader = (props) => (
  <header>
      <div class="container">
        <div class="jumbotron text-white bg-primary">
            <h1 class="display-4"><Text field={props.fields.HeaderContent} /></h1>
            <p class="lead"> <RichText field={props.fields.HeaderSubTitle} /></p>
        </div>
      </div>
  </header>
);

export default BlogHeader;
