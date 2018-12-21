// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';
/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addTemplate({
    name: 'BlogPost-Item-Template',
    fields: [
      { name: 'category', type: CommonFieldTypes.SingleLineText },
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'postDate', type: CommonFieldTypes.Date },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'postImage', type: CommonFieldTypes.Image },
      { name: 'blogtagContentList', type: CommonFieldTypes.ContentList,
      source: `dataSource=/sitecore/content/${
        packageJson.config.appName
      }/Content/Tags/ContentListField`, }, 
      { name: 'abstractText', type: CommonFieldTypes.RichText },
      { name: 'postImageSmall', type: CommonFieldTypes.Image },
      { name: 'blogpostInternalLink', type: CommonFieldTypes.GeneralLink },
      // { name: 'tags', type: CommonFieldTypes.SingleLineText },                              
    ],
    
  });
}
