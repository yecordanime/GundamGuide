import "./App.css";

function Show(params) {
  return (
    <div className="showContainer">
      <h3 className="title">{params.data.name}</h3> 
      <h5 className="subtitle">Released in {params.data.year} - {params.data.format}</h5> 
      <h5 className="subtitle">{params.data.timeline} {params.data.timelineYear}</h5> 
      <p>{params.data.description}</p> 
    </div>
  );
}

export default Show;
