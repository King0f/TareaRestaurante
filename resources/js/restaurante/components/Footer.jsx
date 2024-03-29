import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black p-8 opacity-95 text-white text-center flex flex-col items-center justify-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaTwitter size="24" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaFacebook size="24" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaInstagram size="24" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaLinkedinIn size="24" />
        </a>
      </div>
      <div className="text-sm opacity-80">
        © {new Date().getFullYear()} Todos los derechos reservados. Página creada por Nicolás Gómez Mulero.
      </div>
    </footer>
  );
};