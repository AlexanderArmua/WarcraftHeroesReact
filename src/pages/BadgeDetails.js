import React from "react";
import heroBanner from "../images/Hero.jfif";
import "./styles/BadgeDetails.css";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import Badge from "../components/Badje";

function useIncreaseCount(maxNumber) {
  const [count, setCount] = React.useState(0);

  if (count > maxNumber) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails(props) {
  // State, setState = (optional init)
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useIncreaseCount(15);

  const hero = props.hero;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={heroBanner} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {hero.firstName} {hero.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={hero.firstName}
              lastName={hero.lastName}
              faction={hero.faction}
              heroClass={hero.heroClass}
              whyIsHere={hero.whyIsHere}
              avatar={hero.avatar}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-info btn-block mb-4"
                >
                  Increase Count {count}
                </button>

                <Link
                  className="btn btn-primary mb-4 btn-block"
                  to={`/badges/edit/${hero.id}`}
                >
                  Edit Hero
                </Link>
              </div>
              <div>
                <button
                  onClick={props.onOpenModal}
                  className="btn btn-danger btn-block"
                >
                  Delete Hero
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
