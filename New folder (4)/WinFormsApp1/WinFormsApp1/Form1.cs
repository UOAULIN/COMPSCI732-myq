using System.Net;
using System.Net.Sockets;
using System.Text;

namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        private TcpClient client;
        public Form1()
        {

            InitializeComponent();
            labelShowStatus.Text = "Wait Connecting....";
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());

            IPAddress ipAddr = ipHost.AddressList[0];

            int port = 8081;

            try
            {
                client = new TcpClient(ipAddr.ToString(), port);
                labelShowStatus.Text = "Connect to Cache";
            }catch(Exception ex)
            {
                labelShowStatus.Text = "EOF " + ex.Message;
            }

        }

        // buttonShow: Show all file in the Server
        private void buttonShow_Click(object sender, EventArgs e)
        {
            try
            {
                byte command = 0;
                using(NetworkStream stream = client.GetStream())
                {
                    stream.WriteByte(command);
                    stream.Flush();
                    StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                    string response = reader.ReadToEnd();
                    labelShowStatus.Text = response;
                }
            }catch(Exception ex)
            {

            }
        }

        private void buttonDownload1_Click(object sender, EventArgs e)
        {
            try
            {
                byte command = 10;
                using (NetworkStream stream = client.GetStream())
                {
                    stream.WriteByte(command);
                    stream.Flush();

                    

                }
            }
            catch (Exception ex)
            {

            }
        }

        private void buttonDownload2_Click(object sender, EventArgs e)
        {
            try
            {
                byte command = 11;
                using (NetworkStream stream = client.GetStream())
                {
                    stream.WriteByte(command);
                    stream.Flush();



                }
            }
            catch (Exception ex)
            {

            }
        }
    }
}