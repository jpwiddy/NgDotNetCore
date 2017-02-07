using FsmWebClient.Server.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FsmWebClient.Server.Controllers.api
{
    [Authorize]
    [ServiceFilter(typeof(ApiExceptionFilter))]
    public class BaseController : Controller
    {
        public BaseController()
        {
        }
    }
}
