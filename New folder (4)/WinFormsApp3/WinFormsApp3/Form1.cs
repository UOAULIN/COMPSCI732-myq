using System;
using System.Net;
using System.Net.Sockets;
using System.Windows.Forms;
using System.Threading;

namespace WinFormsApp3
{
    public partial class Server : Form
    {
        public Server()
        {
            InitializeComponent();
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress ipAddr = ipHost.AddressList[0];

            // use to connect with Server
            int port2 = 8082;

            labelShowStatus.Text = "Wait Connecting...";

            Thread serverThread = new Thread(() => StartServer(ipAddr,port2));
            serverThread.IsBackground = true; // 设置为后台线程，以便在关闭窗口时终止线程
            serverThread.Start();
        }

        private void StartServer(IPAddress ipAddr, int port2)
        {
            
            TcpListener tcpListenerServer = new TcpListener(ipAddr, port2);

            Invoke((Action)(() => labelShowStatus.Text = "Ready...")); // 使用Invoke更新UI
            tcpListenerServer.Start();

            while (true)
            {
                var cache = tcpListenerServer.AcceptTcpClient();

                 // 使用Invoke更新UI

                NetworkStream streamServer = cache.GetStream();

                byte command = (byte)streamServer.ReadByte();
                if (command == 0) { 
                    Invoke((Action)(() => labelShowStatus1.Text = "Cache connected")); 
                    StreamWriter writer = new StreamWriter(streamServer);
                    string myString = "Hello Wold";
                    writer.Write(myString);
                    writer.Flush();
                    
                }
                if (command == 10) { }
                if (command == 11) { }
            }
        }
    }
}
