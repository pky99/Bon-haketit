# Backend

## Setup:

## Only for Windows:
1. Install chocolatey from [here](https://chocolatey.org/install) or run the below command on powershell.
```
$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
2. Then Install choco
```
$ choco install make
```
3. 
```
$ make
```
  - for Windows:
  ```
    $ Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
    $ . HFenv\Scripts\activate
  ```
  - for linux:
  ```
  . ./HFenv/bin/activate
  ```
  - finally: To start the server
  ```
  $ python manage.py runserver 0.0.0.0:3000
  ```  



