export default function Rightsection({imageURL,productName,productDescription,learnMore}){
    return(
        <div className="container">
            <div className="row p-5">
                
                
                <div className="col-6 mt-5 p-5">
                       <h1>{productName}</h1>
                       <p>{productDescription}</p>
                       
                       <div>
                       
                       <a style={{marginLeft:"50px"}} href={learnMore}>learn More<i class="fa-solid fa-arrow-right"></i></a>
                       </div>
                      </div> 
                      
                       <div className="col-6 p-0">
                    <img src={imageURL} />
                </div>
                
            </div>
        </div>
    );
}   