﻿using System;
using System.Net;
using System.Net.Sockets;
using System.Windows.Forms;
using System.Threading;
using System.Text;
using System.IO;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

                // command == 0
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

                // command == 1
                if (command == 1) 
                { 
                    Invoke((Action)(() => labelShowStatus3.Text = "jiedaole"));
                    byte[] data1 = new byte[4];
                    
                    streamClient.Read(data1,0, data1.Length);

                    int fileNameBytesLength = BitConverter.ToInt32(data1, 0);

                    // 创建一个副本用来保存原来的文件
                    byte[] data1_copy = new byte[data1.Length];
                    Array.Copy(data1, data1_copy, data1.Length);

                    data1 = new byte[fileNameBytesLength];

                    streamClient.Read(data1, 0, fileNameBytesLength);

                    // 创建一个副本用来保存原来的文件
                    byte[] data2_copy = new byte[data1.Length];
                    Array.Copy(data1, data2_copy, data1.Length);

                  
                    Invoke((Action)(() => labelShowStatus2.Text = data2_copy.Length.ToString() ));
                    string fileName = Encoding.UTF8.GetString(data1);

                    string path = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(),"../../../CacheData"));

                    Invoke((Action)(() => labelShowStatus3.Text = path));

                    string fileNamePath = Path.Combine(path, fileName);

                    if (File.Exists(fileNamePath)) {
                        Invoke((Action)(() => labelShowStatus3.Text = "Good MUM")); 

                    
                    }
                    else {
                        byte[] data0 = { 1 };
                        byte[] combinedData = new byte[data0.Length + data1_copy.Length + data2_copy.Length];
                        Buffer.BlockCopy(data0, 0, combinedData, 0, data0.Length);
                        Buffer.BlockCopy(data1_copy, 0, combinedData, data0.Length, data1_copy.Length);
                        Buffer.BlockCopy(data2_copy, 0, combinedData, data1_copy.Length + data0.Length, data2_copy.Length);

                        TcpClient tcpClientCache1 = new TcpClient(ipAddr.ToString(), port2);
                        using (NetworkStream stream = tcpClientCache1.GetStream())
                        {
                            stream.Write(combinedData, 0, combinedData.Length);
                            stream.Flush();

                            byte[] data1_length = new byte[4];
                            stream.Read(data1_length, 0, data1_length.Length);
                            int fileNameBytesLength1 = BitConverter.ToInt32(data1_length, 0);

                            // 文件内容
                            byte[] data2 = new byte[fileNameBytesLength1];
                            stream.Read(data2, 0, fileNameBytesLength1);
                            string fileContent = Encoding.UTF8.GetString(data2);
                            Invoke((Action)(() => labelShowStatus3.Text = fileContent));
                        }


                    }

                   
                }
                if (command == 11) { }
            }
        }
    }
}
