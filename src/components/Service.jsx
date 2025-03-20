

const Service = ({service, titles, texts, image}) => {
    return (
        <>
            <div className={`service-container-grid ${service}`} id={service.replace(/\s+/g, "").replace("&", "").toLowerCase()}>
                <div className="service-image-container-s">
                    <img src={image}/>
                </div>
                <div className="service-text-container-s" >
                    <div className="service-title-s">{service}</div>
                    {titles.map((title, index) => (
                        <div key={index} className="service-detail-s">
                            <p className="service-detail-title-s">{title}</p>
                            <p>{texts[index]}</p>
                        </div>
                        
                    ))}
                </div>
                
            </div>
            <div className="color-seperator-s"></div>
        </>
    )
}

export default Service