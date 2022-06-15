const CreateManufacturer = ({
    handleCreateManufacturer, createNameMan, setCreateNameMan, createFounded, setCreateFounded, createDescriptionMan, setCreateDescriptionMan
}) => {
  return (
    <main>
      <h2>Create Manufacturer</h2>
      <form class="form-group" onSubmit={handleCreateManufacturer}>
        <label class="form-label">Name:</label>
        <input class="form-control" type="text" required value={createNameMan} onChange={(e) => setCreateNameMan(e.target.value)}/>

        <label class="form-label">Founded:</label>	
        <input class="form-control" type="number" required value={createFounded} onChange={(e) => setCreateFounded(e.target.value)}/>

        <label class="form-label">Description:</label>	
        <input class="form-control" type="text" required value={createDescriptionMan} onChange={(e) => setCreateDescriptionMan(e.target.value)} />
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateManufacturer;
