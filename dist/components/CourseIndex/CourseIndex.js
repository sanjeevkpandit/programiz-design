import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CircleProgress from "./CircleProgress";
import { Accordion } from "lib";

const CourseIndex = props => {
  const {
    course: {
      title,
      lessons,
      quiz
    },
    className
  } = props;
  const HeaderComponent = /*#__PURE__*/React.createElement("h4", {
    title: title,
    className: "color-text-main"
  }, title);
  return /*#__PURE__*/React.createElement(Accordion, {
    headerComponent: HeaderComponent,
    className: className
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list list--progress py-6x px-10x"
  }, lessons && lessons.map(lesson => {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames("list__row"),
      key: lesson.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "list__progress-container"
    }, /*#__PURE__*/React.createElement(CircleProgress, {
      percentage: lesson.progressPercentage
    })), /*#__PURE__*/React.createElement("a", {
      href: `/lesson/${lesson.id}/details`,
      className: classNames("list__label truncate", {
        "text-bold": lesson.progress
      }),
      title: lesson.title
    }, lesson.title));
  }), props.course.quiz && /*#__PURE__*/React.createElement("li", {
    className: classNames("list__row"),
    key: quiz.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "list__progress-container"
  }, /*#__PURE__*/React.createElement(CircleProgress, {
    percentage: quiz.progressPercentage
  })), /*#__PURE__*/React.createElement("a", {
    href: `/quiz/${quiz.id}`,
    className: classNames("list__label truncate", {
      "text-bold": quiz.progress
    }),
    title: quiz.title
  }, quiz.title))));
};

CourseIndex.propTypes = {
  /** Course Data */
  course: PropTypes.object,

  /** Extra classes */
  className: PropTypes.string
};
CourseIndex.defaultProps = {
  course: {},
  className: ""
};
export default CourseIndex;