namespace PPT___Pedra_Papel_e_Tesoura
{
    public partial class Form1 : Form
    {
        int minhaescolha;
        int escolhabrain;

     
        int eugahei = 0, braianganhou = 0;
       
        Random random = new Random();

        public Form1()
        {
            InitializeComponent();
            label5.Text = "????????????";
        }

        private void label1_Click(object sender, EventArgs e)
       {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {

        }

        private void btPedra_Click(object sender, EventArgs e)
        {
            minhaescolha = 1;            
            jogobraian();
        }

        private void btPapel_Click(object sender, EventArgs e)
        {
            minhaescolha = 2;
            jogobraian();

        }
       
        private void btTesoura_Click(object sender, EventArgs e)
        {
            minhaescolha = 3;
            jogobraian();
        }

        // aqui o computador vai fazer sua jogada e invocar 
        // a função quem ganhou
        private void jogobraian()
        {
            
            escolhabrain = random.Next(1, 10);

          
            if (escolhabrain == 1 || escolhabrain == 4 || escolhabrain == 7 )
            {
                escolhabrain = 1;
                btbraianpedra.Visible = true;
            } else if (escolhabrain ==2 || escolhabrain == 5 || escolhabrain == 8)
            {
                escolhabrain = 2;
                btbraianpapel.Visible = true;
            } else
            {
                escolhabrain = 3;
                btbraiantesoura.Visible = true;
            }
                                
            mostraganhador();

        }
       
        private void mostraganhador()
        {
            if (minhaescolha == escolhabrain)
            {
                gempate.Visible = true;
                label5.Text = "* Empate! *";
            } else if (minhaescolha==1 && escolhabrain==3)
            {
                gvoce.Visible = true;
                eugahei++;
                label5.Text = "Você Ganhou!";
            } else if (minhaescolha ==2 && escolhabrain == 1)
            {
                gvoce.Visible = true;
                eugahei++;
                label5.Text = "Você Ganhou!";
            } else if (minhaescolha==3 && escolhabrain == 2)
            {
                gvoce.Visible = true;
                eugahei++;
                label5.Text = "Você Ganhou!";
            } else
            {
                gbraian.Visible = true;
                braianganhou++;
                label5.Text = "Braian Ganhou!";
            }

            btPedra.Enabled = false;
            btPapel.Enabled = false;
            btTesoura.Enabled = false;

            // atualiza placar
            eu.Text = Convert.ToString(eugahei);
            braian.Text = Convert.ToString(braianganhou);

            if (eugahei == 10 || braianganhou==10)
            {
                MessageBox.Show("GAME OVER");
                eu.Text = "0";
                braian.Text = "0";
                eugahei = 0;
                braianganhou = 0;
                btjogarnovamente.Text = "Jogar Novamente";
            }
            
            btjogarnovamente.Enabled = true;

        }
        private void zerajogo()
        {

            btbraianpedra.Visible = false;
            btbraianpapel.Visible = false;
            btbraiantesoura.Visible = false;

            btPedra.Enabled = true;
            btPapel.Enabled = true;
            btTesoura.Enabled = true;
            btjogarnovamente.Enabled = false;

            gvoce.Visible = false;
            gbraian.Visible = false;
            gempate.Visible = false;
            btjogarnovamente.Text = "Jogue Novamente";
            label5.Text = "????????????";
        }

        private void btjogarnovamente_Click(object sender, EventArgs e)
        {
            zerajogo();

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}