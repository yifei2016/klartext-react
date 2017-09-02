import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Mypage extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div classNameName="">
        <button  type="button" className="btn listButton">List post</button>
        <div className="listPost">
          <ul  className="list-group">
            <li className="list-group-item" >
              <div>sdf</div>
              <textarea
                type="text"
                >
                </textarea>
                <br/>
                <div>dsf</div>
                <textarea
                  type="text"
                  >
                  </textarea>
                  <span>
                    <button  className="editButton"><i className="fa fa-lg fa-pencil-square-o" aria-hidden="true"></i></button>
                  </span>
                  <span>
                    <button  type="button" className="btn deleteButton"><i className="fa fa-lg fa-trash-o" aria-hidden="true"></i></button>
                  </span>
                  <div className="">
                    <button  type="button" className="submitButton">
                      <i className="fa fa-lg fa-paper-plane" aria-hidden="true"></i>
                    </button>
                    <button type="button"
                      className="fa fa-thumbs-up"
                      aria-hidden="true"
                      >
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="pagination">

                </div>
              </div>
            </div>
          )
        }
      }
export default Mypage;
