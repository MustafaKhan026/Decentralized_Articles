import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Homepage.css";
import { Link } from "react-router-dom";
// import logoDemo from "./2.PNG"
class Homepage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="nav__bar">
          <div className="logo">
            <h2>Darticle</h2>
          </div>
          <div className="btn">
            <Link to="/post">
              <button>Post</button>
            </Link>
          </div>
        </div>
        <div className="article__display">
          <div className="article__box">
            <div className="title__div">
              <h2>Title </h2>
            </div>
            <div className="img__div">
              <img src="" alt="img" />
            </div>
            <div className="desc__div">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, suscipit accusantium sequi cumque sapiente explicabo
                facere maiores perspiciatis molestiae nisi minima laboriosam!
                Blanditiis repellendus asperiores aperiam sed, sequi provident a
                ut. Est fugiat eius dicta reprehenderit ut enim ad numquam ea
                quos in commodi quis atque porro praesentium non saepe
                recusandae reiciendis impedit ullam tempora, sapiente,
                perferendis accusamus rem illum? Ex aliquam dicta fugiat enim
                ducimus reprehenderit placeat atque dolore tempora beatae quod
                earum, aliquid laboriosam quibusdam qui facere asperiores sunt
                sapiente dolor dolores. Odit molestiae facere laborum eos cum
                quod aut unde quaerat laudantium. Rerum possimus nisi, esse
                perspiciatis blanditiis quia at maiores error officiis minima
                cumque alias a, earum dignissimos eum corrupti voluptatum
                impedit, nostrum magni? Explicabo minima temporibus libero, nemo
                nam dolorum neque voluptatum illum quaerat dolores mollitia
                necessitatibus architecto. Aperiam, facere qui! Ut quas sit
                molestias corporis ex. Molestiae libero est voluptas distinctio
                esse ullam earum tempore nisi explicabo, nesciunt itaque nobis
                labore eos! Nemo tempore adipisci eaque ad officiis dicta
                dolores iste nesciunt dignissimos, repellendus necessitatibus
                maiores consequuntur voluptatem quisquam rem atque voluptates
                eius quos? Distinctio vel explicabo et. Vero fugit sapiente
                molestias quidem aut ullam, nesciunt saepe sunt. At, nam ex.
                Facilis, blanditiis vero!
              </p>
            </div>

            {/* <div className="verify">
                        <button>Verify</button>
                    </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
