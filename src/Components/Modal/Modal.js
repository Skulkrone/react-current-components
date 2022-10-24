import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modale</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                facilis ipsa dolorum possimus quam quisquam iste. Excepturi, quo
                recusandae accusantium explicabo, at debitis odit nisi eius
                possimus eligendi minima blanditiis quae, velit facere
                voluptatem quasi laboriosam quibusdam non labore eos! Voluptas,
                natus. Dolorum placeat mollitia provident eaque, aperiam libero
                doloremque.
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
