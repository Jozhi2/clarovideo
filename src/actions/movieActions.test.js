import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './movieActions';
import * as types from '../types/index';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('movies', () => {
  it('should test movies functions', () => {
    const movies = [
        {
            "id": "791467",
            "title": "Runaways",
            "title_episode": "La reunión",
            "title_uri": "Runaways",
            "title_original": "Runaways",
            "description": "Un grupo de seis adolescentes de Los Ángeles descubren que sus padres esconden un secreto."
        },
        {
            "id": "784198",
            "title": "Afghan Luke: Verdad oculta",
            "title_episode": null,
            "title_uri": "Afghan-Luke-Verdad-oculta",
            "title_original": "Afghan Luke",
            "description": "Luke regresa a Afganistán y se encuentra con un país aún más peligroso que el que dejó."
        },
        {
            "id": "784159",
            "title": "Henry Danger",
            "title_episode": "El peligro comienza Parte 1",
            "title_uri": "Henry-Danger",
            "title_original": "Henry Danger",
            "description": "Henry Hart obtiene su primer empleo como compañero del superhéroe."
        },
        {
            "id": "784084",
            "title": "Fuerzas especiales",
            "title_episode": null,
            "title_uri": "Fuerzas-especiales",
            "title_original": "Special Forces",
            "description": "Kruger es una periodista francesa secuestrada por los talibanes en Afganistán. ¿Será rescatada?"
        }
    ]
    const expectedActions = [
        { 
            type: types.FILTER_MOVIE, payload: true 
        },
        {
            payload:[{
                "id": "791467",
                "title": "Runaways",
                "title_episode": "La reunión",
                "title_uri": "Runaways",
                "title_original": "Runaways",
                "description": "Un grupo de seis adolescentes de Los Ángeles descubren que sus padres esconden un secreto."
            }],
            type: types.FILTER_MOVIE_SUCCESS
        }
      ]
      const store = mockStore({ todos: [] })
  
      return store.dispatch(actions.filterMovieAction({search:"runa", movies})).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})