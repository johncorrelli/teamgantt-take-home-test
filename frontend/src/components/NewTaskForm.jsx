import React from "react";

export default function NewTaskForm({ onCreate }) {
  const [name, setName] = React.useState("");
  const formOutlineRef = React.createRef();

  // Initialize MDB input :(
  React.useEffect(() => {
    if (formOutlineRef.current) {
      new window.mdb.Input(formOutlineRef.current).init();
    }
  }, [formOutlineRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, completed: false });
    setName("");
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
          onChange={(e) => setName(e.target.value)}
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
