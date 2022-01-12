import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
  state = {
    type: this.props.line.type,
    value: this.props.line.value,
  };

  style = {
    align: "middle",
  };

  information = {
    about:
      "senior high school student into crypto and web3. co-founder of metapass, an on-chain ticketing platform.",
    education: "self taught fullstack developer. buildspace alumni.",
    projects: [
      {
        projectName: "Metapass",
        liveDemo: "https://metapasshq.xyz",
        linkToGithub: "https://github.com/metapass",
      },
      {
        projectName: "Go ETH Me",
        liveDemo: "https://go-eth-me.vercel.app",
        linkToGithub: "https://go-eth-me.vercel.app",
      },
      {
        projectName: "Cryptseed",
        liveDemo: "https://cryptseed.ml",
        linkToGithub: "https://github.com/dawksh/cryptseed",
      },
    ],
    social: [
      {
        platform: "Github",
        link: "https://github.com/dakwsh",
      },

      {
        platform: "Twitter",
        link: "https://twitter.com/0xDak",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <p className="prompt"> {this.props.line.value} </p>
        {this.handelCd()}
      </React.Fragment>
    );
  }

  handelCd = () => {
    const navigation = this.state.value.split(" ")[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      if (lower === "about") {
        return <p className="result">{this.information.about}</p>;
      } else if (lower === "education") {
        return <p className="result">{this.information.education}</p>;
      } else if (lower === "education") {
      } else if (lower === "projects" || lower === "project") {
        return (
          <React.Fragment>
            {this.information.projects.map((everyProject) => {
              return (
                <p className="result">
                  {everyProject.projectName}
                  <a href={everyProject.liveDemo} target="_blank">
                    Live Link
                  </a>
                  <a href={everyProject.linkToGithub} target="_blank">
                    <img src={githubLogo} alt="GithubLink to Code" />
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (
        lower === "socials" ||
        lower === "social" ||
        lower === "contact me" ||
        lower === "contactme" ||
        lower === "contact_me"
      ) {
        return (
          <React.Fragment>
            {this.information.social.map((everySocial) => {
              return (
                <p className="result">
                  <a href={everySocial.link} target="_blank">
                    {everySocial.platform}
                  </a>
                  <a href="https://github.com/shloksomani" target="_blank">
                    <img src={githubLogo} alt="GithubLink to Code" />
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else {
        return <p className="result">Opps wrong input</p>;
      }
    } else {
      return <p className="result">Opps wrong input</p>;
    }
  };
}

export default Cat;
