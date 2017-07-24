using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AdalTestApi.Controllers
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Function { get; set; }
    }

    [Authorize]
    public class EmployeeController : ApiController
    {
        private static readonly Employee[] SpikesEmployees = new Employee[] {
            new Employee() { Id = 1, Name = "Maarten", Function = "Team lead" },
            new Employee() { Id = 2, Name = "Bart", Function = "BI Consultant" },
            new Employee() { Id = 3, Name = "Joren", Function = "Developer" },
            new Employee() { Id = 4, Name = "Ruben", Function = "Developer" },
            new Employee() { Id = 5, Name = "Thomas", Function = "O365 Developer" },
            new Employee() { Id = 6, Name = "Koen", Function = "O365 Developer" },
            new Employee() { Id = 7, Name = "Tom", Function = "O365 Architect" },
            new Employee() { Id = 8, Name = "Jurgen", Function = "Infra" },
            new Employee() { Id = 9, Name = "Jasper", Function = "Infra" },
            new Employee() { Id = 10, Name = "Dirk", Function = "Sales" },
            new Employee() { Id = 11, Name = "Marc", Function = "Boss" },
            new Employee() { Id = 12, Name = "Inge", Function = "HR" },
        };

        public IEnumerable<Employee> Get()
        {
            return SpikesEmployees;
        }
    }
}
