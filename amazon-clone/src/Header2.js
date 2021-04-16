import React from "react";
import "./Header2.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

function HeaderTwo() {
  return (
    <div className="header__two">
      <LocationOnOutlinedIcon className="header2__locationIcon" />

      <div className="header2__nav">
        <div className="header2__option">
          <span className="header2__optionOne">Deliver to</span>
          <span className="header2__optionTwo">Gujarat, India</span>
        </div>

        <div className="header2__option__one">
          <span className="header2__option__one__two">Today's Deals</span>
          <span className="header2__option__one__two">Customer Service</span>
          <span className="header2__option__one__two">Gift Cards</span>
          <span className="header2__option__one__two">Registry</span>
          <span className="header2__option__one__two">Sell</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;