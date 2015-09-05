#coding=utf8
import json
import logging
from django.shortcuts import render

# Create your views here.
from django.template import loader, Context
from django.http import HttpResponse
from ifile.config import BUCKET_NAME, CALLBACK_URL, Q_DOMAIN
from q import qiniu, ACCESS_KEY, SECRET_KEY


def home(request):
    policy = qiniu.rs.PutPolicy(BUCKET_NAME)
    policy.callbackBody = 'key=$(x:key)'
    policy.callbackUrl = CALLBACK_URL
    up_token = policy.token()

    # new sdk
    # auth = qiniu.Auth(ACCESS_KEY, SECRET_KEY)
    # policy = {
    #     'callbackUrl' : 'key=$(x:key)',
    #     'callbackBody' : CALLBACK_URL,
    # }
    # up_token = auth.upload_token(BUCKET_NAME, key=None, policy=policy)

    t = loader.get_template("index.html")
    c = Context({'up_token': up_token})
    return HttpResponse(t.render(c))

def upload_callback(request):

    print 'upload_callback start'
    logging.debug('upload_callback start')

    download_url = ''

    if not request.POST.has_key('key'):
        print 'request has not key attribute'
        logging.debug('request has not key attribute')

    if request.method == 'POST':
        if request.POST.has_key('key'):
            key = request.POST['key']
            download_url = qiniu.rs.make_base_url(Q_DOMAIN, key)
    else:
        print 'request not belong to POST'
        logging.debug('request not belong to POST')

    # if NEED_EXPIRE:
    #     from cleaner import add_to_expire_queue
    #     add_to_expire_queue(key)
    print download_url
    logging.debug('download_url: ' + download_url)

    return HttpResponse(json.dumps(download_url), content_type="application/json")

def test_callback(request):
    print 'test callback start'
    logging.debug('test callback start')
    result = {"success":0,"key":"null","hash":"null","message":"文件上传失败,请重新上传."}
    return HttpResponse(json.dumps(result), content_type="application/json")

def test_home(request):
    t = loader.get_template("test.html")
    c = Context()
    return HttpResponse(t.render(c))

def test_post(request):
    print 'test_post'
    if request.method == "POST":
        content = request.POST['place']
        print content

    response_data = {}
    response_data['result'] = 'failed'
    response_data['message'] = 'You messed up'
    return HttpResponse(json.dumps(response_data), content_type="application/json")