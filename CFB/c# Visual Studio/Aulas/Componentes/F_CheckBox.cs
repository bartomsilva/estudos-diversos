using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Componentes
{
    public partial class F_CheckBox : Form
    {
        public F_CheckBox()
        {
            InitializeComponent();
        }

        private void F_CheckBox_Load(object sender, EventArgs e)
        {
            string txt;
        }

        private void pn_4_Paint(object sender, PaintEventArgs e)
        {

        }

        private void cb_carro_CheckedChanged(object sender, EventArgs e)
        {
            if (Cb_carro.Checked)
            {
                Pn_1.Visible = true;
            }
            else
            {
                Pn_1.Visible = false;
            }
        }

        private void cb_aviao_CheckedChanged(object sender, EventArgs e)
        {
            if (Cb_aviao.Checked)
            {
                Pn_2.Visible = true;
            }
            else
            {
                Pn_2.Visible = false;
            }
        }

        private void cb_navio_CheckedChanged(object sender, EventArgs e)
        {
            if (Cb_navio.Checked)
            {
                Pn_3.Visible = true;
            }
            else
            {
                Pn_3.Visible = false;
            }
        }

        private void cb_onibus_CheckedChanged(object sender, EventArgs e)
        {
            if (Cb_onibus.Checked)
            {
                Pn_4.Visible = true;
            }
            else
            {
                Pn_4.Visible = false;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {

        }
    }
    
 }
