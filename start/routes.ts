import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
  Route.get('/', async () => {
    return { hello: 'world' }
  })
  Route.resource('/times', 'TimesController').apiOnly();
  Route.resource('/grupos', 'GruposController').apiOnly();
  Route.resource('/partidas', 'PartidasController').apiOnly();
  Route.get('/partidasPrimeiraFase', 'PartidasController.buscaPartidaFaseGrupo')
  Route.get('/listaSomenteIdCountry', 'TimesController.listaSomenteIdCountry')
}).prefix('/api')

