using System.Net;
using System.Net.Sockets;
using System.Reflection.PortableExecutable;
using System.Text;
using System.IO;
using System;

namespace ConsoleApp8
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Server starting !");

            // 为套接字建立远程端点，上述代码使用的是本地计算机上的8081端口
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());
            
            IPAddress ipAddr = ipHost.AddressList[0];

            int port = 8081;

            try
            {
                Console.WriteLine("Please enter your operation:");
                string operation = Console.ReadLine();
                
                // 客户端开始启动
                Console.WriteLine("start client");
                TcpClient client = new TcpClient(ipAddr.ToString(), port);

                Console.WriteLine("Connect to server");
                byte opera = byte.Parse(operation);
                if (opera == 0)
                {
                    using (NetworkStream stream = client.GetStream())   //直接tab
                    {
                        // 将指令传输到服务器返回响应
                        stream.WriteByte(opera);
                        // 确保命令被写入到网络流中并发送到服务器
                        stream.Flush();
                        // 从stream中读取响应字符串
                        StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                        // 将读取到的响应存储到response中
                        string response = reader.ReadLine();
                        // 输出接收到的响应
                        Console.WriteLine("Received string: " + response);
                    }
                }
                if (opera == 1)
                {
                    Console.WriteLine();

                    string operation1 = Console.ReadLine();
                    byte opera1 = byte.Parse(operation1);
                    // 需要用户输入想要下载的文件名
                    Console.WriteLine("File name: ");
                    string FileName = Console.ReadLine();
                    // 将字符串的FileName转换成bit流
                    byte[] fileNameBytes = Encoding.UTF8.GetBytes(FileName);
                    // 记录文件转换成字节之后的长度
                    byte[] fileNameLengthBytes = BitConverter.GetBytes(fileNameBytes.Length);
                    // 两位用来存储操作
                    byte[] data = new byte[6 + fileNameBytes.Length];
                    // 下载文件

                    data[0] = opera;
                    data[1] = opera1;
                    Array.Copy(fileNameLengthBytes, 0, data, 2, fileNameLengthBytes.Length);
                    Array.Copy(fileNameBytes, 0, data, 6, fileNameBytes.Length);

                    if (opera1 == 0)
                    {
                        using (NetworkStream stream = client.GetStream())
                        {
                            // Send the data to the server
                            stream.Write(data, 0, data.Length);
                            stream.Flush();

                            // the StreamReader object is used to receive reply from the server
                            StreamReader reader = new StreamReader(stream);
                            string line;

                            // print out the contents of the file received from the server
                            while ((line = reader.ReadLine()) != null)
                            {
                                Console.WriteLine(line);
                            }

                            reader.Close();
                            stream.Close();
                            client.Close();

                        }
                    }
                    // 下载文件是图片，并且展示
                    if (opera1 == 1)
                    {

                    }
                    
                    

                    
                    
                }

            }
            catch (Exception ex) { Console.WriteLine(ex.Message); }
        }
    }
}
