#Python code for simple port scanning
import sys  
import socket
import ipaddress  #importing library 
  
# ip = socket.gethostbyname (socket.gethostname())  #getting ip-address of host
# ip = ipaddress.ip_address('142.250.80.68')
remoteServer    = 'www.google.com'
remoteServerIP  = socket.gethostbyname(remoteServer)

for port in range(79,81):  
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex((remoteServerIP, port))
    if result == 0:
        #  print ("Port {}: 	 Open".format(port))
        print('[OPEN] Port open :',port)
    