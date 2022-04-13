import Darticle from "../abis/Darticle.json";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import Homepage from "./Homepage/Homepage";
import Post from "./Post/Post";

//Declare IPFS
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    // Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = Darticle.networks[networkId];
    if (networkData) {
      const darticle = new web3.eth.Contract(Darticle.abi, networkData.address);
      this.setState({ darticle });
      const articlesCount = await darticle.methods.articleCount().call();
      this.setState({ articlesCount });
      // Load images
      for (var i = 1; i <= articlesCount; i++) {
        const image = await darticle.methods.articles(i).call();
        this.setState({
          images: [...this.state.images, image],
        });
      }
      // this.setState({
      //   images: this.state.images.sort((a, b) => b.tipAmount - a.tipAmount),
      // });
      this.setState({ loading: false });
    } else {
      window.alert("Darticle contract not deployed to detected network.");
    }
  }
  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log("Buffer", this.state.buffer);
    };
  };

  uploadArticle = (title, description) => {
    console.log("Submitting file to ipfs...");

    ipfs.add(this.state.buffer, (err, result) => {
      console.log("ipfs result", result);
      if (err) {
        console.error(err);
        return;
      }
      this.setState({ loading: true });

      this.state.darticle.methods
        .uploadArticle(result[0].hash, title, description)
        .send({ from: this.state.account })
        .on("transActionHash", (hash) => {
          this.setState({ loading: false });
        });
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      darticle: null,
      images: [],
      loading: true,
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/post"
              element={
                <Post
                  articles={this.state.articles}
                  captureFile={this.captureFile}
                  uploadArticle={this.uploadArticle}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
