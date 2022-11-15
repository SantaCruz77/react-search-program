import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ProgramList = ({ searchs }) => {
  const renderSearchs = (searchArray) => {

    return searchArray.map((program) => (
      <li key={program.id}>
        <Link to={`/searchs/${program.id}`}>
          {program.title}
        </Link>
      </li>
    ));
  };

  return (
    <section className="programList">
      <h2>Channels</h2>
      <ul>{renderSearchs(searchs)}</ul>
    </section>
  );
};

ProgramList.propTypes = {
  searchs: PropTypes.arrayOf(PropTypes.shape({
    ch_logo: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  })).isRequired,
};

export default ProgramList;