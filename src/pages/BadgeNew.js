import React from "react";

import hero from "../images/Hero.jfif";
import arthas from "../images/Arthas.jpg";

import "./styles/BadgeNew.css";

import Badge from "../components/Badje";

import BadgeForm from "../components/BadgeForm";

import PageLoading from "../components/PageLoading";

import api from "../api";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      heroClass: "",
      faction: "",
      whyIsHere: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero container-fluid">
          <img className="img-fluid" src={hero} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                faction={this.state.form.faction || "Faction"}
                heroClass={this.state.form.heroClass || "Hero Class"}
                whyIsHere={this.state.form.whyIsHere || "Why is Here?"}
              />
            </div>
            <div className="col-6">
              <h1>New Hero</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
