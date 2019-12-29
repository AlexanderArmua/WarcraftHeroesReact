import React from "react";

class BadgeForm extends React.Component {
  //state = {};

  handleClick = e => {
    console.log("Se clickeo algo");
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Se hizo submit");
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="heroClass">Hero Class</label>
            <select
              name="heroClass"
              id="heroClass"
              onChange={this.props.onChange}
              className="form-control"
              value={this.props.formValues.heroClass}
            >
              <option value=""></option>
              <option value="Warrior">Warrior</option>
              <option value="Death King">Death King</option>
              <option value="Monk">Monk</option>
              <option value="Rogue">Rogue</option>
              <option value="Mague">Mague</option>
              <option value="Hunter">Hunter</option>
              <option value="Chaman">Chaman</option>
              <option value="Paladin">Paladin</option>
              <option value="Demon Hunter">Demon Hunter</option>
              <option value="Priest">Priest</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="faction">Faction</label>
            <select
              name="faction"
              id="faction"
              onChange={this.props.onChange}
              className="form-control"
              value={this.props.formValues.faction}
            >
              <option value=""></option>
              <option value="Alliance">Alliance</option>
              <option value="Horde">Horde</option>
              <option value="Neutral">Neutral</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="whyIsHere">Why is Here</label>
            <textarea
              onChange={this.props.onChange}
              type="text"
              id="whyIsHere"
              name="whyIsHere"
              className="form-control"
              value={this.props.formValues.whyIsHere}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        {!!this.props.error && (
          <div class="alert alert-danger" role="alert">
            {this.props.error.message}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default BadgeForm;
