using System;
using System.Net;
using System.Net.Sockets;
using System.Windows.Forms;
using System.Threading;
using System.Text;

namespace WinFormsApp2
{
    public partial class Cache : Form
    {
        public Cache()
        {
            InitializeComponent();

            labelShowStatus.Text = "Wait Connecting...";
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress ipAddr = ipHost.AddressList[0];

            // use to connect with Client
            int port1 = 8081;

            // use to connect with Server
            int port2 = 8082;

            Thread cacheThread = new Thread(() => RunCacheServer(ipAddr, port1, port2));
            cacheThread.IsBackground = true;
            cacheThread.Start();
        }

        private void RunCacheServer(IPAddress ipAddr, int port1, int port2)
        {
            TcpListener tcpListenerCache = new TcpListener(ipAddr, port1); 
            TcpClient tcpClientCache = new TcpClient(ipAddr.ToString(), port2);
            Invoke((Action)(() => labelShowStatus.Text = "Connect to Server"));

            tcpListenerCache.Start();

            while (true)
            {
                // receive
                var client = tcpListenerCache.AcceptTcpClient();
                

                NetworkStream streamClient = client.GetStream();

                // 读一位
                byte command = (byte)streamClient.ReadByte();

                if (command == 0)
                {
                    Invoke((Action)(() => labelShowStatus1.Text = "Client connected"));
                    try
                    {
                        byte command1 = 0;
                        using (NetworkStream streamServer = tcpClientCache.GetStream())
                        {

                            streamServer.WriteByte(command1);
                            streamServer.Flush();
                            // 从服务器获取数据
                            StreamReader reader = new StreamReader(streamServer, Encoding.UTF8);
                            string response = reader.ReadToEnd();

                            
                            StreamWriter writer = new StreamWriter(streamClient, Encoding.UTF8);
                            writer.Write(response);
                            writer.Flush();
                            Invoke((Action)(() => labelShowStatus2.Text = "Send back message to Client"));
                            writer.Close();
                        }
                        

                    }
                    catch (Exception ex)
                    {

                    }
                    
                }
                
                if (command == 1) { Invoke((Action)(() => labelShowStatus3.Text = "jiedaole")); }
                if (command == 11) { }
            }
        }
    }
}
