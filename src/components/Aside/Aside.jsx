import React, { useState } from "react";
import { useFilter } from "../../context/filter-context";
import "./Aside.css";

export function Aside() {
  const {
    filterDispatch,
    filter: {
      sortBy,
      rating,
      sliderValue,
      categoryAction,
      categorySports,
      categoryRPG,
    },
  } = useFilter();
  const [filterMobile, setFilterMobile] = useState(false);
  const [sortMobile, setSortMobile] = useState(false);
  return (
    <>
      <aside>
        <span className="filter-title">
          <h2>Filters</h2>
          <button
            onClick={() => filterDispatch({ type: "RESET" })}
            className="btn btn-text-secondary"
          >
            clear
          </button>
        </span>
        <h2>Price</h2>
        <div className="slider-container">
          <p className="slider_value">Rs.0</p>
          <input
            type="range"
            min={500}
            max={3500}
            step={100}
            value={sliderValue}
            onChange={(e) =>
              filterDispatch({
                type: "SLIDER",
                payload: Number(e.target.value),
              })
            }
            className="slider"
          />
          <p className="slider_value">Rs.{sliderValue}</p>
        </div>
        <h2>Category</h2>
        <span>
          <input
            type="checkbox"
            checked={categoryAction}
            onChange={() => filterDispatch({ type: "ACTION" })}
          />
          <label htmlFor="Action">Action</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={categoryRPG}
            onChange={() => filterDispatch({ type: "RPG" })}
          />
          <label htmlFor="RPG">RPG</label>
        </span>

        <span>
          <input
            type="checkbox"
            checked={categorySports}
            onChange={() => filterDispatch({ type: "SPORTS" })}
          />
          <label htmlFor="sports">Sports</label>
        </span>

        <h2>Rating</h2>
        <span>
          <input
            type="radio"
            checked={rating && rating === "FOUR_STAR"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: "FOUR_STAR" })
            }
            name="star"
          />
          <label htmlFor="4star">4 Stars & above</label>
        </span>
        <span>
          <input
            type="radio"
            checked={rating && rating === "THREE_STAR"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: "THREE_STAR" })
            }
            name="star"
          />
          <label htmlFor="3star">3 Stars & above</label>
        </span>
        <span>
          <input
            type="radio"
            checked={rating && rating === "TWO_STAR"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: "TWO_STAR" })
            }
            name="star"
          />
          <label htmlFor="2star">2 Stars & above</label>
        </span>
        <span>
          <input
            type="radio"
            checked={rating && rating === "ONE_STAR"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: "ONE_STAR" })
            }
            name="star"
          />
          <label htmlFor="1star">1 Star & above</label>
        </span>

        <h2>Sort by</h2>
        <span>
          <input
            type="radio"
            checked={sortBy && sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
            }
            name="sort"
          />
          <label htmlFor="HIGH_TO_LOW">High to Low</label>
        </span>
        <span>
          <input
            type="radio"
            checked={sortBy && sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
            }
            name="sort"
          />
          <label htmlFor="LtoH">Low to High</label>
        </span>
      </aside>

      {/* mobile layout */}
      {filterMobile ? (
        <div className="filter-layout-mob">
          <span className="filter-title">
            <h2>Filters</h2>
            <button
              onClick={() => filterDispatch({ type: "RESET" })}
              className="btn btn-text-secondary"
            >
              clear
            </button>{" "}
          </span>
          <h2>Price</h2>
          <div className="slider-container">
            <p className="slider_value">Rs.0</p>
            <input
              type="range"
              min={500}
              max={3500}
              step={100}
              value={sliderValue}
              onChange={(e) =>
                filterDispatch({
                  type: "SLIDER",
                  payload: Number(e.target.value),
                })
              }
              className="slider"
            />
            <p className="slider_value">Rs.{sliderValue}</p>
          </div>
          <h2>Category</h2>
          <span>
            <input
              type="checkbox"
              checked={categoryAction}
              onChange={() => filterDispatch({ type: "ACTION" })}
            />
            <label htmlFor="Action">Action</label>
          </span>
          <span>
            <input
              type="checkbox"
              checked={categorySports}
              onChange={() => filterDispatch({ type: "SPORTS" })}
            />
            <label htmlFor="Sports">Sports</label>
          </span>

          <span>
            <input
              type="checkbox"
              checked={categoryRPG}
              onChange={() => filterDispatch({ type: "RPG" })}
            />
            <label htmlFor="RPG">RPG</label>
          </span>

          <h2>Rating</h2>
          <span>
            <input
              type="radio"
              checked={rating && rating === "FOUR_STAR"}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: "FOUR_STAR" })
              }
              name="star"
            />
            <label htmlFor="4star">4 Stars & above</label>
          </span>
          <span>
            <input
              type="radio"
              checked={rating && rating === "THREE_STAR"}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: "THREE_STAR" })
              }
              name="star"
            />
            <label htmlFor="3star">3 Stars & above</label>
          </span>
          <span>
            <input
              type="radio"
              checked={rating && rating === "TWO_STAR"}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: "TWO_STAR" })
              }
              name="star"
            />
            <label htmlFor="2star">2 Stars & above</label>
          </span>
          <span>
            <input
              type="radio"
              checked={rating && rating === "ONE_STAR"}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: "ONE_STAR" })
              }
              name="star"
            />
            <label htmlFor="1star">1 Star & above</label>
          </span>
        </div>
      ) : (
        ""
      )}
      {sortMobile ? (
        <div className="sort-layout-mob">
          <span className="filter-title">
            <h2>Sort by</h2>
            <button
              onClick={() => filterDispatch({ type: "RESET" })}
              className="btn btn-text-secondary"
            >
              clear
            </button>
          </span>

          <span>
            <input
              type="radio"
              checked={sortBy && sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
              name="sort"
            />
            <label htmlFor="HIGH_TO_LOW">High to Low</label>
          </span>
          <span>
            <input
              type="radio"
              checked={sortBy && sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
              }
              name="sort"
            />
            <label htmlFor="LtoH">Low to High</label>
          </span>
        </div>
      ) : (
        ""
      )}

      <div className="filter-buttons">
        <button
          id="sort-btn"
          onClick={() => {
            setSortMobile(!sortMobile), setFilterMobile(false);
          }}
          className="btn btn-icon"
        >
          <i className="fas fa-sort"></i> Sort
        </button>
        <button
          id="filter-btn"
          onClick={() => {
            setFilterMobile(!filterMobile), setSortMobile(false);
          }}
          className="btn btn-icon"
        >
          <i className="fas fa-filter"></i> Filter
        </button>
      </div>
    </>
  );
}
