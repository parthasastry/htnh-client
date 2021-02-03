import React from "react";
import ganesh_image from "../img/ganesh.jpg";
import krishna_image from "../img/krishna.jpg";
import shiva_image from "../img/shivalinga.jpg";
import shiva_parvathi_image from "../img/shiva_parvathi.jpg";
import navagraha_image from "../img/navagraha.jpg";
import shanmukha_image from "../img/shanmukha.jpg";
import vishnu_image from "../img/vishnu.jpg";
import ram_image from "../img/ram.jpg";
import chandrashekara_saraswathi_image from "../img/chandrashekara_saraswathi.jpg";

const Deities = () => {
  const shiva_parvathi = (
    <div className="card">
      <div className="card-image">
        <img src={shiva_parvathi_image} alt="ShivaParvathi" />
      </div>
      <div className="card-content">
        Shiva and Parvathi, Purusha and Prakriti
      </div>
    </div>
  );

  const navagraha = (
    <div className="card">
      <div className="card-image">
        <img src={navagraha_image} alt="Navagraha" />
      </div>
      <div className="card-content">The nine grahas</div>
    </div>
  );

  const shiva = (
    <div className="card">
      <div className="card-image">
        <img src={shiva_image} alt="Shiva" />
      </div>
      <div className="card-content">Lord Shiva, destroyer of the universe</div>
    </div>
  );

  const ganesha = (
    <div className="card">
      <div className="card-image">
        <img src={ganesh_image} alt="anesha" />
      </div>
      <div className="card-content">Lord Ganesha, remover of all obstacles</div>
    </div>
  );

  const krishna = (
    <div className="card">
      <div className="card-image">
        <img src={krishna_image} alt="Krishna" />
      </div>
      <div className="card-content">Lord Krishna, the universal Guru</div>
    </div>
  );

  const shanmukha = (
    <div className="card">
      <div className="card-image">
        <img src={shanmukha_image} alt="shanmukha" />
      </div>
      <div className="card-content">shanmukha</div>
    </div>
  );

  const vishnu = (
    <div className="card">
      <div className="card-image">
        <img src={vishnu_image} alt="vishnu" />
      </div>
      <div className="card-content">Lord Vishnu and consort</div>
    </div>
  );

  const ram = (
    <div className="card">
      <div className="card-image">
        <img src={ram_image} alt="ram" />
      </div>
      <div className="card-content">Lord Ram and family</div>
    </div>
  );

  const chandrashekara_saraswathi = (
    <div className="card">
      <div className="card-image">
        <img
          src={chandrashekara_saraswathi_image}
          alt="chandrashekara_saraswathi"
        />
      </div>
      <div className="card-content">
        Chandrashekara Saraswathi (Sage of Kanchi, also lovingly called as
        Mahaperiyava)
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4">{ganesha}</div>
        <div className="col s12 m4">{shiva}</div>
        <div className="col s12 m4">{shiva_parvathi}</div>
      </div>
      <div className="row">
        <div className="col s12 m4">{krishna}</div>
        <div className="col s12 m4">{navagraha}</div>
        <div className="col s12 m4">{shanmukha}</div>
      </div>
      <div className="row">
        <div className="col s12 m4">{vishnu}</div>
        <div className="col s12 m4">{ram}</div>
        <div className="col s12 m4">{chandrashekara_saraswathi}</div>
      </div>
    </div>
  );
};

export default Deities;
