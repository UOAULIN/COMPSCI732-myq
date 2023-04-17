using System.Net.Sockets;
using System.Net;

namespace WinFormsApp3
{
    public partial class Server : Form
    {
        public Server()
        {
            InitializeComponent();

            labelShowStatus.Text = "Wait Connecting....";
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());

            IPAddress ipAddr = ipHost.AddressList[0];

            // use to connect with Server
            int port2 = 8082;
            try
            {
                TcpListener tcpListenerServer = new TcpListener(ipAddr, port2);
                labelShowStatus.Text = "Ready...";
                tcpListenerServer.Start();
            }
            catch (Exception ex)
            {
                labelShowStatus.Text = "EOF " + ex.Message;
            }
        }
    }
}