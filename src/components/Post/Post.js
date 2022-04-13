import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Post.css";
import { Link, Navigate } from "react-router-dom";

class Post extends Component {
  render() {
    return (
      <div>
        <div className="nav__post">
          <Link to="/">
            <button>Browse</button>
          </Link>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const description = this.articleDescription.value;
            const title = this.articleTitle.value;
            this.props.uploadArticle(title, description);
          }}
          className="form__container"
        >
          <div className="title">
            <label>Title : </label>
            {/* <input type="text" required /> */}
            <input
              type="text"
              ref={(input) => {
                this.articleTitle = input;
              }}
              className="form-control"
              placeholder="Article title..."
              required
            />
          </div>
          <div className="desc">
            <label>Description : </label>

            <textarea
              name="Description"
              type="text"
              ref={(input) => {
                this.articleDescription = input;
              }}
              className="form-control"
              required
            ></textarea>
          </div>
          <div className="file">
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .bmp, .gif"
              onChange={this.props.captureFile}
              className="file__input"
            />
          </div>
          <div className="btn__submit">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
