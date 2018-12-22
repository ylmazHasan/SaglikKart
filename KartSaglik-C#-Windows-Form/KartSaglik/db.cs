using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Configuration;


namespace KartSaglik
{
    class db
    {
        public static string ConnStr = ConfigurationManager.ConnectionStrings["MySQL"].ToString();
        public MySqlConnection cnn = new MySqlConnection(ConnStr);
        public MySqlCommand cmd = new MySqlCommand(ConnStr);

        public string baglanti_kontrol()
        {
            try
            {
                //baglanti.Open();
                return "true";

            }
            catch (MySqlException ex)
            {
                return ex.Message;
            }
        }
    }
}
