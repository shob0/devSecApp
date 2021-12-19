import React, { useEffect, useState } from 'react';

export default function Card(props) {
     return (
         <div className="col">
             <div className="card">
                <img className="card-img-top" src={props.user.avatar} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{props.user.first_name} {props.user.last_name}</h5>
                  <p className="card-text"><small className="text-muted">{props.user.email}</small></p>
                </div>
            </div>
        </div>
        );
}