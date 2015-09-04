#-*-coding:utf-8-*-

ACCESS_KEY = 'YUS5eY4T8fP4Q8MgeLSPVmeej-KppcJwQlmQPR29'
SECRET_KEY = 'hx22Fa6jJrdHUg0IWrY8L2TK5WyQ9WR_d3VqUPpq'

BUCKET_NAME = 'ifile'
Q_DOMAIN = '7xlk5b.com1.z0.glb.clouddn.com' # your qiniu domain

CALLBACK_URL = 'callback' # explained in http://docs.qiniu.com/api/v6/put.html#put-policy


# NOTE: following configs are only necessary if you need file expiration

EXPIRE_TIME = 0 # file expire time in minutes (0 means no expire)
NEED_EXPIRE = EXPIRE_TIME > 0

REDIS_HOST = 'localhost'
REDIS_PORT = 6379

# try:
#     from local_config import *
# except:
#     pass
