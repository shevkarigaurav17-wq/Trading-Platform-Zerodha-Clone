export default function Leftsection({imageURL,productName,productDescription,tryDemo,learnMore,googleplay,appStore}){
    return(
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-6 ">
                    <img src={imageURL} />
                </div>
                
                <div className="col-6 mt-2 p-5">
                       <h1>{productName}</h1>
                       <p>{productDescription}</p>
                       <div>
                       <a  href={tryDemo}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                       <a style={{marginLeft:"20px"}} className="p-3 mb-2" href={learnMore}>learn More<i class="fa-solid fa-arrow-right"></i></a>
                       </div>
                       <div className="mt-3">
                       <a href={googleplay}><img src="media/images/googlePlayBadge.svg" /></a>
                       <a  style={{marginLeft:"50px"}} href={appStore}><img src="media/images/appstoreBadge.svg"/></a>
                       </div>
                </div>
            </div>
        </div>
    )
}