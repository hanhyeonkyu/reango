# REANGO

## react(typescript) + django boilerplate

### django
- [x] basic setting
- [x] apply djangorestframework
- [x] make serializer & view & url
- [x] GET, PUT, PATCH, DELETE, HEAD, OPTIONS example
- [x] write way to use this framework
- [x] mysql connect

### react
- [x] basic setting
- [x] apply typescript
- [x] make useful utility for use
- [x] connect api

### usage

#### backend
1. In terminal `brew install python3` and then `pip3 install django djangorestframework django-cors-headers mysqlclient`
2. Excute VSCode and Open backend/djangoapi/settings.py file and then setting your database(in my case mysql database)
3. In terminal `cd backend` and then excute 3 step
   - `python3 manage.py makemigrations` it is for making a migration info.
   - `python3 manage.py migrate` it is for applying migration info to database.
   - `python3 manage.py runserver` it is for running your server.

#### frontend
1. In terminal `yarn;yarn start` it is for install your package and then run your wep app!

It's Done 😀 ~~!