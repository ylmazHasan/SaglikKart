using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO.Ports;

namespace KartSaglik
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            for (int i = 0; i < System.IO.Ports.SerialPort.GetPortNames().Length; i++)
            {
                comboBox1.Items.Add(System.IO.Ports.SerialPort.GetPortNames()[i]);
            }
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            Form2 rfid = new Form2();
            rfid.serialPort1.PortName = comboBox1.Text;
            rfid.serialPort1.Open();
            this.Hide();
            rfid.Show();
        }
    }
}
