import React from "react";
import ApiService from "./ApiService";
import {useCookies} from 'react-cookie';

const ArticleList = (props) => {

  const [token] = useCookies(['mytoken'])

  const editBtn = (article) => {
    props.editBtn(article)
  }

  const deleteBtn = (article) => {
    ApiService.DeleteArticle(article.id,token['mytoken'])
    .then(()=> props.deleteBtn(article))
    .catch(error => console.log(error))
  }

  return (
    <div>
      {props.articles && props.articles.map(article =>{
                return(
                    <div key={article.id}>
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>

                        <div className="row">
                            <div className="col-md-1">
                                <button className="btn btn-primary" onClick={()=>editBtn(article)}>Update</button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-danger" onClick={()=>deleteBtn(article)}>Delete</button>
                            </div>
                        </div>
                        <hr className="post_line" />
                    </div>
                )
            })}
    </div>
  );
};

export default ArticleList;
