const CreateEngine = ({
    engines, handleCreateEngine, createNameEngine, setCreateNameEngine, createHP, setCreateHP, createBrand, setCreateBrand
}) => {
  return (
    <main>
      <h2>Create Engine</h2>
      <form class="form-group" onSubmit={handleCreateEngine}>
        <label class="form-label">Name:</label>
        <input class="form-control" type="text" required value={createNameEngine} onChange={(e) => setCreateNameEngine(e.target.value)}/>

        <label class="form-label">Description:</label>	
        <input class="form-control" type="text" required value={createHP} onChange={(e) => setCreateHP(e.target.value)}/>

        <label class="form-label">Color:</label>	
        <input class="form-control" type="text" required value={createBrand} onChange={(e) => setCreateBrand(e.target.value)}/>
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateEngine;
