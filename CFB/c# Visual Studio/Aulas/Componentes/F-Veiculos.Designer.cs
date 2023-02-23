namespace Componentes
{
    partial class F_Veiculos
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
            this.tb_listaDeveiculos = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // tb_listaDeveiculos
            // 
            this.tb_listaDeveiculos.Location = new System.Drawing.Point(23, 12);
            this.tb_listaDeveiculos.Multiline = true;
            this.tb_listaDeveiculos.Name = "tb_listaDeveiculos";
            this.tb_listaDeveiculos.Size = new System.Drawing.Size(328, 263);
            this.tb_listaDeveiculos.TabIndex = 0;
            // 
            // F_Veiculos
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(381, 291);
            this.Controls.Add(this.tb_listaDeveiculos);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "F_Veiculos";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Lista de Veículos ";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.F_Veiculos_FormClosing);
            this.Load += new System.EventHandler(this.F_Veiculos_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private TextBox tb_listaDeveiculos;
    }
}