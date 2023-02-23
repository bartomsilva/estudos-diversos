

namespace Componentes
{
    public partial class F_Principal : Form
    {
        public int num;

        public F_Principal()
        {
            InitializeComponent();
            num = 0;
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void btn_adicionar_Click(object sender, EventArgs e)
        {
            if (tb_veiculo.Text != "")
            {
                // as duas opções fucionam dando espaço de uma linha a cada ítem adicionado
                //tb_listaveiculos.Text += tb_veiculo.Text + Environment.NewLine;
                tb_listaveiculos.Text += tb_veiculo.Text + "\r\n";
                tb_veiculo.Text = "";
            } else
            {
                MessageBox.Show("Não foi Digitado nada!!");
            }

            tb_veiculo.Focus();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            tb_listaveiculos.Text = "";
        }

        private void tb_listaveiculos_TextChanged(object sender, EventArgs e)
        {
           
        }

        private void btnMostrar_Click(object sender, EventArgs e)
        {
            F_Veiculos f_Veiculos = new F_Veiculos(tb_listaveiculos.Text,this);
            f_Veiculos.ShowDialog();
        }

        private void F_Principal_Load(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            MessageBox.Show(num.ToString());
        }

        private void checkBoxToolStripMenuItem_Click(object sender, EventArgs e)
        {
            F_CheckBox f_CheckBox = new F_CheckBox();
            f_CheckBox.ShowDialog();
        }

        private void chedkedListBoxToolStripMenuItem_Click(object sender, EventArgs e)
        {
            F_ChekdeListBox f_ChekdeListBox = new F_ChekdeListBox();
            f_ChekdeListBox.ShowDialog();
        }
    }
}