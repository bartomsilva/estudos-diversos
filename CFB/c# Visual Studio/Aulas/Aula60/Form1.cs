namespace Aula60
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btn_texto_Click(object sender, EventArgs e)
        {
            lb_texto.Text = tb_texto.Text;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}