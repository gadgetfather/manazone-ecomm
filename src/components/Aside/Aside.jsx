import React from "react";
import "./Aside.css";
export function Aside() {
  return (
    <>
      <aside>
        <span className="filter-title">
          <h2>Filters</h2>
          <button className="btn btn-text-secondary"> clear</button>
        </span>
        <h2>Price</h2>
        <input type="range" className="slider" />
        <h2>Category</h2>
        <span>
          <input type="checkbox" />
          <label htmlFor="Action">Action</label>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="Adventure">Adventure</label>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="Online">Online</label>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="Horror">Horror</label>
        </span>

        <h2>Rating</h2>
        <span>
          <input type="radio" name="star" />
          <label htmlFor="4star">4 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="star" />
          <label htmlFor="3star">3 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="star" />
          <label htmlFor="2star">2 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="star" />
          <label htmlFor="1star">1 Star & above</label>
        </span>

        <h2>Sort by</h2>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="HtoL">High to Low</label>
        </span>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="LtoH">Low to High</label>
        </span>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="NtoO">New to Old</label>
        </span>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="OtoN">Old to New</label>
        </span>
      </aside>

      <div className="filter-layout-mob">
        <span className="filter-title">
          <h2>Filters</h2>
          <button className="btn btn-text-secondary"> clear</button>
        </span>
        <h2>Price</h2>
        <input type="range" className="slider" />
        <h2>Category</h2>
        <span>
          <input type="checkbox" />
          <label htmlFor="Action">Action</label>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="Adventure">Adventure</label>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="Online">Online</label>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="Horror">Horror</label>
        </span>

        <h2>Rating</h2>
        <span>
          <input type="radio" name="4star" />
          <label htmlFor="4star">4 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" />
          <label htmlFor="3star">3 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" />
          <label htmlFor="2star">2 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" />
          <label htmlFor="1star">1 Star & above</label>
        </span>
      </div>

      <div className="sort-layout-mob">
        <h2>Sort by</h2>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="HtoL">High to Low</label>
        </span>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="LtoH">Low to High</label>
        </span>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="NtoO">New to Old</label>
        </span>
        <span>
          <input type="radio" name="sort" />
          <label htmlFor="OtoN">Old to New</label>
        </span>
      </div>

      <div className="filter-buttons">
        <button id="sort-btn" className="btn btn-icon">
          <i className="fas fa-sort"></i> Sort
        </button>
        <button id="filter-btn" className="btn btn-icon">
          <i className="fas fa-filter"></i> Filter
        </button>
      </div>
    </>
  );
}
