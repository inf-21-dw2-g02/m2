const CreateCar = ({
    handleCreateOwner, createNameOwn, setCreateNameOwn, createAge, setCreateAge, createSex, setCreateSex
}) => {
  return (
    <main>
      <h2>Create Owner</h2>
      <form class="form-group" onSubmit={handleCreateOwner}>
        <label class="form-label">Name:</label>
        <input class="form-control" type="text" required value={createNameOwn} onChange={(e) => setCreateNameOwn(e.target.value)}/>

        <label class="form-label">Age:</label>	
        <input class="form-control" type="number" required value={createAge} onChange={(e) => setCreateAge(e.target.value)}/>

        <label class="form-label">Sex:</label>	
        <select class="form-control" required value={createSex} onChange={(e) => setCreateSex(e.target.value)}>
          <option selected hidden>Select an option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateCar;
