import React from "react";
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";

const Program = ({ searchs }) => {
  const { id } = useParams();
  const program = searchs.find((e) => e.id === Number(id));

  return (
    <div className="programContainer">
      <h2>
        {program.title}
      </h2>
      <ul>
        <li>
          <strong>Ch_logo:</strong> {program.ch_logo}
        </li>
        <li>
          <strong>Start_time:</strong> {program.start_time}
        </li>
        <li>
          <strong>End_time:</strong> {program.end_time}
        </li>
        <li>
          <strong>Title:</strong> {program.title}
        </li>
        <li>
          <strong>Subtitle:</strong> {program.subtitle}
        </li>
      </ul>

      <button type="button" onClick="history.back()">戻る</button>


    </div>

  );
 };

 Program.propTypes = {
  searchs: PropTypes.arrayOf(PropTypes.shape({
    ch_logo: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  })
  ).isRequired,
};

export default Program;