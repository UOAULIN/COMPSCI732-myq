using System;
using System.Net;
using System.Net.Sockets;
using System.Windows.Forms;
using System.Threading;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

            // 将所有的文件展示在listBox中
            string pathAllData = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../ServerAllData"));
            string[] strings = Directory.GetFiles(pathAllData);

            string[] fileNames = new string[strings.Length];

            int nott0 = 0;
            foreach (string s in strings)
            {
                fileNames[nott0++] = Path.GetFileName(s);
            }

            string string_list = string.Join(",", fileNames);

            string[] response_Alllist = string_list.Split(",");
            listBoxAllData.Items.AddRange(response_Alllist);

            // 将所有的文件展示在listBox中
            string pathAllData2 = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../ServerData"));
            string[] strings2 = Directory.GetFiles(pathAllData2);

            string[] fileNames2 = new string[strings2.Length];

            int nott2 = 0;
            foreach (string s2 in strings2)
            {
                fileNames2[nott2++] = Path.GetFileName(s2);
            }

            string string_list2 = string.Join(",", fileNames2);

            string[] response_Alllist2 = string_list2.Split(",");
            listBoxServerData.Items.AddRange(response_Alllist2);

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

                // 获取接收到的command，在后面进行判断

                byte command = (byte)streamServer.ReadByte();

                if (command == 0) { 
                    
                    // 在状态指示栏中输出连接成功
                    Invoke((Action)(() => labelShowStatus1.Text = "Cache connected")); 

                    StreamWriter writer = new StreamWriter(streamServer, Encoding.UTF8);

                    string path = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../ServerData"));

                    string[] strings = Directory.GetFiles(path);
                    
                    string[] fileNames = new string[strings.Length];

                    int nott = 0;
                    foreach (string s in strings) {
                        fileNames[nott++] = Path.GetFileName(s);
                    }
                    

                    string string_list = string.Join(",", fileNames);
                     
                    
                    writer.Write(string_list);
                    writer.Flush();
                    Invoke((Action)(() => labelShowStatus2.Text = "Back Message"));
                    writer.Close();
                }
                if (command == 1) {
                    
                    // 第一部分用于确定文件名字，也就是记住文件的名字

                    Invoke((Action)(() => labelShowStatus3.Text = "Waiting tanslate"));

                    byte[] data1 = new byte[4];

                    streamServer.Read(data1, 0, data1.Length);

                    int fileNameBytesLength = BitConverter.ToInt32(data1, 0);

                    data1 = new byte[fileNameBytesLength];

                    streamServer.Read(data1, 0, fileNameBytesLength);

                    string fileName = Encoding.UTF8.GetString(data1);

                    string path = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../ServerData"));

                    Invoke((Action)(() => labelShowStatus3.Text = path));

                    string fileNamePath = Path.Combine(path, fileName);

                    // 第二部分我们开始将文件传输回去


                    
                    byte[] fileContent = File.ReadAllBytes(fileNamePath);

                    byte[] fileContentLength = BitConverter.GetBytes(fileContent.Length);

                    byte[] dataCombine = new byte[4 + fileContent.Length];
                    Array.Copy(fileContentLength, 0, dataCombine, 0, fileContentLength.Length);
                    Array.Copy(fileContent, 0, dataCombine, fileContentLength.Length, fileContent.Length);

                    streamServer.Write(dataCombine, 0, dataCombine.Length);
                    streamServer.Flush();
                    streamServer.Close();

                }
                if (command == 2) { }


            }
        }

        private void buttonAuth_Click(object sender, EventArgs e)
        {
            string selectedItem1 = listBoxAllData.SelectedItem as string ?? string.Empty;
            string sourcePath = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../ServerAllData", selectedItem1));
            string destinationPath = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../ServerData", selectedItem1));
            try
            {
                File.Copy(sourcePath, destinationPath, true);
                
            }
            catch (Exception ex)
            {
                
            }

            if (!listBoxServerData.Items.Contains(selectedItem1))
            {
                listBoxServerData.Items.Add(selectedItem1);
            }
        }
    }
}
