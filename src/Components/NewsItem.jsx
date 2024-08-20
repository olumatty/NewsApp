const NewsItems = ({Title, Description, src, url}) => {
    return (  
        <div className="card bg-dark text-light d-inline-block mb-3 my-4 mx-4 px-2 py-2 " style={{maxWidth:"345px"}}>
        <img src={src} style={{height:"200px", width:"330px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{Title.slice(0,50)}</h5>
          <p className="card-text">{Description ? Description.slice(0,90): "New is Loading"}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    );
}
 
export default NewsItems;