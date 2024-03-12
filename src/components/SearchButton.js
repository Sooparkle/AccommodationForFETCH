import React, { useState, useEffect, useRef } from "react";
import BookingCalendar from "./BookingCalender";

export const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keywordValue, setKeywordValue] = useState();

  const keywordRef = useRef();

  console.log("Ref", keywordRef.current);

  const togglePopup = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent body scrolling
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    // Cleanup function to prevent memory leaks
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array for cleanup on unmount

  const popupClass = isOpen ? "popup open" : "popup";

  const handleSubmitDetail = () => {
    setKeywordValue(keywordRef.current.value);
  };

  return (
    <>
      <button 
        onClick={()=>togglePopup()}
        className="search-detail-act-btn"
        >
          Search
      </button>

      <div className={popupClass}>

        <button 
          onClick={togglePopup}
          className="search-detail-btn"
        >
          Close
        </button>
        <div className="search-detail-form-wrap">
          <form
            onSubmit={() => handleSubmitDetail()}
            className="search-detail-form"
          >
            <input
              value={keywordValue}
              onChange={(e) => setKeywordValue(e.target.value)}
              ref={keywordRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmitDetail(e);
                }
              }}
            />
          </form>
          <BookingCalendar />
        </div>
        {/* Your popup content here */}
      </div>
    </>
  );
};
