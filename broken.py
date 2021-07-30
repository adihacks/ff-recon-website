# Import libraries
from bs4 import BeautifulSoup, SoupStrainer
import requests

# Prompt user to enter the URL
url = "http://www.adihacks.com"

# Make a request to get the URL
page = requests.get(url)

# Get the response code of given URL
response_code = str(page.status_code)

# Display the text of the URL in str
data = page.text

# Use BeautifulSoup to use the built-in methods
soup = BeautifulSoup(data)

# Iterate over all links on the given URL with the response code next to it
for link in soup.find_all('a'):
    print(f"Url: {link.get('href')} " + f"| Status Code: {response_code}")
