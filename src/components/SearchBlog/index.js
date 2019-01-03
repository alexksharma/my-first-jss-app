import { DateField, Image, RichText, Text, Link } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';


class SearchBlog extends React.Component {

  constructor() {
    super();
    this.state = {
      myStatevariable: "COnstructor value1",
      //dataSource : "initial data"
    };
    this.updateVarNameMessage = this.updateVarNameMessage.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  updateVarNameMessage() {
    this.setState({
      myStatevariable: "Updated value1"
    });
  }

  componentDidMount() {
    var searchValue = document.getElementById("txtSearch").value;
    var ddlCategory = document.getElementById("ddlCategory");
    var selectedCategoryValue = ddlCategory.options[ddlCategory.selectedIndex].value;

    //var condition =", {name: 'category', value: '${searchValue}'}";
    //var condition = GetSearchValue();
    //, {name: "category", value: "${searchValue}"}]) {

    var query = `{
search(fieldsEqual: [{name: "_fullpath", value: "/sitecore/content/my-first-jss-app/Content/BlogPostCollection/ContentListField/*"}
, {name: "category", value: "${selectedCategoryValue}"}
, {name: "title", value: "${searchValue}"}
]) {
results {
items {
  item {
    id
    name
    path
    url
    ... on BlogPostItemTemplate {
      category {
        value
      }
      title {
        value
      }
      blogtagContentList {
        value
      }
      postDate{value, formattedDateValue}
      abstractText{value}
      postImageSmall{value, alt, src}
      blogpostInternalLink{value, id, url, text}      
    }
  }
}
}
}
}
`

    var endpoint = 'http://my-first-jss-app.dev.local/sitecore/api/graph/mygraphapi?sc_apikey={D259F575-F8E2-452F-8A1B-AB699CC6503C}&query=' + query;

    console.log("endpoint is : " + endpoint);

    //return fetch('http://my-first-jss-app.dev.local/sitecore/api/graph/mygraphapi?sc_apikey=%7BD259F575-F8E2-452F-8A1B-AB699CC6503C%7D&query=%7B%0A%20%20search(fieldsEqual%3A%20%5B%7Bname%3A%20%22_fullpath%22%2C%20value%3A%20%22%2Fsitecore%2Fcontent%2Fmy-first-jss-app%2FContent%2FBlogPostCollection%2FContentListField%2F*%22%7D%0A%20%20%2C%20%7Bname%3A%20%22category%22%2C%20value%3A%20%22design%22%7D%5D)%20%7B%0A%20%20%20%20results%20%7B%0A%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20item%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20path%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20...%20on%20BlogPostItemTemplate%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20category%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20blogtagContentList%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20postDate%7Bvalue%2C%20formattedDateValue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20abstractText%7Bvalue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20postImageSmall%7Bvalue%2C%20alt%2C%20src%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20blogpostInternalLink%7Bvalue%2C%20id%2C%20url%2C%20text%7D%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%22contextItem%22%3A%20%22home%22%7D')
    //return fetch('https://facebook.github.io/react-native/movies.json?q=' + this.props.myVarName)
    return fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log("Search Value is : " + searchValue);
        //console.log("Author name at 0th index: " + responseJson.data.search.results.items[0].item.name);
        //Alert.alert("Author name at 0th index:  " + responseJson.data.search.results.items[0].item.name);
        this.setState({
          //dataSource: responseJson.movies,
          dataSource: responseJson.data.search.results.items,
          isLoading: "How are you"
        }, function () {
          //Alert.alert(dataSource);
          // console.log("Author name at 1th index: " + responseJson.data.search.results.items[1].item.name);
          // console.log("Author name at 2th index: " + dataSource[0].item.name);
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <aside role="aside" class="container blog-post-read-more">
      <br/>
        <div class="row">

          {/* <h1>Hello {this.props.myVarName} !!!!</h1>
          <h1>Hello {this.state.myStatevariable} !!!!</h1> */}
          <hr/>
          <div class="col-sm-12 related-posts-title-holder">
          {/* <span class="related-posts-title text-muted">
          Search By Category : Available categories are - design, laptop, computer.</span> */}
           <br/>
           Category : 
           <select  class="searchControl" id="ddlCategory">
  <option value="*" selected>---- Select All ----</option>
  <option value="Computer" >Computer</option>
  <option value="Design">Design</option>
  <option value="Laptop">Laptop</option>
</select> 
           <br/>
            Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
            <input class="searchControl" id="txtSearch" type="text"></input>
            <br/>
            <button id="btnSearch" width="80px" onClick={this.componentDidMount}>Search</button>
            {/* <h1>Hello {this.state.isLoading} !!!!</h1> */}
          </div>
          <hr/>
        </div>
        <br/>
        <div class="row">
          {this.state.dataSource && this.state.dataSource.map((child, index) => (

            <div class="blog-post-card card col-lg-4 col-md-6" id={`blogPostListItems-${index}`}>
              <img class="card-img-top" src={`http://my-first-jss-app.dev.local${child.item.postImageSmall.src}`} alt={child.item.postImageSmall.alt}></img>
              <div class="card-body bg-light">
                <p>{child.item.id}</p>
                <strong class="d-inline-block mb-2 text-success">{child.item.category.value}</strong>
                <h3 class="card-title">{child.item.title.value}</h3>
                <div class="mb-1 text-muted">
                  {child.item.postDate.formattedDateValue}
                </div>
                <p>{child.item.abstractText.value} </p>
                <a href={child.item.blogpostInternalLink.url} class="btn btn-warning btn-block">{child.item.blogpostInternalLink.text}</a>

              </div>

            </div>

            //  <p>{child.item.abstractText.value}</p>
          ))}

        </div>

      </aside>)
  }
}

export default SearchBlog;