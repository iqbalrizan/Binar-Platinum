import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceHolder from './assets/holder.png';
import Count10Minute from '../count10minute';
import './style.css';

const ConfirmUpload = () => {
  const [img, setImg] = useState(PlaceHolder)

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result)
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <section className="confirm-upload">
      <div className="confirm-count">
        <h3>Konfirmasi Pembayaran</h3>
        <Count10Minute />
      </div>
      <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
      <h4>Upload Bukti Pembayaran</h4>
      <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
      <div className="upload-img">
        <div className="img">
          <img src={img} alt="upload-img" />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={imageHandler}
        />
      </div>
      {img === PlaceHolder ?
        <button onClick={() => `if (reader.readyState === 2) {
          setImg(reader.result)
        }`}>
          <label htmlFor="input">
            Upload
          </label>
        </button>
        :
        <Link to={'/payment/bank-confirm/e-ticket'}>
          Konfirmasi
        </Link>
      }
    </section>
  )
}

export default ConfirmUpload;