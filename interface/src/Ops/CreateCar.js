const CreateCar = ({
    cars, handleCreateCar, createName, setCreateName, createDescription, setCreateDescription, createColor, setCreateColor, 
    createEngineId, setCreateEngineId, createManufacturerId, setCreateManufacturerId, createOwnerId, setCreateOwnerId
}) => {
  return (
    <main className="NewPost">
      <h2>Create Car</h2>
      <form class="form-group" onSubmit={handleCreateCar}>
        <label class="form-label">Nome:</label>
        <input class="form-control" type="text" required value={createName} onChange={(e) => setCreateName(e.target.value)}/>

        <label class="form-label">Description:</label>	
        <input class="form-control" type="text" required value={createDescription} onChange={(e) => setCreateDescription(e.target.value)}/>

        <label class="form-label">Color:</label>	
        <input class="form-control form-control-color" type="color" required value={createColor} onChange={(e) => setCreateColor(e.target.value)}/>

        <label class="form-label">EngineId:</label>	
        <input class="form-control" type="text" required value={createEngineId} onChange={(e) => setCreateEngineId(e.target.value)}/>

        <label class="form-label">ManufacturerId:</label>	
        <input class="form-control" type="text" required value={createManufacturerId} onChange={(e) => setCreateManufacturerId(e.target.value)}/>

        <label class="form-label">OwnerId:</label>	
        <input class="form-control" type="text" required value={createOwnerId} onChange={(e) => setCreateOwnerId(e.target.value)}/>
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateCar;
