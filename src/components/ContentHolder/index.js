import React from 'react';
import { Placeholder, getChildPlaceholder, getFieldValue } from '@sitecore-jss/sitecore-jss-react';

const ContentHolder = (props) => {  
  return (
    <div>
        {/* <Placeholder name="jss-contentholder" rendering={props.rendering} /> */}
        <header data="1111111">
          <Placeholder name="jss-BlogHeader" rendering={props.rendering} />
          <Placeholder name="jss-BlogTagComponent" rendering={props.rendering} />
        </header>
        <Placeholder name="jss-BlogArticle" rendering={props.rendering} />
    </div>
  );
};

export default ContentHolder;
