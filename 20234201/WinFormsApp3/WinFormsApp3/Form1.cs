using System;
using System.Net;
using System.Net.Sockets;
using System.Windows.Forms;
using System.Threading;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.IO;
using System.Reflection.Metadata;

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

            piece_Data();

            Thread serverThread = new Thread(() => StartServer(ipAddr, port2));
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

        private void piece_Data()
        {
            string folderPathAllData = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../ServerAllData"));
            foreach (string filePath in Directory.GetFiles(folderPathAllData))
            {
                string fileName0 = Path.GetFileName(filePath);
                string piecefilePath0 = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "../../../PieceData", fileName0));

                Directory.CreateDirectory(piecefilePath0);
                byte[] bytes = File.ReadAllBytes(filePath); // 读取文件内容

                // 没什么用
                string hexString = BitConverter.ToString(bytes).Replace("-", ""); // 转换为十六进制字符串
                string fileContent = Encoding.UTF8.GetString(StringToByteArray(hexString)); //转换成字符串

                List<string> list = new List<string>();

                if (fileContent.Length > 6)
                {
                    int lastSplit = 0;
                    for (int i = 0; i <= fileContent.Length - 6; i++)
                    {
                        string strWindow = fileContent.Substring(i, 6);
                        int Rob = RobinHash(strWindow);
                        if (Rob == 0)
                        {
                            string chunk = fileContent.Substring(lastSplit, i - lastSplit);
                            list.Add(chunk);
                            lastSplit = i;
                        }
                    }
                    // 添加最后一个切片
                    string lastChunk = fileContent.Substring(lastSplit);
                    list.Add(lastChunk);
                }
                else
                {
                    list.Add(fileContent);
                }

                int index = 1;

                foreach (string item in list)
                {
                    string piecefileName = index.ToString() + ".txt";
                    
                    string piecefilePath = Path.GetFullPath(Path.Combine(piecefilePath0, piecefileName));

                    File.WriteAllText(piecefilePath, item);

                    index++;
                }

            }
        }
        private byte[] StringToByteArray(string hexString)
        {
            int numBytes = hexString.Length / 2;
            byte[] bytes = new byte[numBytes];
            for (int i = 0; i < numBytes; i++)
            {
                bytes[i] = Convert.ToByte(hexString.Substring(i * 2, 2), 16);
            }
            if (bytes.Length >= 3 && bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF)
            {
                return bytes[3..];
            }
            else
            {
                return bytes;
            }
        }
        private int RobinHash(string key)
        {
            int a = 19;
            int b = 26;
            int p = 7919;
            int m = 2048;

            int hash = 0;
            foreach (char c in key)
            {
                string cc = c.ToString();
                hash = (hash * a + (int)c + b) % p;
            }
            return hash % m;
        }
    }
}
