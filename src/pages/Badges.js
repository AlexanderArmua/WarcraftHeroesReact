import React from "react";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import MiniPageLoading from "../components/MiniPageLoading";
import PageError from "../components/PageError";
import "./styles/Badges.css";

import hero from "../images/Hero.jfif";

import api from "../api";

import { Link } from "react-router-dom";

class Badges extends React.Component {
  // Se sugiere inicializar estado
  constructor(props) {
    console.log("1. Constructor");
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    //this.timeOutId = setTimeout(() => {
    //  // Cambia el state, vuelve a llamar a Render
    //  this.setState({
    //    loading: false,
    //    data: badges.heroes
    //  });
    //}, 1000);

    this.fetchData();

    this.intervaloEjectuando = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervaloEjectuando);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });
    console.log({
      currProps: this.props,
      currState: this.state
    });
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (!!this.state.error) {
      return <PageError error={this.state.error} />;
    }

    console.log("2/4. render");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={hero} alt="Varian Logo" className="Badges_conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Hero
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList heros={this.state.data} />
            </div>
          </div>
          {this.state.loading && <MiniPageLoading />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
