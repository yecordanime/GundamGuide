
function Options(params) {
  return (
    <div >
&emsp; Tomino Puritan Mode: <input type="checkbox" defaultChecked={params.tomino} onChange={()=> {params.setTomino(!params.tomino)}}></input>
&emsp; Timeline: <select name="cars" id="cars">
                    <option value="All">All</option>
                    <option value="Universal Century">Universal Century</option>
                    <option value="AD">AD (00 Gundam)</option>
                    <option value="Celestial Era">Celestial Era (SEED)</option>
                </select>
&emsp; Search: <input onChange={ (e) => params.setFilter(e.target.value)}></input>
    </div>
  );
}

export default Options;
