import React from "react";

export default function NewTaskForm({ onSubmit }) {
  const [name, setName] = React.useState("");
  const formOutlineRef = React.createRef();

  React.useEffect(() => {
    if (formOutlineRef.current) {
      new window.mdb.Input(formOutlineRef.current).init();
    }
  }, [formOutlineRef]);

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit({ name, completed: false });
    setName("");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill" ref={formOutlineRef}>
        <input
          autoComplete="off"
          type="text"
          id="form3"
          className="form-control form-control-lg"
          value={name}
          onChange={onChangeName}
        />
        <label className="form-label" htmlFor="form3">
          Create a task
        </label>
      </div>
      <button type="submit" className="btn btn-lg btn-primary ms-2">
        Add
      </button>
    </form>
  );
}
