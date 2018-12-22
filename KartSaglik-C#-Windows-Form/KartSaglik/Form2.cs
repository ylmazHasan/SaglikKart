using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Configuration;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
namespace KartSaglik
{
    public partial class Form2 : Form
    {
   

      db _vt = new db(); 
        public Form2()
        {
            InitializeComponent();
        }
        
        private void Form2_Load(object sender, EventArgs e)
        {
            Control.CheckForIllegalCrossThreadCalls = false;
          
           if (_vt.baglanti_kontrol() == "true")    //Veri tabanı bağlantısı kontrolü.
            {
                MessageBox.Show("Veri Tabanı Bağlantısı Başladı.");
            }
            else
            {
                MessageBox.Show(_vt.baglanti_kontrol());
            }
        }

        private async void btnEkle_Click(object sender, EventArgs e)
        {
           
           _vt.cmd.Connection = _vt.cnn;
            _vt.cmd.CommandText = "insert into hastakayitdb(rfid,tc,ad,soyad,yas,cinsiyet,alerji,ilac) values('" + lblRfid.Text + "', '" + txtTc.Text + "', '" + txtAd.Text + "', '" + txtSoyad.Text + "', '" + txtYas.Text + "', '" + cmbCinsiyet.Text + "', '" + txtAlerji.Text + "', '" + txtIlac.Text + "')";
            _vt.cnn.Open();
            _vt.cmd.ExecuteNonQuery();
            _vt.cnn.Close();
        }

        private void serialPort1_DataReceived(object sender, System.IO.Ports.SerialDataReceivedEventArgs e)
        {
            lblRfid.Text = (serialPort1.ReadLine());
        }

        private void tabPage1_Click(object sender, EventArgs e)
        {

        }

        private void label13_Click(object sender, EventArgs e)
        {

        }
    }




}
