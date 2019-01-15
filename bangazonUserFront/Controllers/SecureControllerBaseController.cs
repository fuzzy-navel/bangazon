using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bangazonUserFront.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class SecureControllerBaseController : ControllerBase
    {
        protected string UserId => User.FindFirst(x => x.Type == "user_id").Value;
    }
}