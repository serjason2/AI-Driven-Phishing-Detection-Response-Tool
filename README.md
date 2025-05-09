# Problem Statement
Phishing still remains a top attack vector within the world of Cybersecurity. Phishing is apart of a Social Engineering technique.

**What is Social Engineering?**: Social Engineering is a manipulation technique that exploits human error to gain private information, access, or valuables.

**What is Phishing?**: Phishing is the use of digital communications to trick people into revealing sensitive data or deploying malicious software.

# Solution
To mitigate this risk from happening upon others we decided to build a browser extension/email plugin that utilizes AI/ML to detect phishing attempts in real time and educate users.

**Artificial Intelligence (AI)**: "Is a technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy." - IBM

**Machine Learning (ML)**: "Is a branch of artificial intelligence (AI) focused on enabling computers and machines to imitate teh way that humans learn, to perform tasks autonomously, and to improve their performance and accuracy through experience and exposure to more data." - IBM

# Why this Works
This Social Engineering technique is an ongoing and growing threat that has been around for a very long time and statistics shows. This solution can be pitched to schools, remote companies, or public sector orgs.

# Tech Stack | How to Use (Step-By-Step)
- **Programming:** HTML, JS
- **API:** Google Safe Browsing
- **Image:** Designer by Monkik via [Flaticon](https://www.flaticon.com/authors/monkik)


**Usage**:
1. cd into a directory of your choice.
2. git clone {...this repo...}
3. open and head into background.js file
4. add this line:

const API_KEY = "paste your API key" ( ex: const API_KEY = "1232432test" )

5. To obtain your API key (don't share), head to this website: [Googe Cloud](https://console.cloud.google.com/)
6. sign up and login to account
7. navigation menu -> apis and services -> library -> search for "safe browsing api"
8. click enable
9. click navigation menu -> apis and services -> credentials -> create credentials -> api key
10. add restriction of "safe browsing api"
11. copy api key, go into "background.js" file and paste your api key
12. goto search engine and search: chrome://extensions
13. turn on developer mode
14. click "load unpacked" and click this directory "my-extension"
15. extension now works! Make sure to pin the extension and go on any website and click on the extension to see if its safe/suspicious

## Main Contributions
- Jason Sourivong (serjason2)

**This is for personal use, and not commerical use.**