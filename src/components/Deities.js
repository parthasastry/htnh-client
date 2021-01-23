import React from "react";

const Deities = () => {
  const durga = (
    <div className="card">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1603646315726-5aad1908e00d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
      </div>
      <div className="card-content">Goddess Durga, destroyer of all evil</div>
    </div>
  );

  const lakshmi = (
    <div className="card">
      <div className="card-image">
        <img src=" https://images.unsplash.com/photo-1590228948882-cf73e8efe843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
      </div>
      <div className="card-content">Goddess Lakshmi, goddess of wealth</div>
    </div>
  );

  const shiva = (
    <div className="card">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1566890910598-c5768889e83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
      </div>
      <div className="card-content">Lord Shiva, destroyer of the universe</div>
    </div>
  );

  const ganesha = (
    <div className="card">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1568114775774-886301d445ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
      </div>
      <div className="card-content">Lord Ganesha, remover of all obstacles</div>
    </div>
  );

  const krishna = (
    <div className="card">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1590228947699-5f1fa1d86458?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
      </div>
      <div className="card-content">Lord Krishna, the universal Guru</div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4">{ganesha}</div>
        <div className="col s12 m4">{shiva}</div>
        <div className="col s12 m4">{durga}</div>
      </div>
      <div className="row">
        <div className="col s12 m4">{krishna}</div>
        <div className="col s12 m4">{lakshmi}</div>
        <div className="col s12 m4">{shiva}</div>
      </div>
    </div>
  );
};

export default Deities;
