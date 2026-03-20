using back_end.Entidades;
using back_end.Filtros;
using back_end.Repositorios;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/generos")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class GenerosController : ControllerBase
    {

        private readonly IRepositorio repositorio;
        // 1. Creamos la variable privada
        private readonly WeatherForecastController weatherForecastController;

        private readonly ILogger logger;

        // 2. Lo pedimos en el constructor
        public GenerosController(IRepositorio repositorio,
            WeatherForecastController weatherForecastController,
            ILogger<GenerosController> logger)
        {
            this.repositorio = repositorio;
            // 3. Lo guardamos en nuestra variable
            this.weatherForecastController = weatherForecastController;
            this.logger = logger;
        }

        [HttpGet]
        [HttpGet("listado")]
        [HttpGet("/listadoGeneros")]
        //[ResponseCache (Duration =60)]
        [ServiceFilter(typeof(MiFiltroDeAccion))]


        public ActionResult<List<Genero>> Get()
        {
            logger.LogInformation("Vamos a mostrar los generos");
            return repositorio.ObtenerTodosLosGeneros();
        }

        [HttpGet("guid")]//api/generos/guid
        public ActionResult<Guid> GetGUID()
        {
            return Ok(new
            {
                GUID_GenerosController = repositorio.ObtenerGUID(),
                GUID_WeatherForecastController = weatherForecastController.ObtenerGUIDWeatherForecastController()
            });
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id, [FromHeader] string nombre)
        {

            logger.LogDebug($"Obteniendo un género por el id {Id}");
            var genero = await repositorio.ObtenerPorId(Id);

            if (genero == null)
            {
                throw new ApplicationException($"El genero de ID {Id} no fue encontrado");
                logger.LogWarning($"No podimos encontrar el género de id {Id}");
                return NotFound();
            }
            return genero;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            repositorio.CrearGenero(genero);
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }

    }
}