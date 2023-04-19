namespace WinFormsApp3
{
    partial class Server
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
            this.labelShowStatus = new System.Windows.Forms.Label();
            this.labelShowStatus1 = new System.Windows.Forms.Label();
            this.labelShowStatus2 = new System.Windows.Forms.Label();
            this.labelShowStatus3 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // labelShowStatus
            // 
            this.labelShowStatus.AutoSize = true;
            this.labelShowStatus.Location = new System.Drawing.Point(12, 9);
            this.labelShowStatus.Name = "labelShowStatus";
            this.labelShowStatus.Size = new System.Drawing.Size(93, 15);
            this.labelShowStatus.TabIndex = 0;
            this.labelShowStatus.Text = "labelShowStatus";
            // 
            // labelShowStatus1
            // 
            this.labelShowStatus1.AutoSize = true;
            this.labelShowStatus1.Location = new System.Drawing.Point(12, 24);
            this.labelShowStatus1.Name = "labelShowStatus1";
            this.labelShowStatus1.Size = new System.Drawing.Size(99, 15);
            this.labelShowStatus1.TabIndex = 1;
            this.labelShowStatus1.Text = "labelShowStatus1";
            // 
            // labelShowStatus2
            // 
            this.labelShowStatus2.AutoSize = true;
            this.labelShowStatus2.Location = new System.Drawing.Point(12, 39);
            this.labelShowStatus2.Name = "labelShowStatus2";
            this.labelShowStatus2.Size = new System.Drawing.Size(99, 15);
            this.labelShowStatus2.TabIndex = 2;
            this.labelShowStatus2.Text = "labelShowStatus2";
            // 
            // labelShowStatus3
            // 
            this.labelShowStatus3.AutoSize = true;
            this.labelShowStatus3.Location = new System.Drawing.Point(12, 54);
            this.labelShowStatus3.Name = "labelShowStatus3";
            this.labelShowStatus3.Size = new System.Drawing.Size(99, 15);
            this.labelShowStatus3.TabIndex = 3;
            this.labelShowStatus3.Text = "labelShowStatus3";
            // 
            // Server
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.labelShowStatus3);
            this.Controls.Add(this.labelShowStatus2);
            this.Controls.Add(this.labelShowStatus1);
            this.Controls.Add(this.labelShowStatus);
            this.Name = "Server";
            this.Text = "Server";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Label labelShowStatus;
        private Label labelShowStatus1;
        private Label labelShowStatus2;
        private Label labelShowStatus3;
    }
}