namespace Componentes
{
    partial class F_CheckBox
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.Cb_carro = new System.Windows.Forms.CheckBox();
            this.Cb_aviao = new System.Windows.Forms.CheckBox();
            this.Cb_navio = new System.Windows.Forms.CheckBox();
            this.Cb_onibus = new System.Windows.Forms.CheckBox();
            this.button1 = new System.Windows.Forms.Button();
            this.Pn_1 = new System.Windows.Forms.Panel();
            this.Pn_2 = new System.Windows.Forms.Panel();
            this.Pn_3 = new System.Windows.Forms.Panel();
            this.Pn_4 = new System.Windows.Forms.Panel();
            this.SuspendLayout();
            // 
            // Cb_carro
            // 
            this.Cb_carro.AutoSize = true;
            this.Cb_carro.Location = new System.Drawing.Point(24, 24);
            this.Cb_carro.Name = "Cb_carro";
            this.Cb_carro.Size = new System.Drawing.Size(55, 19);
            this.Cb_carro.TabIndex = 0;
            this.Cb_carro.Text = "Carro";
            this.Cb_carro.UseVisualStyleBackColor = true;
            this.Cb_carro.CheckedChanged += new System.EventHandler(this.cb_carro_CheckedChanged);
            // 
            // Cb_aviao
            // 
            this.Cb_aviao.AutoSize = true;
            this.Cb_aviao.Location = new System.Drawing.Point(23, 49);
            this.Cb_aviao.Name = "Cb_aviao";
            this.Cb_aviao.Size = new System.Drawing.Size(56, 19);
            this.Cb_aviao.TabIndex = 1;
            this.Cb_aviao.Text = "Avião";
            this.Cb_aviao.UseVisualStyleBackColor = true;
            this.Cb_aviao.CheckedChanged += new System.EventHandler(this.cb_aviao_CheckedChanged);
            // 
            // Cb_navio
            // 
            this.Cb_navio.AutoSize = true;
            this.Cb_navio.Location = new System.Drawing.Point(23, 74);
            this.Cb_navio.Name = "Cb_navio";
            this.Cb_navio.Size = new System.Drawing.Size(57, 19);
            this.Cb_navio.TabIndex = 2;
            this.Cb_navio.Text = "Navio";
            this.Cb_navio.UseVisualStyleBackColor = true;
            this.Cb_navio.CheckedChanged += new System.EventHandler(this.cb_navio_CheckedChanged);
            // 
            // Cb_onibus
            // 
            this.Cb_onibus.AutoSize = true;
            this.Cb_onibus.Location = new System.Drawing.Point(23, 99);
            this.Cb_onibus.Name = "Cb_onibus";
            this.Cb_onibus.Size = new System.Drawing.Size(57, 19);
            this.Cb_onibus.TabIndex = 3;
            this.Cb_onibus.Text = "Ônius";
            this.Cb_onibus.UseVisualStyleBackColor = true;
            this.Cb_onibus.CheckedChanged += new System.EventHandler(this.cb_onibus_CheckedChanged);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(167, 61);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(172, 23);
            this.button1.TabIndex = 4;
            this.button1.Text = "Transportes Marcados";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Pn_1
            // 
            this.Pn_1.BackgroundImage = global::Componentes.Properties.Resources.carro;
            this.Pn_1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.Pn_1.Location = new System.Drawing.Point(16, 132);
            this.Pn_1.Name = "Pn_1";
            this.Pn_1.Size = new System.Drawing.Size(63, 46);
            this.Pn_1.TabIndex = 5;
            this.Pn_1.Visible = false;
            // 
            // Pn_2
            // 
            this.Pn_2.BackgroundImage = global::Componentes.Properties.Resources.aviao;
            this.Pn_2.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.Pn_2.Location = new System.Drawing.Point(99, 132);
            this.Pn_2.Name = "Pn_2";
            this.Pn_2.Size = new System.Drawing.Size(63, 46);
            this.Pn_2.TabIndex = 6;
            this.Pn_2.Visible = false;
            // 
            // Pn_3
            // 
            this.Pn_3.BackgroundImage = global::Componentes.Properties.Resources.navio;
            this.Pn_3.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.Pn_3.Location = new System.Drawing.Point(179, 132);
            this.Pn_3.Name = "Pn_3";
            this.Pn_3.Size = new System.Drawing.Size(63, 46);
            this.Pn_3.TabIndex = 6;
            this.Pn_3.Visible = false;
            // 
            // Pn_4
            // 
            this.Pn_4.BackgroundImage = global::Componentes.Properties.Resources.onibus;
            this.Pn_4.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.Pn_4.Location = new System.Drawing.Point(260, 132);
            this.Pn_4.Name = "Pn_4";
            this.Pn_4.Size = new System.Drawing.Size(63, 46);
            this.Pn_4.TabIndex = 6;
            this.Pn_4.Visible = false;
            this.Pn_4.Paint += new System.Windows.Forms.PaintEventHandler(this.pn_4_Paint);
            // 
            // F_CheckBox
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(352, 280);
            this.Controls.Add(this.Pn_4);
            this.Controls.Add(this.Pn_3);
            this.Controls.Add(this.Pn_2);
            this.Controls.Add(this.Pn_1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.Cb_onibus);
            this.Controls.Add(this.Cb_navio);
            this.Controls.Add(this.Cb_aviao);
            this.Controls.Add(this.Cb_carro);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "F_CheckBox";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "CheckBox";
            this.Load += new System.EventHandler(this.F_CheckBox_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private CheckBox Cb_carro;
        private CheckBox Cb_aviao;
        private CheckBox Cb_navio;
        private CheckBox Cb_onibus;
        private Button button1;
        private Panel Pn_1;
        private Panel Pn_2;
        private Panel Pn_3;
        private Panel Pn_4;
    }
}