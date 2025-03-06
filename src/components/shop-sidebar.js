import React from 'react';
import "../pages/styles/shop-sidebar-style.css"
import { useEffect, useState } from 'react';

const ShopSidebar = ({
  categoryFilter,
  setCategoryFilter,
  priceFilter,
  setPriceFilter,
  isFilterActive,
  handleAllTabClick,
  handleFilterTabClick,
  setIsFilterActive,
  setIsSidebarActive,
  setFactive,
  Factive
}) => {

  const [isMobile, setIsMobile] = useState(false);


  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.sidebar') && isFilterActive) {
          setIsFilterActive(false);
          setFactive(true);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMobile, isFilterActive, setIsFilterActive]);

  return (
    <>
      <div className={` side-overlay ${isFilterActive ? 'active' : ''}`} onClick={() => setIsSidebarActive(false)}></div>
      <aside className={`sidebar shop-styling ${isFilterActive ? 'active' : ''}`}>
        <div className={`container ${isFilterActive ? 'active' : ''}`}>
          <div className="tabs">
            <input
              type="radio"
              id="radio-1"
              name="tabs"
              onClick={handleAllTabClick}
              checked={!isFilterActive}
            />
            <label className="tab" htmlFor="radio-1">All</label>
            <input
              type="radio"
              id="radio-2"
              name="tabs"
              onClick={handleFilterTabClick}
              checked={isFilterActive}
            />
            <label className={`tab ${Factive ? 'f-active' : ''}`} htmlFor="radio-2">Filter</label>
            <span className={`glider ${Factive ? 'f-active' : ''}`}></span>
          </div>
          <div className={`filters ${isFilterActive ? 'active' : ''}`}>
            <div className={!isFilterActive ? 'filter-disabled' : ''}>
              <h3>Categories</h3>
              <div className="radio-input">
                <label className="label">
                  <input
                    type="radio"
                    id="value-1"
                    checked={categoryFilter === "Concept Art"}
                    onChange={() => setCategoryFilter("Concept Art")}
                    name="group-1"
                    value="value-1"
                    disabled={!isFilterActive}
                  />
                  <p className="text">Concept Art</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-2"
                    checked={categoryFilter === "Digital Painting"}
                    onChange={() => setCategoryFilter("Digital Painting")}
                    name="group-1"
                    value="value-2"
                    disabled={!isFilterActive}
                  />
                  <p className="text">Digital Painting</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-3"
                    checked={categoryFilter === "Character Design"}
                    onChange={() => setCategoryFilter("Character Design")}
                    name="group-1"
                    value="value-3"
                    disabled={!isFilterActive}
                  />
                  <p className="text">Character Design</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-4"
                    checked={categoryFilter === "Environment Design"}
                    onChange={() => setCategoryFilter("Environment Design")}
                    name="group-1"
                    value="value-4"
                    disabled={!isFilterActive}
                  />
                  <p className="text">Environment Design</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-5"
                    checked={categoryFilter === "Fantasy Art"}
                    onChange={() => setCategoryFilter("Fantasy Art")}
                    name="group-1"
                    value="value-5"
                    disabled={!isFilterActive}
                  />
                  <p className="text">Fantasy Art</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-6"
                    checked={categoryFilter === "Sketch Art"}
                    onChange={() => setCategoryFilter("Sketch Art")}
                    name="group-1"
                    value="value-6"
                    disabled={!isFilterActive}
                  />
                  <p className="text">Sketch Art</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-7"
                    checked={categoryFilter === "Game Art"}
                    onChange={() => setCategoryFilter("Game Art")}
                    name="group-1"
                    value="value-7"
                    disabled={!isFilterActive}
                  />
                  <p className="text">Game Art</p>
                </label>

              </div>
            </div>

            <div id="price-range" className={!isFilterActive ? 'filter-disabled' : ''}>
              <h3>Price Range</h3>
              <div className="radio-input">
                <label className="label">
                  <input
                    type="radio"
                    id="value-1"
                    checked={priceFilter === "$0 - $100"}
                    onChange={() => setPriceFilter("$0 - $100")}
                    name="group-2"
                    value="value-1"
                    disabled={!isFilterActive}
                  />
                  <p className="text">$0 - $100</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-2"
                    checked={priceFilter === "$100 - $500"}
                    onChange={() => setPriceFilter("$100 - $500")}
                    name="group-2"
                    value="value-2"
                    disabled={!isFilterActive}
                  />
                  <p className="text">$100 - $500</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-3"
                    checked={priceFilter === "$500 - $1,000"}
                    onChange={() => setPriceFilter("$500 - $1,000")}
                    name="group-2"
                    value="value-3"
                    disabled={!isFilterActive}
                  />
                  <p className="text">$500 - $1,000</p>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    id="value-4"
                    checked={priceFilter === "$1,000 - $5,000"}
                    onChange={() => setPriceFilter("$1,000 - $5,000")}
                    name="group-2"
                    value="value-4"
                    disabled={!isFilterActive}
                  />
                  <p className="text">$1,000 - $5,000</p>
                </label>
              </div>
            </div>
            <button
              className={!isFilterActive ? 'clr filter-disabled' : 'clr'}
              onClick={() => { setCategoryFilter("All"); setPriceFilter("All"); }}
              disabled={!isFilterActive}
            >
              Clear Filters
            </button>
          </div>
        </div>

      </aside>

    </>
  );
};

export default ShopSidebar;
