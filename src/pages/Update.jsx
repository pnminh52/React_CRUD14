import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Update = ({ products, onUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const onUpdateFinal = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onUpdate(updateData);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <div>
      <form action="" onSubmit={onUpdateFinal}>
        <input
          defaultValue={crtPrd?.name}
          type="text"
          name="name"
          placeholder="name"
          onInput={onChange}
        />
        <input
          defaultValue={crtPrd?.price}
          type="text"
          name="price"
          placeholder="price"
          onInput={onChange}
        />
        <input
          defaultValue={crtPrd?.des}
          type="text"
          name="des"
          placeholder="des"
          onInput={onChange}
        />
        <input
          defaultValue={crtPrd?.img}
          type="text"
          name="img"
          placeholder="img"
          onInput={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
