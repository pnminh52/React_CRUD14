import React from "react";

const Add = (props) => {
  const { errors, onAdd, onChange } = props;
  const errD = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [er1, er2, er3, er4] = errD;
  return (
    <div>
      <form action="" onSubmit={onAdd}>
        <input type="text" name="name" placeholder="name" onInput={onChange} />
        <span>{er1?.name}</span>
        <input
          type="text"
          name="price"
          placeholder="price"
          onInput={onChange}
        />
        <span>{er2?.price}</span>
        <input type="text" name="des" placeholder="des" onInput={onChange} />
        <span>{er3?.des}</span>
        <input type="text" name="img" placeholder="img" onInput={onChange} />
        <span>{er4?.img}</span>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Add;
