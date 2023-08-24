"use client";

// services/api.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL ;



export const tomarDelivery = async (deliveryId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/entregar/${deliveryId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const tipoVehiculo = async (deliveryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tipo`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
