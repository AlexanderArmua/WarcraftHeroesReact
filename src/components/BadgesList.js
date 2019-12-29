import React from "react";
import "./styles/BadgesList.css";
import ImagenFaccion from "./ImagenFaccion";

import { Link } from "react-router-dom";

import ListImageHero from "./ListImageHero";

import FilterList from "./FilterList";

function BadgesListItem(props) {
  function getCSSClassFaction(faction) {
    if (faction === "Alliance") {
      return "bg-primary";
    } else if (faction === "Horde") {
      return "bg-danger";
    } else {
      return "bg-secondary";
    }
  }
  return (
    <div
      className={
        "card mb-3 text-white " + getCSSClassFaction(props.hero.faction)
      }
    >
      <div className="BadgeList__Image">
        <ImagenFaccion faction={props.hero.faction} />
      </div>

      <div className="row no-gutters">
        <ListImageHero
          className="col-md-4 BadgeList__Avatar"
          hero={props.hero}
        />
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {props.hero.firstName} {props.hero.lastName} -{" "}
              {props.hero.faction}
            </h5>
            <p className="card-text">{props.hero.whyIsHere}</p>
            <p className="card-text">
              <small>{props.hero.heroClass}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function useSearchHeroes(heroes) {
  const [filterValue, setFilterValue] = React.useState("");
  const [filteredHeroes, setFilteredHeroes] = React.useState(heroes);

  React.useMemo(() => {
    const resultado = heroes.filter(hero => {
      const allString = `${hero.firstName} ${hero.lastName} ${hero.faction} ${hero.heroClass}`;
      return allString.toLowerCase().includes(filterValue.toLowerCase());
    });

    setFilteredHeroes(resultado);
  }, [heroes, filterValue]);

  return { filterValue, setFilterValue, filteredHeroes };
}

function BadgesList(props) {
  const heroes = props.heros;

  const { filterValue, setFilterValue, filteredHeroes } = useSearchHeroes(
    heroes
  );

  if (filteredHeroes.length === 0) {
    return (
      <React.Fragment>
        <FilterList filterValue={filterValue} onChange={setFilterValue} />
        <h3>No hay datos</h3>
        <Link className="btn btn-success" to="/badges/new">
          Create new Hero
        </Link>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <FilterList filterValue={filterValue} onChange={setFilterValue} />
      <ul className="list-unstyled BadgeList">
        {filteredHeroes.map(hero => {
          return (
            <li key={hero.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${hero.id}`}
              >
                <BadgesListItem hero={hero} />
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BadgesList;
