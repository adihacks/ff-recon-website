import requests
import argparse

TGREEN =  '\033[32m'
TWHITE = '\033[37m'
TRED = '\033[31m'

parser = argparse.ArgumentParser()
parser.add_argument("-t", help="target url", dest='target')
args = parser.parse_args()
target = 'google.com'

print(TGREEN + '''
  ___  ____  ____   ___  _   _ 
 / __)(  _ \(_  _) / __)( )_( )
( (__  )   /  )(   \__ \ ) _ ( 
 \___)(_)\_) (__)()(___/(_) (_)                                                            

''',TWHITE)

if target is None:
    print(TRED + "Missing target! ==>",TWHITE + TGREEN + "Usage: crt.py -t target.com")
    print("")
else:
    # def displayText():
     response = requests.get('https://crt.sh/?q=' + target + '&output=json').json
     json = response.json()
     for show in json:
         print(show['common_name'])


