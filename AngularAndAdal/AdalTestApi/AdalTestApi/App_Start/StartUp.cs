using Microsoft.Owin;
using Microsoft.Owin.Security.ActiveDirectory;
using Newtonsoft.Json.Serialization;
using Owin;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;

[assembly: OwinStartup(typeof(AdalTestApi.App_Start.Startup))]
namespace AdalTestApi.App_Start
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            HttpConfiguration config = new HttpConfiguration();

            WebApiConfig.Register(config);
            app.UseWebApi(config);

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        public void ConfigureAuth(IAppBuilder app)
        {
            app.UseWindowsAzureActiveDirectoryBearerAuthentication(
            new WindowsAzureActiveDirectoryBearerAuthenticationOptions
            {
                Tenant = ConfigurationManager.AppSettings["ida:Tenant"],
                TokenValidationParameters = new TokenValidationParameters
                {
                    ValidAudience = ConfigurationManager.AppSettings["ida:Audience"]
                },
            });
        }
    }
}