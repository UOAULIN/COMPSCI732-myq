using System.Net;
using System.Net.Sockets;

namespace WinFormsApp2
{
    public partial class Cache : Form
    {
        public Cache()
        {
            InitializeComponent();
            
            labelShowStatus.Text = "Wait Connecting....";
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());

            IPAddress ipAddr = ipHost.AddressList[0];

            // use to connect with Client
            int port1 = 8081;

            // use to connect with Server
            int port2 = 8082;
            try {
                TcpListener tcpListenerCache = new TcpListener(ipAddr, port1);
                tcpListenerCache.Start();

                TcpClient tcpClientCache = new TcpClient(ipAddr.ToString(), port2);
                labelShowStatus.Text = "Connect to Server";
            }catch (Exception ex)
            {
                labelShowStatus.Text = "EOF " + ex.Message;
            }
            
        }
    }
}