import React from "react";
import { Link } from "react-router-dom";

import { NewsItem, AddNewsModal } from "../_components";
import { accountService } from "../_services";

function Archive({ match }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [image, setImage] = React.useState({ preview: "", raw: "" });

  const items = [
    {
      title: `Bar worker: 'I've lost hundreds of pounds in tips during lockdowns`,
      text: `Hospitality businesses have been hit hard by lockdowns and restrictions caused by Covid-19. But what’s it been like for the workers on the front line of an industry dependent on people socialising? Bartender Barney Burns, who works at a hotel restaurant`,
    },
    {
      title: `Spain PM tests negative for Covid`,
      text: `Spain's Prime Minister Pedro Sánchez has tested negative for Covid-19, the Spanish government says. Sánchez is in self-isolation because of his recent contact with French President Emmanuel Macron who had a positive test. The Spanish PM will remain in quarantine until 24 December, his office said.`,
    },
  ];

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-start">
      <h1 className="mb-4">Here is list of your saved news:</h1>
      <div className="d-flex justify-content-between align-items-center">
        <div onClick={() => setModalShow(true)} className="btn d-flex p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          <p>Add new</p>
        </div>
        <label htmlFor="upload-button">
          <div className="btn d-flex p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-file-earmark-arrow-up"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
              <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
              <path
                fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 7.707V11.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
            <p className="pl-1">Upload .csv file</p>
          </div>
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          accept=".csv"
          onChange={handleChange}
        />
      </div>
      {items.map((value, index) => {
        return <NewsItem title={value.title} text={value.text} />;
      })}
      <AddNewsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></AddNewsModal>
    </div>
  );
}

export { Archive };
