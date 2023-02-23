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
    public partial class F_Veiculos : Form
    {
        F_Principal fp;
        public F_Veiculos(string v, F_Principal f)
        {
            InitializeComponent();
            tb_listaDeveiculos.Text = v;
            fp = f;
            fp.num = tb_listaDeveiculos.Text.Length;
        }

        private void F_Veiculos_Load(object sender, EventArgs e)
        {

        }

        private void F_Veiculos_FormClosing(object sender, FormClosingEventArgs e)
        {
            fp.tb_listaveiculos.Text = tb_listaDeveiculos.Text;

        }
    }
}
