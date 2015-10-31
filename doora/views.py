#coding=utf8
import json
import logging
from django.shortcuts import render

# Create your views here.
from django.template import loader, Context
from django.http import HttpResponse, HttpResponseRedirect, Http404

# Create your views here.
import time
from doora.models import Rent, RentForm
import sys
reload(sys)
sys.setdefaultencoding("utf-8")

def home(request):
    infos = Rent.objects.all()
    for info in infos:
        # print  info.addTime
        # tmpTime = time.strftime(info.addTime, "%Y年%m月%d日 %H:%M")
        info.addTime = info.addTime.strftime("%m-%d %H:%M")
        # info.addTime = time.strftime("%m-%d %H:%M")
        # info.addTime.strftime("%m-%d %H:%M")
        # print info.addTime
        # print time.strftime("%m-%d %H:%M")
    t = loader.get_template("doora_flow.html")
    c = Context({'infos' : infos})
    return HttpResponse(t.render(c))


def publish(request):
    t = loader.get_template("doora_publish.html")
    c = Context()
    return HttpResponse(t.render(c))


def submit(request):

    if request.method == 'POST': # 如果表单被提交
        print 'post'
        print request.get_full_path()
        form = RentForm(request.POST) # 获取Post表单数据
        # form.Meta.model.date = time.strftime("%m-%d %H:%M")
        # print form.Meta.model.date
        print request.POST
        print form
        logging.debug(form)
        if form.is_valid(): # 验证表单
            print form.cleaned_data['subject']
            test = form.save(commit=False)
            test.save()
            form.save()
            return HttpResponseRedirect('/doora') # 跳转
            # t = loader.get_template("campus_result.html")
            # c = Context({'seats': ''})
            # return HttpResponse(t.render(c))
        else:
            form = RentForm() #获得表单对象
            print 'form is not valid'
            logging.debug('form is not valid')
            return HttpResponseRedirect('/doora/publish')

    else:
        print 'request not belong to POST'
        logging.debug('request not belong to POST')

    logging.debug('error')
    return HttpResponse('error')


def show_post(request, pid):
    try:
        post = Rent.objects.select_related().get(id=int(pid))
    except:
        raise Http404

    t = loader.get_template("doora_post_full.html")
    c = Context({'post' : post})
    return HttpResponse(t.render(c))


def location(request):
    t = loader.get_template("doora_location.html")
    c = Context({})
    return HttpResponse(t.render(c))


def search(request):
    if 'city' in request.GET:
        key = request.GET['city']
        # print 'key: ' + key
        if key == '0':
            results = Rent.objects.all()
            # print 'all'
        else:
            results = Rent.objects.filter(city__icontains=key)

        for info in results:
            info.addTime = info.addTime.strftime("%m-%d %H:%M")

        t = loader.get_template("doora_flow.html")
        c = Context({'infos': results})
        return HttpResponse(t.render(c))
    else:
        msg = 'You submitted an empty form.'
        return HttpResponse(msg)