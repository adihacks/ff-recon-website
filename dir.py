import requests

url = "http://www.adihacks.com/"
wordlist = "wordlist.txt"
	
fo = open(wordlist,"r+")
for i in range(5):
	word = fo.readline(10).strip()
	surl = url+word
	#print (surl)
	response = requests.get(surl)
    
	#print (response)
	if (response.status_code == 200):
		print ("[+] 200 OK :- ",surl)
	else:	
		print ("[-] 400 NOT FOUND :- ",surl)

line = fo.readline()
print(line)
        

    # ua = UserAgent()
    # user_agent = ua.random
    # host='http://www.adihacks.com/'
    # filepath = 'wordlist.txt'
    # with open(filepath) as fp:
    #     line = fp.readline()
    #     while line:
    #         combined = host+line.strip()
    #         r = requests.get(combined, headers={'User-Agent': user_agent})
    #         if r.status_code == 200:
    #             return (line.strip(),'\n',r)
    #         line = fp.readline()


    #     url = "http://www.adihacks.com/"
    # wordlist = "wordlist.txt"
    # fo = open(wordlist,"r+")
    # a = ['']
    # b= ['']
    # for i in range(5):
	#     word = fo.readline(10).strip()
	#     surl = url+word
	#     response = requests.get(surl)
	#     if (response.status_code == 200):
	# 	     a+= ("[+] 200 OK :- ",surl)
	#     else:
	# 	     b+=  ("[-] 400 NOT FOUND :- ",surl)
     
    # return{'result': a & b }