import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clientAxios from '../config/axios';
import * as actions from './movieActions';
import * as types from '../types/index';

jest.mock('../config/axios'); // this happens automatically with automocking

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('filterMovieAction', () => {
  
    it('should test movies filter functions', () => {
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
        const store = mockStore({ movie: [] })
    
        return store.dispatch(actions.filterMovieAction({search:"runa", movies})).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe('getMoviesAction', () => {
    it('should test get movies functions', () => {
        const movies = {"data":{"response": {
            "modules": {
                "module": [
                    {
                        "name": "nivel-3-default",
                        "type": "listadoinfinito",
                        "components": {
                            "component": [
                                {
                                    "name": "background",
                                    "type": "Background",
                                    "properties": {
                                        "id": "comp0",
                                        "color": null,
                                        "imglarge": "",
                                    }
                                },
                                {
                                    "name": "carrousel",
                                    "type": "Listadoinfinito",
                                    "properties": {
                                        "id": "carrousel-1276",
                                        "url": "/services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico",
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }}}
        const expectedActions = [
            { 
                type: types.GET_MOVIE, payload: true 
            }
        ]
        
        clientAxios.get.mockResolvedValue(movies)

        const store = mockStore({ movie: [] })

        return store.dispatch(actions.getMoviesAction())
        .then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe('getDetailsMovieAction', () => {
    it('should test get details movies functions', () => {
        const movies = {"data":{
            "response": {
                "group": {
                    "common": {
                        "position": 0,
                        "id": "791467",
                        "title": "La reunión",
                        "description": "Un grupo de seis adolescentes de Los Ángeles descubren que sus padres esconden un secreto.",
                        "large_description": "Un grupo de seis adolescentes de Los Ángeles, muy dolidos por una trágica pérdida, se reúnen solo para descubrir que sus padres pueden estar ocultando un terrible secreto que trastorna su mundo.",
                        "duration": "00:53:05",
                        "image_large_alt": "Marvel's Runaways - T01-Ep01",
                        "image_medium_alt": "Marvel's Runaways - T01-Ep01",
                        "image_small_alt": "Marvel's Runaways - T01-Ep01",
                        "image_large": "https://clarovideocdn0.clarovideo.net/SERIES/RUNAWAYS-01-01-00/EXPORTACION_WEB/SS/RUNAWAYS-01-01-00WHORIZONTAL.jpg?size=675x380",
                        "image_medium": "https://clarovideocdn8.clarovideo.net/SERIES/RUNAWAYS-01-01-00/EXPORTACION_WEB/SS/RUNAWAYS-01-01-00WVERTICAL.jpg?size=200x300",
                        "image_small": "https://clarovideocdn0.clarovideo.net/SERIES/RUNAWAYS-01-01-00/EXPORTACION_WEB/SS/RUNAWAYS-01-01-00WHORIZONTAL.jpg?size=290x163",
                        "date": "28/11/2019",
                        "media_type": "2",
                        "title_uri": "La-reunion",
                        "extendedcommon": {
                            "genres": {
                                "genre": [
                                    {
                                        "id": "52540",
                                        "name": "TV Series",
                                        "desc": "Series"
                                    },
                                    {
                                        "id": "51131",
                                        "name": "Action",
                                        "desc": "Acción"
                                    }
                                ]
                            },
                            "roles": {
                                "role": [
                                    {
                                        "id": "13617516",
                                        "name": "Actor",
                                        "desc": "Actor",
                                        "talents": {
                                            "talent": [
                                                {
                                                    "id": "138708181",
                                                    "name": "Lyruca",
                                                    "surname": "Okano",
                                                    "fullname": "Okano, Lyruca"
                                                },
                                                {
                                                    "id": "138689679",
                                                    "name": "Rhenzy",
                                                    "surname": "Feliz",
                                                    "fullname": "Feliz, Rhenzy"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id": "13617517",
                                        "name": "Director",
                                        "desc": "Director",
                                        "talents": {
                                            "talent": [
                                                {
                                                    "id": "117853102",
                                                    "name": "Brett",
                                                    "surname": "Morgen",
                                                    "fullname": "Morgen, Brett"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id": "13965645",
                                        "name": "Producer",
                                        "desc": "Productor",
                                        "talents": {
                                            "talent": [
                                                {
                                                    "id": "88398170",
                                                    "name": "Jim",
                                                    "surname": "Chory",
                                                    "fullname": "Chory, Jim"
                                                },
                                                {
                                                    "id": "138673052",
                                                    "name": "Jeph",
                                                    "surname": "Loeb",
                                                    "fullname": "Loeb, Jeph"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "media": {
                                "originaltitle": "Runaways",
                                "description_extended": "Un grupo de seis adolescentes de Los Ángeles, muy dolidos por una trágica pérdida, se reúnen solo para descubrir que sus padres pueden estar ocultando un terrible secreto que trastorna su mundo.",
                                "publishyear": "2017",
                                "boxoffice": "0.0",
                                "rating": {
                                    "id": "30",
                                    "code": "PG-13",
                                    "desc": "Apta para mayores de 13"
                                },
                                "duration": "00:53:05",
                                "haspreview": "true",
                                "countryoforigin": {
                                    "code": "US",
                                    "desc": "Estados Unidos"
                                },
                            }
                        }
                    }
                }
            }
        }}
        const expectedActions = [
            { 
                type: types.GET_DATA_MOVIE, payload: true 
            },
            {
                payload: movies.data.response.group.common,
                type: types.GET_DATA_MOVIE_SUCCESS
            }
        ]
        
        clientAxios.get.mockResolvedValue(movies)

        const store = mockStore({ movie: [] })

        return store.dispatch(actions.getDetailsMovieAction())
        .then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})