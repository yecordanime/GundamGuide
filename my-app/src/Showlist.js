import Show from "./Show";
import "./App.css"
function Showlist(params) {
  return (
    <div className="showList" >
      {params.data.filter(data => data.searchName.toLowerCase().includes(params.filter.toLowerCase())).map((i) => (params.tomino == false || (params.tomino && i.tomino )) === true ? <Show key={i.name} data={i}></Show> : "")}
    </div>
  );
}

export default Showlist;
