import React, { useState } from "react";
import "./CreateField.css";
import { MultiSelect } from "primereact/multiselect";

function CreateField() {
  const [fieldName, setFieldName] = useState("");
  const [subFieldInputs, setSubFieldInputs] = useState([""]);
  const [selectedTimes, setSelectedTimes] = useState([""]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAddInput = () => {
    setSubFieldInputs([...subFieldInputs, ""]);
  };

  const handleInputChange = (index, event) => {
    const newSubFieldInputs = [...subFieldInputs];
    newSubFieldInputs[index] = event.target.value;
    setSubFieldInputs(newSubFieldInputs);
  };

  const times = [
    { time: "01:00 am", value: "01:00 am" },
    { time: "02:00 am", value: "02:00 am" },
    { time: "03:00 am", value: "03:00 am" },
    { time: "04:00 am", value: "04:00 am" },
    { time: "05:00 am", value: "05:00 am" },
    { time: "06:00 am", value: "06:00 am" },
    { time: "07:00 am", value: "07:00 am" },
    { time: "08:00 am", value: "08:00 am" },
    { time: "09:00 am", value: "09:00 am" },
    { time: "10:00 am", value: "10:00 am" },
    { time: "11:00 am", value: "11:00 am" },
    { time: "12:00 pm", value: "12:00 pm" },
    { time: "01:00 pm", value: "01:00 pm" },
    { time: "02:00 pm", value: "02:00 pm" },
    { time: "03:00 pm", value: "03:00 pm" },
    { time: "04:00 pm", value: "04:00 pm" },
    { time: "05:00 pm", value: "05:00 pm" },
    { time: "06:00 pm", value: "06:00 pm" },
    { time: "07:00 pm", value: "07:00 pm" },
    { time: "08:00 pm", value: "08:00 pm" },
    { time: "09:00 pm", value: "09:00 pm" },
    { time: "10:00 pm", value: "10:00 pm" },
    { time: "11:00 pm", value: "11:00 pm" },
    { time: "12:00 am", value: "12:00 am" },
  ];

  const handleFieldCreate = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    // Build subFields array of objects with SubFieldname property
    const subFields = subFieldInputs
      .filter((name) => name.trim() !== "")
      .map((name) => ({ SubFieldname: name }));

    // Build timeRanges array of objects with availableHours property
    const timeRanges = selectedTimes.map((time) => ({
      availableHours: time,
    }));

    const toGraphQLInput = (arr) => {
      return `[${arr
        .map(
          (obj) =>
            `{${Object.entries(obj)
              .map(([key, val]) => `${key}: "${val}"`)
              .join(", ")}}`
        )
        .join(", ")}]`;
    };

    const subFieldsInput = toGraphQLInput(subFields);
    const timeRangesInput = toGraphQLInput(timeRanges);

    const requestBody = {
      query: `
          mutation {
            createField(fieldInput: {
              fieldName: "${fieldName}",
              subFields: ${subFieldsInput},
              timeRanges: ${timeRangesInput}
            }) {
              fieldName
              subFields { SubFieldname }
              timeRanges { availableHours }
            }
          }
        `,
    };
    try {
      const response = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? "Bearer " + token : "",
        },
      });
      const result = await response.json();

      if (result.errors) {
        console.error(result.errors);
        alert("Field creation failed");
      } else {
        alert("Field added successfully");
        window.location.href = "/field";
      }
    } catch (error) {
      console.error(error);
      alert("Field creation failed");
    }
  };

  return (
    <div className="p-3" id="herodivcrfield">
      <form
        className={` form-signin border border-primary rounded ${
          dropdownOpen ? "expanded" : ""
        }`}
      >
        <h2>Add Field</h2>
        <p>Please enter your credetials!</p>
        <div className="row mb-3">
          <label
            htmlFor="fieldname"
            className="text-nowrap col-sm-2 col-form-label"
          >
            Field Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="fieldname"
              className="form-control"
              id="inputfieldName"
              data-has-listeners="true"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="subfieldname"
            className="text-nowrap col-sm-2 col-form-label"
          >
            Sub-Field Name
          </label>
          <div className="col-sm-10">
            {subFieldInputs.map((input, index) => (
              <div
                style={{ marginTop: ".2rem", marginBottom: ".2rem" }}
                key={index}
              >
                <input
                  type="text"
                  value={input}
                  name="subfieldname"
                  className="form-control "
                  id={`inputSubFieldName${index}`}
                  data-has-listeners="true"
                  onChange={(event) => handleInputChange(index, event)}
                  required
                />
              </div>
            ))}
            <i
              className="fa-regular fa-plus"
              onClick={handleAddInput}
              style={{
                zIndex: "1000",
                position: "absolute",
                right: "auto",
                top: "41vh",
                left: "61vw",
                cursor: "pointer",
              }}
              title="Add Sub-Field"
            ></i>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="time" className="text-nowrap col-sm-2 col-form-label">
            Field Time
          </label>

          <div className="flex card justify-content-center col-sm-10">
            <MultiSelect
              value={selectedTimes || ""}
              onChange={(e) => setSelectedTimes(e.value)}
              options={times}
              optionLabel="time"
              placeholder="Select Time"
              maxSelectedLabels={24}
              className="w-full md:w-20rem "
              onShow={() => setDropdownOpen(true)}
              onHide={() => setDropdownOpen(false)}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${
            dropdownOpen ? "button-margin-collapsed" : ""
          }`}
          style={{ backgroundColor: "#003454" }}
          onClick={handleFieldCreate}
        >
          Add Field
        </button>
        <br />
      </form>
    </div>
  );
}

export default CreateField;
