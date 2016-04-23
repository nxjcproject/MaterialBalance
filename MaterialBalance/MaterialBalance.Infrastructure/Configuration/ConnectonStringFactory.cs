using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialBalance.Infrastructure.Configuration
{
    public class ConnectonStringFactory
    {
        public static string NXJCConnectionString { get { return ConfigurationManager.ConnectionStrings["ConnNXJC"].ToString(); } }   
    }
}
