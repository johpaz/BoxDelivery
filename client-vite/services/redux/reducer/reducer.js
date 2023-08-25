import {
  GET_ALL_PILOTOS,
  GET_PILOTOS_TOP,
  GET_TIPO_VEHICULO,
  SEARCH_PILOTO,
  APPLY_FILTERS,
  GET_ALL_CLIENTS,
  UPDATE_PILOTO,
  SOLICITUD_SERVICIO,
  GET_INFO_PILOTO,
  GET_TIPO_VEHICULO_NAME,
  UPDATE_CLIENT,
} from '../actionsTypes/actionsType'
import { filterSuppliers } from '../filters/reduxFilters'

const initialState = {
  pilotos: [],
  pilotosTop: [],
  tipoVehiculo: [],
  pilotoFav: [],
  mediosPago: [],
  clients: [],
  filteredTipoVehiculo: [],
  filteredPiloto: [],
  tipoVehiculoByname:[],
  servicios:[],
  feedback: null,
  error: null,
  filters: {
    tipoVehiculo: 'Tipo Vehiculo',
    piloto: 'Piloto',
    rating: 'Rating',
    },
  session: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PILOTOS:
      return {
        ...state,
        pilotos: action.payload,
        
     }
     case GET_PILOTOS_TOP:
      return {
        ...state,
        pilotosTop: action.payload,
     }
    case GET_TIPO_VEHICULO:
      return {
        ...state,
        tipoVehiculo: action.payload
      }
      //! esta es para traer los profesionales por el nombre de la ocupacion y renderizarlos en categories, se implementa en la searchBar
      case GET_TIPO_VEHICULO_NAME:
        return {
          ...state,
          tipoVehiculoByname: action.payload
        }
           //! actualizar profesional // preguntar cual es el estado a actualizar
      case UPDATE_PILOTO:
        return {
          ...state,
          session: action.payload, 
        };
    case APPLY_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, [action.payload.filter]: action.payload.value }
      }
    case SEARCH_PILOTO:
      return {
        ...state,
        piloto: action.payload
      }
   
      case GET_ALL_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    case UPDATE_CLIENT:
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client
        ),
      }; 
      case SOLICITUD_SERVICIO:
        return {
          ...state,
          servicios: action.payload,
        }
     default:
      return { ...state }
  }
}

export default reducer
