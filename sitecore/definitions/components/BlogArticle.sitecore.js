// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

/**
 * Adds the BlogArticle component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'BlogArticle',
    icon: SitecoreIcon.DocumentTag,
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
      { name: 'blogArticleList', type: CommonFieldTypes.ContentList,
      source: `dataSource=/sitecore/content/${
        packageJson.config.appName
      }/Content/BlogPostCollection/ContentListField`, }, 
      // { name: 'tags', type: CommonFieldTypes.SingleLineText },                              
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  //  placeholders: ['jss-BlogArticle'],
  });
}
