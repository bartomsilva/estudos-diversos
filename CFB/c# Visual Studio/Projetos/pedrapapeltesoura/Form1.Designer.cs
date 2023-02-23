namespace PPT___Pedra_Papel_e_Tesoura
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.btPedra = new System.Windows.Forms.Button();
            this.btPapel = new System.Windows.Forms.Button();
            this.btTesoura = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.btbraian = new System.Windows.Forms.Button();
            this.gbraian = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.gvoce = new System.Windows.Forms.Button();
            this.gempate = new System.Windows.Forms.Button();
            this.panel1 = new System.Windows.Forms.Panel();
            this.label5 = new System.Windows.Forms.Label();
            this.imagemlist = new System.Windows.Forms.ImageList(this.components);
            this.btbraianpedra = new System.Windows.Forms.Button();
            this.btbraianpapel = new System.Windows.Forms.Button();
            this.btbraiantesoura = new System.Windows.Forms.Button();
            this.btjogarnovamente = new System.Windows.Forms.Button();
            this.panel2 = new System.Windows.Forms.Panel();
            this.braian = new System.Windows.Forms.Label();
            this.eu = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.panel3 = new System.Windows.Forms.Panel();
            this.label6 = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            this.panel2.SuspendLayout();
            this.panel3.SuspendLayout();
            this.SuspendLayout();
            // 
            // btPedra
            // 
            this.btPedra.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.pedra;
            this.btPedra.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.btPedra.Location = new System.Drawing.Point(12, 71);
            this.btPedra.Name = "btPedra";
            this.btPedra.Size = new System.Drawing.Size(131, 136);
            this.btPedra.TabIndex = 0;
            this.btPedra.UseVisualStyleBackColor = true;
            this.btPedra.Click += new System.EventHandler(this.btPedra_Click);
            // 
            // btPapel
            // 
            this.btPapel.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.papel;
            this.btPapel.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.btPapel.Location = new System.Drawing.Point(12, 228);
            this.btPapel.Name = "btPapel";
            this.btPapel.Size = new System.Drawing.Size(131, 121);
            this.btPapel.TabIndex = 1;
            this.btPapel.UseVisualStyleBackColor = true;
            this.btPapel.Click += new System.EventHandler(this.btPapel_Click);
            // 
            // btTesoura
            // 
            this.btTesoura.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.tesoura;
            this.btTesoura.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.btTesoura.Location = new System.Drawing.Point(12, 363);
            this.btTesoura.Name = "btTesoura";
            this.btTesoura.Size = new System.Drawing.Size(131, 115);
            this.btTesoura.TabIndex = 2;
            this.btTesoura.UseVisualStyleBackColor = true;
            this.btTesoura.Click += new System.EventHandler(this.btTesoura_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 20F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(26, 25);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(141, 37);
            this.label1.TabIndex = 3;
            this.label1.Text = "Você >>>";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // btbraian
            // 
            this.btbraian.Enabled = false;
            this.btbraian.Font = new System.Drawing.Font("Segoe UI", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btbraian.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btbraian.Location = new System.Drawing.Point(33, 36);
            this.btbraian.Name = "btbraian";
            this.btbraian.Size = new System.Drawing.Size(171, 159);
            this.btbraian.TabIndex = 5;
            this.btbraian.Text = "?";
            this.btbraian.UseVisualStyleBackColor = true;
            this.btbraian.Click += new System.EventHandler(this.button1_Click);
            // 
            // gbraian
            // 
            this.gbraian.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.BRAIAN;
            this.gbraian.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.gbraian.Location = new System.Drawing.Point(17, 27);
            this.gbraian.Name = "gbraian";
            this.gbraian.Size = new System.Drawing.Size(208, 209);
            this.gbraian.TabIndex = 6;
            this.gbraian.UseVisualStyleBackColor = true;
            this.gbraian.Visible = false;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 25F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(569, 137);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(178, 46);
            this.label2.TabIndex = 7;
            this.label2.Text = "Ganhador";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 20F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label3.Location = new System.Drawing.Point(632, 25);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(167, 37);
            this.label3.TabIndex = 8;
            this.label3.Text = "<<< Braian";
            // 
            // gvoce
            // 
            this.gvoce.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.VOCE;
            this.gvoce.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.gvoce.Location = new System.Drawing.Point(17, 27);
            this.gvoce.Name = "gvoce";
            this.gvoce.Size = new System.Drawing.Size(208, 209);
            this.gvoce.TabIndex = 9;
            this.gvoce.UseVisualStyleBackColor = true;
            this.gvoce.Visible = false;
            // 
            // gempate
            // 
            this.gempate.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.empate;
            this.gempate.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.gempate.Location = new System.Drawing.Point(17, 27);
            this.gempate.Name = "gempate";
            this.gempate.Size = new System.Drawing.Size(208, 209);
            this.gempate.TabIndex = 10;
            this.gempate.UseVisualStyleBackColor = true;
            this.gempate.Visible = false;
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.SystemColors.ControlDark;
            this.panel1.Controls.Add(this.gempate);
            this.panel1.Controls.Add(this.gvoce);
            this.panel1.Controls.Add(this.gbraian);
            this.panel1.Location = new System.Drawing.Point(535, 220);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(241, 258);
            this.panel1.TabIndex = 11;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label5.Location = new System.Drawing.Point(607, 183);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(80, 21);
            this.label5.TabIndex = 20;
            this.label5.Text = "??????????";
            this.label5.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // imagemlist
            // 
            this.imagemlist.ColorDepth = System.Windows.Forms.ColorDepth.Depth8Bit;
            this.imagemlist.ImageStream = ((System.Windows.Forms.ImageListStreamer)(resources.GetObject("imagemlist.ImageStream")));
            this.imagemlist.TransparentColor = System.Drawing.Color.Transparent;
            this.imagemlist.Images.SetKeyName(0, "pedra.jpg");
            this.imagemlist.Images.SetKeyName(1, "papel.jpg");
            this.imagemlist.Images.SetKeyName(2, "tesoura.jpg");
            // 
            // btbraianpedra
            // 
            this.btbraianpedra.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.pedra;
            this.btbraianpedra.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.btbraianpedra.Enabled = false;
            this.btbraianpedra.Font = new System.Drawing.Font("Segoe UI", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btbraianpedra.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btbraianpedra.Location = new System.Drawing.Point(33, 32);
            this.btbraianpedra.Name = "btbraianpedra";
            this.btbraianpedra.Size = new System.Drawing.Size(181, 159);
            this.btbraianpedra.TabIndex = 12;
            this.btbraianpedra.UseVisualStyleBackColor = true;
            this.btbraianpedra.Visible = false;
            // 
            // btbraianpapel
            // 
            this.btbraianpapel.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.papel;
            this.btbraianpapel.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.btbraianpapel.Enabled = false;
            this.btbraianpapel.Font = new System.Drawing.Font("Segoe UI", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btbraianpapel.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btbraianpapel.Location = new System.Drawing.Point(41, 27);
            this.btbraianpapel.Name = "btbraianpapel";
            this.btbraianpapel.Size = new System.Drawing.Size(173, 168);
            this.btbraianpapel.TabIndex = 13;
            this.btbraianpapel.UseVisualStyleBackColor = true;
            this.btbraianpapel.Visible = false;
            // 
            // btbraiantesoura
            // 
            this.btbraiantesoura.BackgroundImage = global::PPT___Pedra_Papel_e_Tesoura.Properties.Resources.tesoura;
            this.btbraiantesoura.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.btbraiantesoura.Enabled = false;
            this.btbraiantesoura.Font = new System.Drawing.Font("Segoe UI", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btbraiantesoura.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btbraiantesoura.Location = new System.Drawing.Point(41, 32);
            this.btbraiantesoura.Name = "btbraiantesoura";
            this.btbraiantesoura.Size = new System.Drawing.Size(173, 163);
            this.btbraiantesoura.TabIndex = 14;
            this.btbraiantesoura.UseVisualStyleBackColor = true;
            this.btbraiantesoura.Visible = false;
            // 
            // btjogarnovamente
            // 
            this.btjogarnovamente.Enabled = false;
            this.btjogarnovamente.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point);
            this.btjogarnovamente.Location = new System.Drawing.Point(173, 428);
            this.btjogarnovamente.Name = "btjogarnovamente";
            this.btjogarnovamente.Size = new System.Drawing.Size(338, 50);
            this.btjogarnovamente.TabIndex = 15;
            this.btjogarnovamente.Text = "Jogue Novamente";
            this.btjogarnovamente.UseVisualStyleBackColor = true;
            this.btjogarnovamente.Click += new System.EventHandler(this.btjogarnovamente_Click);
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.OrangeRed;
            this.panel2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.panel2.Controls.Add(this.braian);
            this.panel2.Controls.Add(this.eu);
            this.panel2.Controls.Add(this.label4);
            this.panel2.Location = new System.Drawing.Point(173, 12);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(453, 62);
            this.panel2.TabIndex = 16;
            // 
            // braian
            // 
            this.braian.AutoSize = true;
            this.braian.Font = new System.Drawing.Font("Segoe UI", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.braian.ForeColor = System.Drawing.Color.Transparent;
            this.braian.Location = new System.Drawing.Point(333, -2);
            this.braian.Name = "braian";
            this.braian.Size = new System.Drawing.Size(46, 54);
            this.braian.TabIndex = 2;
            this.braian.Text = "0";
            // 
            // eu
            // 
            this.eu.AutoSize = true;
            this.eu.Font = new System.Drawing.Font("Segoe UI", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.eu.ForeColor = System.Drawing.Color.White;
            this.eu.Location = new System.Drawing.Point(67, -2);
            this.eu.Name = "eu";
            this.eu.Size = new System.Drawing.Size(46, 54);
            this.eu.TabIndex = 1;
            this.eu.Text = "0";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 35F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label4.Location = new System.Drawing.Point(182, -4);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(55, 62);
            this.label4.TabIndex = 0;
            this.label4.Text = "X";
            // 
            // panel3
            // 
            this.panel3.Controls.Add(this.btbraiantesoura);
            this.panel3.Controls.Add(this.btbraianpapel);
            this.panel3.Controls.Add(this.btbraianpedra);
            this.panel3.Controls.Add(this.btbraian);
            this.panel3.Location = new System.Drawing.Point(242, 154);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(238, 235);
            this.panel3.TabIndex = 17;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Segoe UI", 20F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label6.Location = new System.Drawing.Point(309, 114);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(103, 37);
            this.label6.TabIndex = 19;
            this.label6.Text = "Braian";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.ClientSize = new System.Drawing.Size(798, 505);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.panel3);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.btjogarnovamente);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btTesoura);
            this.Controls.Add(this.btPapel);
            this.Controls.Add(this.btPedra);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panel1.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.panel3.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button btPedra;
        private Button btPapel;
        private Button btTesoura;
        private Label label1;
        private Button btbraian;
        private Button gbraian;
        private Label label2;
        private Label label3;
        private Button gvoce;
        private Button gempate;
        private Panel panel1;
        private ImageList imagemlist;
        private Button btbraianpedra;
        private Button btbraianpapel;
        private Button btbraiantesoura;
        private Button button1;
        private EventHandler button1_Click_1;
        private Button btjogarnovamente;
        private Panel panel2;
        private Label braian;
        private Label eu;
        private Label label4;
        private Panel panel3;
        private Label label6;
        private Label label5;
    }
}