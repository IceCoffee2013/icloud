#coding=utf8
from django.db import models

# Create your models here.
from django.forms import ModelForm


class Rent(models.Model):
    subject = models.CharField(max_length=30, verbose_name=u'主题')
    user = models.CharField(max_length=30, verbose_name=u'作者')
    city = models.CharField(max_length=30, verbose_name=u'城市')
    date = models.DateTimeField(null=True, verbose_name=u'日期')
    content = models.TextField(verbose_name=u'内容')
    addTime = models.DateTimeField(auto_now_add=True, verbose_name=u'修改时间')

    def __unicode__(self):
        return u'%s %s %s' % (self.subject, self.user, self.city)

    def get_absolute_url(self):
        return u'/post/%d/%s/' % (self.id, self.subject.replace('/', '-'))

    class Meta:
        ordering = ['addTime', 'subject', 'city']
        verbose_name_plural = verbose_name = u'租房信息'


class RentForm(ModelForm):
    class Meta:
        model = Rent
        fields = ('subject', 'user', 'city', 'content')