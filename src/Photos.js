import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        console.log(props.photos.photos);
    return (
        <section className="Photos">
            <div className="row">
                {props.photos.photos.map(function(photo, index){
                    return (
                        <div className="col-md-4 col-sm-6 col-xs-6" key={index}>
                            <a href={photo.src.original} target="_blank" rel="noreferrer"><img src={photo.src.landscape} className="img-fluid" alt={props.photos.alt} /></a>
                        </div>
                    )
                })}
            </div>
        </section>
    );
    } else {
        return null;
    }
}

